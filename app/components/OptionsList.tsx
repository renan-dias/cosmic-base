import { TQuestionCard } from "../interfaces/types";
import { OptionItem } from "./OptionItem";
import { ListGroup } from "flowbite-react";

export const OptionsList = ({ card }: { card: TQuestionCard }) => (
  <>
    <div className="text-lg mb-2">{card.question}</div>
    <ListGroup>
      {card.options.map((option, index) => (
        <OptionItem key={index} option={option} index={index}></OptionItem>
      ))}
    </ListGroup>
  </>
);
