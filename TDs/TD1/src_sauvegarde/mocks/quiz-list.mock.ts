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
     label: 'En boxe, un upercut est un coup effectué...', 
     answers: [
         {
             value: 'de bas en haut', 
             isCorrect: true, 
         },
         {
             value: 'sur les  cotés', 
             isCorrect: false, 
         }
     ]
 }; 

export const QUIZ_LIST: Quiz[] = [
    {
        name: 'Les Acteurs', // What's happening if I change this value..?
        theme: 'Actor',
        questions: [QUESTION_ACTOR],
    },
    {
        name: 'Les Sports',
        theme: 'Sport', 
        questions: [QUESTION_SPORT],
    }
];
