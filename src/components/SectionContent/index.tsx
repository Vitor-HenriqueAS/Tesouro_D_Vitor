import React, { useState, useEffect } from "react";
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

export default function SectionContent({ qualTema, qualTexto, ilha }: SecoesProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [personagem, setPersonagem] = useState<Personagem | null>(null);
  const textoData = qualTema ? textoApi.anime.east_blue : textoApi.serie.east_blue;

  useEffect(() => {
    async function encontrarPorNome(nome: string, tema: boolean): Promise<Personagem | null> {
      try {
        const temaData = tema ? detalhesApi.anime.east_blue : detalhesApi.serie.east_blue;
        const temaKey = qualTexto as keyof typeof temaData;
        const dados = temaData[temaKey] as Personagem;

        if (dados.id === nome) {
          return dados;
        }

        return null;
      } catch (error) {
        throw new Error("Erro ao buscar dados do personagem/ilha.");
      }
    }

    async function fetchData() {
      try {
        setIsLoading(true); // Define isLoading como true antes de "buscar" os dados

        // Simula a busca de dados assíncronos com setTimeout (substitua isso pelo seu código de busca real)
        setTimeout(async () => {
          const data = await encontrarPorNome(qualTexto, qualTema);
          setPersonagem(data);
          setIsLoading(false); // Define isLoading como false após "buscar" os dados
        }, 300); // Simula um atraso de 300 milissegundos (ajuste conforme necessário para testar)

      } catch (error) {
        console.error("Erro ao buscar dados:", error);
        setIsLoading(false); // Define isLoading como false em caso de erro
      }
    }

    fetchData();
  }, [qualTexto, qualTema]);

  if (!personagem) {
    return (
      <div>
        {isLoading ? ( // Display loading spinner if isLoading is true
          <Image
            src={'/carregamento/content.gif'}
            alt="Carregamento"
            width={500}
            height={200}
            loading="lazy"
            className={styles.carregamento_conteudo}
          />
        ) : (
          "Personagem/Ilha não Encontrado"
        )}
      </div>
    );
  }

  return (
    <>
      {isLoading ? 
        <Image 
          src={'/carregamento/content.gif'}
          alt="Carregamento"
          width={500}
          height={200}
          loading="lazy"
          className={styles.carregamento_conteudo}
        />
      :
      
    <div className={styles.main}>
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
          {personagem.details?.cartaz && (
            <Image
              src={`/personagens/${qualTema ? 'anime' : 'serie'}/cartaz/${personagem.details.cartaz}.png`}
              alt={`Cartaz Do ${personagem.name}`}
              width={120}
              height={150}
              loading="lazy"
            />
          )}
        </div>
      </div>
    </div>
    }
    </>
  );
}
