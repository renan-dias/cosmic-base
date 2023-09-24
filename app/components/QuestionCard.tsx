import { TQuestionCard } from "../interfaces/types";
import { Card } from "flowbite-react";

export const QuestionCard = ({ card }: { card: TQuestionCard }) => (
  <Card key={card.id} className="max-w-2xl mt-8 mb-4">
    <div className="flex flex-col justify-between p-4 leading-normal">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {card.title}
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {card.description}
      </p>
    </div>
  </Card>
);
