import { Suspense } from "react";
import { GameManager } from "../components/GameManager";

export default async function Game() {
  let data: any = { list: [] };
  let edgeConfigError = false;

  if (process.env.EDGE_CONFIG) {
    try {
      const { get } = await import("@vercel/edge-config");
      const result = await get("questionCards");
      if (result && typeof result === "object" && "list" in result) {
        data = { list: (result as any).list || [] };
      } else {
        data = { list: [] };
      }
    } catch (e) {
      edgeConfigError = true;
    }
  } else {
    edgeConfigError = true;
  }

  if (edgeConfigError) {
    return (
      <div className="p-8 text-center text-red-600">
        Erro: Configuração do Edge Config não encontrada.
        <br />
        Verifique se a variável de ambiente <b>EDGE_CONFIG</b> está definida na
        Vercel.
        <br />
        O jogo não pode ser carregado sem essa configuração.
      </div>
    );
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GameManager questionsCards={data.list}></GameManager>
    </Suspense>
  );
}
