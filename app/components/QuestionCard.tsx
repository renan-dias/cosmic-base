import { TQuestionCard } from "../interfaces/types";

export const QuestionCard = ({ card }: { card: TQuestionCard }) => (
  <div
    key={card.id}
    className="flex my-4 flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row dark:border-gray-700 dark:bg-gray-800"
  >
    <div className="flex flex-col justify-between p-4 leading-normal">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {card.title}
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {card.description}
      </p>
    </div>
  </div>
);
