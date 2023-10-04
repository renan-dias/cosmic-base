import { get } from "@vercel/edge-config";
import { Suspense } from "react";
import { GameManager } from "../components/GameManager";
import { ActivitiesList } from "./components/ActivitiesList";

export default function Cosmic() {
  return (
    <div className="p-6">
      <div className="text-4xl mb-4">Cosmic</div>
      <ActivitiesList />
    </div>
  );
}
