import { useContext } from "react";
import { Store } from "./GameManager";
import { ATypes } from "../interfaces/types";
import { Button } from "flowbite-react";
import { PropsWithChildren } from "react";
import { Tooltip } from "flowbite-react";

const ControlableTooltip = ({
  show,
  content,
  children,
}: PropsWithChildren<{ show: boolean; content: string }>) =>
  show ? <Tooltip content={content}>{children}</Tooltip> : <>{children}</>;

export const AnswerButton = () => {
  const { state, dispatch, questionsCards } = useContext(Store);
  const answerQuestion = () => {
    dispatch({
      type: ATypes.AnswerQuestion,
      payload: questionsCards,
    });
  };

  const disabled = state.selectedOption == null;

  return (
    <div className="flex flex-row mt-4 justify-end">
      <ControlableTooltip show={disabled} content="Escolha uma opção">
        <Button
          gradientDuoTone="greenToBlue"
          outline
          disabled={disabled}
          onClick={answerQuestion}
        >
          <p>Responder</p>
        </Button>
      </ControlableTooltip>
    </div>
  );
};
