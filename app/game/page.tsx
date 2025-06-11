import { Suspense } from "react";
import { GameManager } from "../components/GameManager";

let data: any = { list: [] };
let edgeConfigError = false;

if (process.env.EDGE_CONFIG) {
  try {
    // Importação dinâmica para evitar erro em build local/sem variável
    const { get } = await import("@vercel/edge-config");
    data = { list: (await get("questionCards"))?.list || [] };
  } catch (e) {
    edgeConfigError = true;
  }
} else {
  edgeConfigError = true;
}

export default function Game() {
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
