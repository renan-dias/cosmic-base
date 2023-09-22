"use client";
import { ATypes, Option, TQuestionCard } from "../interfaces/types";
import { initialState, reducer } from "../logic/store";
import { AnswerButton } from "./AnswerButton";
import { GameProgressBar } from "./GameProgressBar";
import { OptionsList } from "./OptionsList";
import { QuestionCard } from "./QuestionCard";
import { useReducer, useEffect } from "react";

export const GameManager = ({
  questionsCards,
}: {
  questionsCards: TQuestionCard[];
}) => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    currentCard: questionsCards[0],
  });

  const selectOption = (option: Option) => {
    console.log(option);
    dispatch({
      type: ATypes.SelectOption,
      payload: option,
    });
  };

  const answerQuestion = () => {
    dispatch({
      type: ATypes.AnswerQuestion,
      payload: questionsCards,
    });
  };

  return (
    <main className="p-4 max-w-2xl">
      <GameProgressBar current={2} total={5}></GameProgressBar>
      <QuestionCard card={state.currentCard}></QuestionCard>
      <OptionsList
        card={state.currentCard}
        selectOption={selectOption}
      ></OptionsList>
      <AnswerButton answerQuestion={answerQuestion}></AnswerButton>
    </main>
  );
};
