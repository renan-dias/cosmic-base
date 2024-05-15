import { ETipoAtividade, EtapaCosmic } from "../types/cosmic.types";

// ("Fase 1 Fichas 1914 a 1924 .pdf");
// ("Fase 2 Fichas 1925 a 1931.pdf");
// ("Fase 3  Fichas 1932 a 1939.pdf");
export const etapasCosmic: EtapaCosmic[] = [
  {
    nome: "Introdução",
    atividades: [
      {
        nome: "Atividade 1 - O que é cosmologia?",
        tipo: ETipoAtividade.BASICA,
        arquivos: {
          professor: "Atividade 1 Roteiro para professor.pdf",
          complementares: ["Roteiros para investigadores e jurados.doc"],
        },
      },
      {
        nome: "Atividade 2 - Relações entre ciência e sociedade",
        tipo: ETipoAtividade.BASICA,
        arquivos: {
          professor: "Atividade 2  Roteiro para professor.pdf",
        },
      },
    ],
  },
  {
    nome: "1ª Etapa",
    fichas: "Fase 1 Fichas 1914 a 1924 .pdf",
    atividades: [
      {
        nome: "Atividade 3",
        tipo: ETipoAtividade.INV,
        arquivos: {
          professor: "Atividade 3  Roteiro para professor.pdf",
          complementares: ["Fase 1 Fichas 1914 a 1924 .pdf"],
        },
      },
      {
        nome: "Atividade 4",
        tipo: ETipoAtividade.ORG,
        arquivos: {
          professor: "Atividade 4  Roteiro para professor.pdf",
          complementares: ["Atividade 4 Slides utilizados.pdf"],
        },
      },
      {
        nome: "Atividade 5",
        tipo: ETipoAtividade.APL,
        arquivos: {
          professor: "Atividade 5  Roteiro para professor.pdf",
          complementares: [
            "Atividade 5 Cientistas indicados para o premio.pdf",
          ],
        },
      },
    ],
  },
  {
    nome: "2ª Etapa",
    fichas: "Fase 2 Fichas 1925 a 1931.pdf",
    atividades: [
      {
        nome: "Atividade 6",
        tipo: ETipoAtividade.INV,
        arquivos: {
          professor: "Atividade 6 Roteiro para professor.pdf",
          complementares: ["Fase 2 Fichas 1925 a 1931.pdf"],
        },
      },
      {
        nome: "Atividade 7",
        tipo: ETipoAtividade.ORG,
        arquivos: {
          professor: "Atividade 7  Roteiro para professor.pdf",
          complementares: [
            "Atividade 7  Roteiro para alunos.pdf",
            "Atividade 7 Medidas da relacao redshift distancia.pdf",
            "Atividade 7 Medidas da relacao redshift distancia.ppt",
            "Atividade 7 Texto alunos.doc",
            "Atividade 7 Texto alunos.pdf",
            "Atividade 7 Texto de apoio para professor Slipher, Wirtz Lundmark, Hubble.doc",
          ],
        },
      },
      {
        nome: "Atividade 8",
        tipo: ETipoAtividade.ORG,
        arquivos: {
          professor: "Atividade 8  Roteiro para professor.pdf",
          complementares: [
            "Atividade 8 Lemaitre Hubble a expansao do universo.ppt",
            "Atividade 8 Roteiro para alunos.pdf",
          ],
        },
      },
      {
        nome: "Atividade 9",
        tipo: ETipoAtividade.APL,
        arquivos: {
          professor: "Atividade 9  Roteiro para professor.pdf",
          complementares: ["Fase 3  Fichas 1932 a 1939.pdf"],
        },
      },
    ],
  },
  {
    nome: "3ª Etapa",
    fichas: "Fase 3  Fichas 1932 a 1939.pdf",
    atividades: [
      {
        nome: "Atividade 10",
        tipo: ETipoAtividade.INV,
        arquivos: {
          professor: "Atividade 10 Roteiro para professor.pdf",
        },
      },
      {
        nome: "Atividade 11",
        tipo: ETipoAtividade.ORG,
        arquivos: {
          professor: "Atividade 11-  Roteiro para professor.pdf",
          complementares: [
            "Atividade 11 Redshift Luz cansada.ppt",
            "Atividade 11 tired light.zip",
          ],
        },
      },
      {
        nome: "Atividade 12",
        tipo: ETipoAtividade.ORG,
        arquivos: {
          professor: "Atividade 12  Roteiro para professor.pdf",
          complementares: ["Atividade 12 Idade do universo.ppt"],
        },
      },
      {
        nome: "Atividade 13",
        tipo: ETipoAtividade.APL,
        arquivos: {
          professor: "Atividade 13  Roteiro para professor.pdf",
        },
      },
    ],
  },
];
