import { Progress } from "flowbite-react";

export const GameProgressBar = ({
  total,
  current,
}: {
  total: number;
  current: number;
}) => {
  const progress = Math.floor((current * 100) / total);
  return (
    <Progress
      labelProgress
      labelText
      color="green"
      progress={progress}
      progressLabelPosition="outside"
      size="lg"
      textLabel="Progresso no Questionário"
      textLabelPosition="outside"
    />
  );
};
