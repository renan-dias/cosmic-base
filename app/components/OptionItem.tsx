import { ATypes, Option } from "../interfaces/types";
import { useContext, useRef, useEffect } from "react";
import { Store } from "./GameManager";
import { ListGroup } from "flowbite-react";
import { Label, Radio } from "flowbite-react";

export const OptionItem = ({
  option,
  index,
}: {
  option: Option;
  index: number;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    if (inputRef.current !== null) {
      inputRef.current.checked = false;
    }
  }, [state.currentIndex]);

  const selectOption = () => {
    if (inputRef.current !== null) {
      inputRef.current.checked = true;
    }
    dispatch({
      type: ATypes.SelectOption,
      payload: { option, inputRef },
    });
  };

  return (
    <ListGroup.Item key={index} onClick={selectOption}>
      <div className="flex items-center gap-2">
        <Radio
          ref={inputRef}
          id={`list-radio-${index}`}
          onChange={selectOption}
          value={option.text}
          name="answer"
        />
        <Label
          htmlFor={`list-radio-${index}`}
          className="font-medium text-left w-full cursor-pointer"
        >
          {option.text}
        </Label>
      </div>
    </ListGroup.Item>
  );
};
