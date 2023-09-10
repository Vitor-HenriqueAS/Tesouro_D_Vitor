import React from "react";
import { melindaFont, ptSerif, arvo } from "@/fonts";
import Image from "next/image";
import styles from "./secoes.module.css";
import textoApi from "@/app/api/texts.json";
import detalhesApi from "@/app/api/detalhesOnePiece.json";

interface Personagem {
  id: string;
  name: string;
  funcao: string;
  arco?: string[];
  details: {
    fruta: string;
    arma: string;
    ator: string;
    cartaz?: string;
  };
}

interface SecoesProps {
  qualTema: boolean;
  qualTexto: string;
  ilha: string;
}

export default function Secoes({ qualTema, qualTexto, ilha }: SecoesProps) {
  const personagem = encontrarPorNome(qualTexto, qualTema);
  const textoData = qualTema ? textoApi.anime.east_blue : textoApi.serie.east_blue;

  function encontrarPorNome(
    nome: string,
    tema: boolean
  ): Personagem | null {
    const temaData = tema ? detalhesApi.anime.east_blue : detalhesApi.serie.east_blue;
    const temaKey = qualTexto as keyof typeof temaData;
    const dados = (temaData[temaKey] as Personagem)
    // console.log(dados)

    if (dados.id === nome) {
      return (temaData[temaKey] as Personagem);
    }
    return null;
  }

  if (!personagem) {
    return <p>Personagem/Ilha não Encontrado</p>;
  }

  return (
    <div>
      <h2 className={`${melindaFont.className} ${styles.title}`}>
        {personagem.name}
        <Image
          src="/personagens/going-merry.png"
          alt="going-merry"
          width={50}
          height={50}
          className={styles.navio}
          loading="lazy"
        />
      </h2>

      <div className={styles.content}>
        <Image
          src={`/imagemInfo/${qualTema ? 'anime' : 'serie'}/${personagem.id}.jpg`}
          alt={personagem.name}
          width={150}
          height={150}
          loading="lazy"
        />

        <p className={`${arvo.className} ${styles.text}`}>
          {(textoData as Record<string, string>)[qualTexto]}
        </p>
      </div>

      <div className={styles.infomacoes_adicionais}>

      <div>
        <h4 className={`${ptSerif.className} ${styles.titulo__descricao}`}>
          {personagem.funcao === 'ilha' ? "Arcos" : "Detalhes"}
        </h4>
        <ul className={`${arvo.className} ${styles.descricao}`}>
          {personagem.funcao === 'ilha' ? (
            personagem.arco?.map((item, index) => <li key={index}>{item}</li>)
          ) : (
            <>
              <li><strong>Função:</strong> {personagem.funcao}</li>
              <li><strong>Fruta:</strong> {personagem.details.fruta}</li>
              <li><strong>Arma:</strong> {personagem.details.arma}</li>
              <li><strong>Ator/Dublador:</strong> {personagem.details.ator}</li>
            </>
          )}
        </ul>
      </div>

        <div className={styles.cartaz}>
          <Image
            src={`/personagens/${qualTema ? 'anime' : 'serie'}/cartaz/${personagem.id}.png`}
            alt={`Cartaz Do ${personagem.name}`}
            width={120}
            height={150}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
