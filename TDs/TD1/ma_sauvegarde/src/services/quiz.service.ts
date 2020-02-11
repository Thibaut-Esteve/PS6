import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Quiz } from '../models/quiz.model';
import { QUIZ_LIST } from '../mocks/quiz-list.mock';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

   /**
    * The list of quiz.
    * The list is retrieved from the mock.
    */
  private quizzes: Quiz[] = QUIZ_LIST;

  /**
   * Observable which contains the list of the quiz.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public quizzes$: BehaviorSubject<Quiz[]> = new BehaviorSubject(this.quizzes);
  
  /**
   * Attribut pour stocker l'url à appeler
   */
  public urlStock = 'https://api.myjson.com/bins/silu2'; 

  
  constructor(private http: HttpClient) {}
  //constructor() {}

  addQuiz(quiz: Quiz) {
    // You need here to update the list of quiz and then update our observable (Subject) with the new list
    // More info: https://angular.io/tutorial/toh-pt6#the-searchterms-rxjs-subject
    this.quizzes.push(quiz); 
    this.quizzes$.next(this.quizzes); 
  }

  deleteQuiz(quiz : Quiz) {
    this.quizzes.splice(this.quizzes.indexOf(quiz), 1); 
    this.quizzes$.next(this.quizzes); 
  }

  
  setQuizFromUrl(){
    this.http.get<{quizzes: Quiz[]}>(this.urlStock).subscribe((quizzesObj : {quizzes: Quiz[]}) => {
      this.quizzes = quizzesObj.quizzes; 
      this.quizzes$.next(this.quizzes); 
      console.log(Object.values(quizzesObj)); 
    }); 
  }
  
}
