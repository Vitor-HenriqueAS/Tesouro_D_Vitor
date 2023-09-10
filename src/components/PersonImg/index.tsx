"use client";

import React from "react";
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
  const id = qualImagens ? 0 : 1;
  const handleClick = () => {
    ClicouNoPersonagem(personagem);
  };

  return (
    <>
      <Image
        key={id}
        src={`/personagens/${qualImagens ? 'anime' : 'serie'}/${personagem}.jpg`}
        alt={personagem}
        title={personagem}
        height={150}
        width={80}
        className={styles.imagem}
        loading="lazy"
        onClick={handleClick}
      />
    </>
  );
}
