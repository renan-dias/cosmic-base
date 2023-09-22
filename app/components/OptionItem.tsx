import { Option } from "../interfaces/types";

export const OptionItem = ({
  option,
  index,
  selectOption,
}: {
  option: Option;
  index: number;
  selectOption: (option: Option) => void;
}) => (
  <li
    key={index}
    className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600"
  >
    <div className="flex items-center pl-3">
      <input
        id={`list-radio-${index}`}
        type="radio"
        onChange={() => selectOption(option)}
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
);
