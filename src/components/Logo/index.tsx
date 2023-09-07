"use client";

import React, { useRef } from "react";
import Image from "next/image";
import styles from "./logo.module.css";

interface LogoProps {
  qualLogo: boolean;
}

export default function Logo({ qualLogo }: LogoProps) {
  const logoOnePieceRef = useRef([
    {
      src: "/one-piece-logo-anime.png",
      alt: "logo anime | One Piece",
    },
    {
      src: "/one-piece-logo-serie.png",
      alt: "logo serie | One Piece",
    },
  ]);

  const id = qualLogo ? 0 : 1;
  const { src, alt } = logoOnePieceRef.current[id];

  return (
    <>
      <Image
        key={id}
        src={src}
        alt={alt}
        height={130}
        width={450}
        className={styles.logo__one_piece}
        priority
      />
    </>
  );
}
