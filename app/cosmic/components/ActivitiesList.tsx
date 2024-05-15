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
            <span>{nome}</span>
          </Accordion.Title>
          <Accordion.Content>
            {!!fichas && (
              <div className="mb-5 text-xl">
                Fichas:
                <a
                  href={`/${fichas}`}
                  target="_blank"
                  className="text-blue-400 underline ml-2"
                >
                  {fichas}
                </a>
              </div>
            )}
            <Accordion>
              {atividades.map(({ nome, tipo, arquivos }, idx) => (
                <Accordion.Panel key={idx}>
                  <Accordion.Title className="text-lg">
                    <span>{nome}</span>
                  </Accordion.Title>
                  <Accordion.Content className="text-md text-blue-400 underline">
                    <div>
                      <a href={`/${arquivos.professor}`} target="_blank">
                        {arquivos.professor}
                      </a>
                    </div>
                    {!!arquivos.complementares?.length &&
                      arquivos.complementares.map((arquivo, index) => (
                        <div key={index}>
                          <a href={`/${arquivo}`} target="_blank">
                            {arquivo}
                          </a>
                        </div>
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
