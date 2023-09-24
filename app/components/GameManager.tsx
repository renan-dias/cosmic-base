"use client";
import { createContext, useReducer } from "react";
import { State, TQuestionCard } from "../interfaces/types";
import { initialState, reducer } from "../logic/store";
import { AnswerButton } from "./AnswerButton";
import { GameProgressBar } from "./GameProgressBar";
import { OptionsList } from "./OptionsList";
import { QuestionCard } from "./QuestionCard";

export const Store = createContext({
  state: {} as State,
  dispatch: (...args: any) => {},
  questionsCards: [] as TQuestionCard[],
});

export const GameManager = ({
  questionsCards,
}: {
  questionsCards: TQuestionCard[];
}) => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    currentCard: questionsCards[0],
    totalCards: questionsCards.length,
  });

  return (
    <main className="p-4 max-w-2xl dark">
      <Store.Provider value={{ state, dispatch, questionsCards }}>
        <GameProgressBar
          current={state.currentIndex}
          total={state.totalCards}
        ></GameProgressBar>
        <QuestionCard card={state.currentCard}></QuestionCard>
        <OptionsList card={state.currentCard}></OptionsList>
        <AnswerButton></AnswerButton>
      </Store.Provider>
    </main>
  );
};
