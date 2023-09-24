import { get } from "@vercel/edge-config";
import { GameManager } from "./components/GameManager";
import { Suspense } from "react";
import { DarkThemeToggle, Flowbite } from "flowbite-react";

export default async function Home() {
  const data: any = await get("questionCards");
  return (
    <Flowbite>
      <DarkThemeToggle />
      <Suspense fallback={<div>Loading...</div>}>
        <GameManager questionsCards={data.list}></GameManager>
      </Suspense>
    </Flowbite>
  );
}
