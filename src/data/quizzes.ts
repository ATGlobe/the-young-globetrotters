import { Quiz } from '../types';

export const QUIZZES: Record<string, Quiz> = {
  'rome': {
    id: 'rome-quiz',
    title: 'Rome Explorer Quiz',
    city: 'Rome',
    questions: [
      {
        id: 'q1',
        question: 'Who founded Rome according to legend?',
        options: ['Romulus and Remus', 'Julius Caesar', 'Augustus', 'Nero'],
        correctAnswer: 0
      },
      {
        id: 'q2',
        question: 'What was the Colosseum used for?',
        options: ['Library', 'Gladiator contests', 'Market', 'Church'],
        correctAnswer: 1
      },
      // ... more questions
    ]
  },
  'paris': {
    id: 'paris-quiz',
    title: 'Paris Explorer Quiz',
    city: 'Paris',
    questions: [
      {
        id: 'q1',
        question: 'What is the most famous landmark in Paris?',
        options: ['Big Ben', 'Eiffel Tower', 'Colosseum', 'Statue of Liberty'],
        correctAnswer: 1
      },
      // ... more questions
    ]
  }
};
