import { ETipoAtividade, EtapaCosmic } from "../types/cosmic.types";

// ("Fase 1 Fichas 1914 a 1924 .pdf");
// ("Fase 2 Fichas 1925 a 1931.pdf");
// ("Fase 3  Fichas 1932 a 1939.pdf");
export const etapasCosmic: EtapaCosmic[] = [
  {
    nome: "Introdução",
    descricao: "A introdução aborda os conceitos fundamentais da cosmologia, explorando a relação entre ciência e sociedade. Este módulo inicial visa contextualizar os alunos sobre a importância da cosmologia na compreensão do universo e seu impacto na sociedade moderna. Além disso, discute as interações entre descobertas científicas e o desenvolvimento tecnológico ao longo da história.",
    atividades: [
      {
        nome: "Atividade 1 - O que é cosmologia?",
        descricao: "Esta atividade introduz os alunos aos conceitos básicos de cosmologia, incluindo a origem e evolução do universo.",
        tipo: ETipoAtividade.BASICA,
        arquivos: {
          professor: "Atividade 1 Roteiro para professor.pdf",
          complementares: ["Roteiros para investigadores e jurados.doc"],
        },
      },
      {
        nome: "Atividade 2 - Relações entre ciência e sociedade",
        descricao: "Explora como as descobertas cosmológicas influenciam e são influenciadas pela sociedade.",
        tipo: ETipoAtividade.BASICA,
        arquivos: {
          professor: "Atividade 2  Roteiro para professor.pdf",
        },
      },
    ],
  },
  {
    nome: "1ª Etapa",
    descricao: "A primeira etapa foca nos desenvolvimentos iniciais da cosmologia no início do século XX. Os alunos irão explorar as teorias emergentes e os debates científicos que moldaram a compreensão moderna do universo.",
    fichas: "Fase 1 Fichas 1914 a 1924 .pdf",
    atividades: [
      {
        nome: "Atividade 3",
        descricao: "Análise das contribuições de cientistas pioneiros na cosmologia.",
        tipo: ETipoAtividade.INV,
        arquivos: {
          professor: "Atividade 3  Roteiro para professor.pdf",
        },
      },
      {
        nome: "Atividade 4",
        descricao: "Discussão sobre as implicações das descobertas cosmológicas na sociedade.",
        tipo: ETipoAtividade.ORG,
        arquivos: {
          professor: "Atividade 4  Roteiro para professor.pdf",
          complementares: ["Atividade 4 Slides utilizados.pdf"],
        },
      },
      {
        nome: "Atividade 5",
        descricao: "Estudo de caso sobre cientistas indicados para prêmios em cosmologia.",
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
    descricao: "A segunda etapa explora a expansão do universo e as descobertas associadas. Os alunos irão investigar as evidências observacionais que suportam a teoria do Big Bang e a expansão contínua do universo.",
    fichas: "Fase 2 Fichas 1925 a 1931.pdf",
    atividades: [
      {
        nome: "Atividade 6",
        descricao: "Exame das medições de redshift e suas interpretações.",
        tipo: ETipoAtividade.INV,
        arquivos: {
          professor: "Atividade 6 Roteiro para professor.pdf",
        },
      },
      {
        nome: "Atividade 7",
        descricao: "Comparação entre diferentes modelos cosmológicos e suas previsões.",
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
        descricao: "Discussão sobre a expansão do universo e suas implicações.",
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
        descricao: "Análise crítica das teorias cosmológicas contemporâneas.",
        tipo: ETipoAtividade.APL,
        arquivos: {
          professor: "Atividade 9  Roteiro para professor.pdf",
        },
      },
    ],
  },
  {
    nome: "3ª Etapa",
    descricao: "A terceira etapa analisa as teorias modernas e as implicações cosmológicas. Os alunos irão explorar as fronteiras da pesquisa cosmológica e as questões éticas associadas.",
    fichas: "Fase 3  Fichas 1932 a 1939.pdf",
    atividades: [
      {
        nome: "Atividade 10",
        descricao: "Estudo das teorias modernas sobre a estrutura do universo.",
        tipo: ETipoAtividade.INV,
        arquivos: {
          professor: "Atividade 10 Roteiro para professor.pdf",
        },
      },
      {
        nome: "Atividade 11",
        descricao: "Discussão sobre a luz cansada e suas alternativas.",
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
        descricao: "Análise das implicações cosmológicas da idade do universo.",
        tipo: ETipoAtividade.ORG,
        arquivos: {
          professor: "Atividade 12  Roteiro para professor.pdf",
          complementares: ["Atividade 12 Idade do universo.ppt"],
        },
      },
      {
        nome: "Atividade 13",
        descricao: "Reflexão sobre as questões éticas na pesquisa cosmológica.",
        tipo: ETipoAtividade.APL,
        arquivos: {
          professor: "Atividade 13  Roteiro para professor.pdf",
        },
      },
    ],
  },
];
