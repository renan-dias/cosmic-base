import { Option } from "./../interfaces/types";
import { ATypes, IAction, State } from "../interfaces/types";

export const initialState: State = {
  currentIndex: 0,
  currentCard: {
    id: 0,
    question: "",
    title: "",
    description: "",
    options: [],
  },
  totalCards: 0,
  points: 0,
  selectedOption: null,
};

export function reducer(state: State, action: IAction): State {
  switch (action.type) {
    case ATypes.AnswerQuestion:
      const currentIndex = state.currentIndex + 1;
      return {
        ...state,
        currentCard: action.payload[currentIndex],
        currentIndex,
        points: state.points + (state.selectedOption?.points || 0),
        selectedOption: null,
      };
    case ATypes.InitGame:
      return {
        ...initialState,
        totalCards: action.payload.length,
        currentCard:
          action.payload[initialState.currentIndex] || initialState.currentCard,
        selectedOption: null,
      };
    case ATypes.SelectOption:
      return {
        ...state,
        selectedOption: action.payload,
      };
  }
}
