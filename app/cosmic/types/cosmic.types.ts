export enum ETipoAtividade {
  BASICA = "BASICA",
  INV = "INV",
  ORG = "ORG",
  APL = "APL",
}

export type EtapaCosmic = {
  nome: string;
  descricao: string;
  fichas?: CosmicFile;
  atividades: Atividade[];
};

export type Atividade = {
  nome: string;
  descricao: string;
  tipo: ETipoAtividade;
  arquivos: {
    professor: CosmicFile;
    complementares?: CosmicFile[];
  };
};

export type CosmicFile = string;
