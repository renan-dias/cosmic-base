import { get } from "@vercel/edge-config";
import { GameManager } from "./components/GameManager";
import { Suspense } from "react";

export default async function Home() {
  const data: any = await get("questionCards");

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GameManager questionsCards={data.list}></GameManager>
    </Suspense>
  );
}
