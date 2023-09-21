import { get } from "@vercel/edge-config";

type QuestionCard = {
  id: number;
  title: string;
  description: string;
  question: string;
  options: Option[];
};

type Option = {
  text: string;
  points: number;
};

export default async function Home() {
  const questions: any = await get("questionCards");
  if (!questions) {
    return <></>;
  }
  let card: QuestionCard = questions.list[0];

  return (
    <main className="p-4">
      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
        <div
          className="bg-blue-600 h-4 rounded-full"
          style={{ width: "45%" }}
        ></div>
      </div>

      {/* CARD */}
      <div
        key={card.id}
        className="flex my-4 flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800"
      >
        <div className="flex flex-col justify-between p-4 leading-normal">
          {/* Title and description */}
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {card.title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {card.description}
          </p>
          {/* questions */}
          <div>{card.question}</div>
        </div>
      </div>
      <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {card.options.map((option, index) => (
          <li
            key={index}
            className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600"
          >
            <div className="flex items-center pl-3">
              <input
                id={`list-radio-${index}`}
                type="radio"
                value=""
                name="list-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor={`list-radio-${index}`}
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {option.text}
              </label>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
