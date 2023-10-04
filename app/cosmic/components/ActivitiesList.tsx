"use client";

import { etapasCosmic } from "../mocks/cosmic.mock";
import { Accordion, Checkbox } from "flowbite-react";

const etapas = etapasCosmic;

export const ActivitiesList = () => {
  return (
    <Accordion>
      {etapas.map(({ atividades, nome, fichas }, idx) => (
        <Accordion.Panel key={idx}>
          <Accordion.Title className="text-2xl">
            <span className="mr-4">{nome}</span>
            <Checkbox></Checkbox>
          </Accordion.Title>
          <Accordion.Content>
            <Accordion>
              {atividades.map(({ nome, tipo, arquivos }, idx) => (
                <Accordion.Panel key={idx}>
                  <Accordion.Title className="text-lg">
                    <span className="mr-4">{nome}</span>
                    <Checkbox></Checkbox>
                  </Accordion.Title>
                  <Accordion.Content className="text-md text-blue-400 underline">
                    <div>{arquivos.principal}</div>
                    {!!arquivos.aluno && <div>{arquivos.aluno}</div>}
                    {!!arquivos.professor && <div>{arquivos.professor}</div>}
                    {!!arquivos.complementares?.length &&
                      arquivos.complementares.map((arquivo, index) => (
                        <div key={index}>{arquivo}</div>
                      ))}
                  </Accordion.Content>
                </Accordion.Panel>
              ))}
            </Accordion>
          </Accordion.Content>
        </Accordion.Panel>
      ))}
    </Accordion>
  );
};
