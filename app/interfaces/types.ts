export type TQuestionCard = {
  id: number;
  title: string;
  description: string;
  question: string;
  options: Option[];
};

export type Option = {
  text: string;
  points: number;
};

export type State = {
  currentCard: TQuestionCard;
  currentIndex: number;
  totalCards: number;
  points: number;
  selectedOption: Option | null;
};

export enum ATypes {
  InitGame,
  SelectOption,
  AnswerQuestion,
}

export type IAction = {
  type: ATypes;
  payload?: any;
};
