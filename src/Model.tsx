export type Answer = {
  text: string;
  isCorrect: boolean;
};

export type Flashcard = {
  question: string;
  answers: Answer[];
};
