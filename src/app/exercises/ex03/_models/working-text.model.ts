export interface Answers {
  all: string[];
  correct: string;
}

export interface WorkingTextModel {
  working_text: string;
  answers: Answers[];
}
