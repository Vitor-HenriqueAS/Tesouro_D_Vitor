"use client";

import React from "react";
import { melindaFont, ptSerif, arvo } from "@/fonts";
import Image from "next/image";
import styles from "./secoes.module.css";
import textoApi from "@/app/api/texts.json";
import detalhesApi from "@/app/api/detalhesOnePiece.json";

interface SecoesProps {
  qualTema: boolean;
  qualTexto: string;
}

export default function Secoes({ qualTema, qualTexto }: SecoesProps) {
  const id = qualTema ? 0 : 1;
  function encontrarPorNome(qualTexto: string) {
    return detalhesApi.find((item) => item.id === qualTexto);
  }

  const personagem = encontrarPorNome(qualTexto);

  return (
    <>
      <h2 className={`${melindaFont.className} ${styles.title}`}>
        Saga East Blue
        <Image
          src="/mugiwaras/going-merry.png"
          alt="going-merry"
          width={50}
          height={50}
          className={styles.navio}
          loading="lazy"
        />
      </h2>

      <p className={`${arvo.className} ${styles.text}`}>
        {(textoApi[id] as Record<string, string>)[qualTexto]}
      </p>

      {personagem ? (
        <div className={styles.infomacoes_adicionais}>
          {personagem.funcao === "ilha" ? (
            <div>
              <h4
                className={`${ptSerif.className} ${styles.titulo__descricao}`}
              >
                Arcos da História
              </h4>
              {personagem.details.arco ? (
                <ul className={`${arvo.className} ${styles.descricao}`}>
                  {personagem.details.arco.map((arco) => (
                    <li key={arco}>{arco}</li>
                  ))}
                </ul>
              ) : (
                ""
              )}
            </div>
          ) : (
            <div>
              <h4
                className={`${ptSerif.className} ${styles.titulo__descricao}`}
              >
                Detalhes
              </h4>
              <ul className={`${arvo.className} ${styles.descricao}`}>
                <li>
                  <strong>Função:</strong> {personagem.funcao}
                </li>
                <li>
                  <strong>Fruta:</strong> {personagem.details.fruta}
                </li>
                <li>
                  <strong>Arma:</strong> {personagem.details.arma}
                </li>
                <li>
                  <strong>Ator/Dublador:</strong> {personagem.details.ator}
                </li>
              </ul>
            </div>
          )}
          <div>
            <h4 className={`${ptSerif.className} ${styles.titulo__descricao}`}>
              Curiosidade
            </h4>
            <h6 className={`${ptSerif.className} ${styles.titulo__descricao}`}>
              Onde Fica?
            </h6>
            <Image
              src={"/ilhas/mapa-east-blue.jpg"}
              alt="Onde Fica?"
              width={200}
              height={200}
              loading="lazy"
            />
          </div>
        </div>
      ) : (
        "Personagem/Ilha não Encontrado"
      )}
    </>
  );
}
