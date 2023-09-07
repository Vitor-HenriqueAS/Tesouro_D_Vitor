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
        src={`/personagens/${personagem}.png`}
        alt={personagem}
        title={personagem}
        height={130}
        width={50}
        className={styles.imagem}
        loading="lazy"
        onClick={handleClick}
      />
    </>
  );
}
