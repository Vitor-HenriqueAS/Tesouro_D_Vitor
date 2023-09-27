import React, { useState } from "react";
import Image from "next/image";
import styles from "./imagem.module.css";

interface ImagensProps {
  qualImagens: boolean;
  personagem: string;
  ClicouNoPersonagem: (personagem: string) => void;
}

export default function PersonImg({
  qualImagens,
  personagem,
  ClicouNoPersonagem,
}: ImagensProps) {
  const [imageActive, setImageActive] = useState(false);
  const id = qualImagens ? 0 : 1;

  const handleClick = () => {
    // Selecionar todos os elementos com a classe .imagem_active
    const imgActPersons = document.querySelectorAll(`.${styles.imagem_active}`);
    
    // Remover a classe .imagem_active de todos os elementos
    imgActPersons.forEach((elemento) => {
      elemento.classList.remove(styles.imagem_active);
    });

    // Adicionar a classe .imagem_active ao elemento atual
    const elementoAtual = document.querySelector(`#personagem-${personagem}`);
    if (elementoAtual) {
      elementoAtual.classList.add(styles.imagem_active);
    }

    ClicouNoPersonagem(personagem);
    setImageActive(true);
  };

  return (
    <>
      <Image
        key={id}
        src={`/personagens/${qualImagens ? 'anime' : 'serie'}/${personagem}.jpg`}
        alt={personagem}
        title={personagem}
        width={80}
        height={150}
        className={`${styles.imagem} 
        ${imageActive ? styles.imagem_active : ''}`}
        loading="lazy"
        onClick={handleClick}
        id={`personagem-${personagem}`} // Adicionar um ID único baseado em personagem
      />
    </>
  );
}
