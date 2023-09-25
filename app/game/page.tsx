import { get } from "@vercel/edge-config";
import { Suspense } from "react";
import { GameManager } from "../components/GameManager";

export default async function Game() {
  const data: any = await get("questionCards");

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GameManager questionsCards={data.list}></GameManager>
    </Suspense>
  );
}
