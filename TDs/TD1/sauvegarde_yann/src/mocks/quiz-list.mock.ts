import { Quiz } from '../models/quiz.model';
import { Question } from '../models/question.model';

export const QUESTION_ACTOR: Question = {
     label: 'Jean Gabin a joué dans...',
     answers: [
         {
             value: 'Les tuches II',
             isCorrect: false,
         },
         {
             value: 'La grande illusion',
             isCorrect: true,
         }
     ]
 };

 export const QUESTION_SPORT: Question = {
     label: 'En lancer de nains, on lance...',
     answers: [
         {
             value: 'un chat',
             isCorrect: false,
         },
         {
             value: 'un nain',
             isCorrect: true,
         }
     ]
 };

export const QUIZ_LIST: Quiz[] = [
    {
        name: 'Les Acteurs plop', // What's happening if I change this value..?
        theme: ['Actor'],
        logo: 'fas fa-film',
        questions: [QUESTION_ACTOR],
    },
    {
        name: 'Les Sports',
        theme: ['Sport'],
        logo: 'fas fa-running',
        questions: [QUESTION_SPORT],
    }
];
