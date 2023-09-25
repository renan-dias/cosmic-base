export const GameProgressBar = ({
  total,
  current,
}: {
  total: number;
  current: number;
}) => {
  const progress = Math.floor((current * 100) / total);
  return (
    <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
      <div
        className="transition-[width] duration-500 bg-gradient-to-br from-green-400 to-blue-400 h-4 rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};
