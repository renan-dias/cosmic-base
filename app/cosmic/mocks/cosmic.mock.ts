import { ETipoAtividade, EtapaCosmic } from "../types/cosmic.types";

export const etapasCosmic: EtapaCosmic[] = [
  {
    nome: "Introdução",
    atividades: [
      {
        nome: "Atividade 1",
        tipo: ETipoAtividade.BASICA,
        arquivos: {
          principal: "Arquivo Atividade 1",
        },
      },
      {
        nome: "Atividade 2",
        tipo: ETipoAtividade.BASICA,
        arquivos: {
          principal: "Arquivo Atividade 2",
        },
      },
    ],
  },
  {
    nome: "1ª Etapa",
    fichas: "1914 a 1924",
    atividades: [
      {
        nome: "Atividade 3",
        tipo: ETipoAtividade.INV,
        arquivos: {
          principal: "Atividade 3",
          aluno: "Roteiro Aluno Atividade 3",
          professor: "Roteiro Prof. Atividade 3",
        },
      },
      {
        nome: "Atividade 4",
        tipo: ETipoAtividade.ORG,
        arquivos: {
          principal: "Atividade 4",
          aluno: "Roteiro Aluno Atividade 4",
          professor: "Roteiro Prof. Atividade 4",
          complementares: ["Atividade 4 - Slides Utilizados"],
        },
      },
      {
        nome: "Atividade 5",
        tipo: ETipoAtividade.APL,
        arquivos: {
          principal: "Atividade 5",
          aluno: "Roteiro Aluno Atividade 5",
          professor: "Roteiro Prof. Atividade 5",
          complementares: [
            "Atividade 5 - Ciêntista Indicados",
            "Atividade 5 - Primeiro Prêmio cosmológico",
          ],
        },
      },
    ],
  },
  {
    nome: "2ª Etapa",
    fichas: "1925 a 1931",
    atividades: [
      {
        nome: "Atividade 6",
        tipo: ETipoAtividade.INV,
        arquivos: {
          principal: "Atividade 6",
          aluno: "Roteiro Aluno Atividade 6",
          professor: "Roteiro Prof. Atividade 6",
        },
      },
      {
        nome: "Atividade 7",
        tipo: ETipoAtividade.ORG,
        arquivos: {
          principal: "Atividade 7",
          aluno: "Roteiro Aluno Atividade 7",
          professor: "Roteiro Prof. Atividade 7",
          complementares: [
            "Atividade 7 - Medidas da Relação Redshift distancia",
            "Atividade 7 Texto de apoio para professor Slipher, Wirtz Lundmark, Hubble",
          ],
        },
      },
      {
        nome: "Atividade 8",
        tipo: ETipoAtividade.ORG,
        arquivos: {
          principal: "Atividade 8",
          aluno: "Roteiro Aluno Atividade 8",
          professor: "Roteiro Prof. Atividade 8",
        },
      },
      {
        nome: "Atividade 9",
        tipo: ETipoAtividade.APL,
        arquivos: {
          principal: "Atividade 9",
          aluno: "Roteiro Aluno Atividade 9",
          professor: "Roteiro Prof. Atividade 9",
        },
      },
    ],
  },
  {
    nome: "3ª Etapa",
    fichas: "1932 a 1939",
    atividades: [
      {
        nome: "Atividade 10",
        tipo: ETipoAtividade.INV,
        arquivos: {
          principal: "Atividade 10",
          aluno: "Roteiro Aluno Atividade 10",
          professor: "Roteiro Prof. Atividade 10",
        },
      },
      {
        nome: "Atividade 11",
        tipo: ETipoAtividade.ORG,
        arquivos: {
          principal: "Atividade 11",
          aluno: "Roteiro Aluno Atividade 11",
          professor: "Roteiro Prof. Atividade 11",
          complementares: ["Atividade 11 - Slides Redshift Luz Cansada"],
        },
      },
      {
        nome: "Atividade 12",
        tipo: ETipoAtividade.ORG,
        arquivos: {
          principal: "Atividade 12",
          aluno: "Roteiro Aluno Atividade 12",
          professor: "Roteiro Prof. Atividade 12",
          complementares: ["Atividade 12 - Idade do Universo Slide"],
        },
      },
      {
        nome: "Atividade 13",
        tipo: ETipoAtividade.APL,
        arquivos: {
          principal: "Atividade 13",
          aluno: "Roteiro Aluno Atividade 13",
          professor: "Roteiro Prof. Atividade 13",
        },
      },
    ],
  },
];
