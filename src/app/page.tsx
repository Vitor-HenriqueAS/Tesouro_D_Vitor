"use client";

import { useState } from "react";
import Logo from "@/components/Logo";
import Section from "@/components/Section";
import styles from "./styles/page.module.css";

export default function Home() {
  const [state, setState] = useState({
    selecionarTema: true,
    selecionarTexto1: "east-blue",
    selecionarTexto2: "alvida",
    companheiroIndex: 0,
    adversarioIndex: 0,
  });

  const { selecionarTema, selecionarTexto1, selecionarTexto2, companheiroIndex, adversarioIndex } = state;

  const companheiros = ["east-blue", "goldroger", "luffy", "koby", "zoro", "shanks", "nami", "usopp", "sanji"];
  const adversarios = ["alvida", "morgan", "buggy", "garp", "kuro", "mihawk", "arlong"];

  const toggleTema = () => {
    setState({ ...state, selecionarTema: !selecionarTema });
  };

  const alteraTexto = (personagem: string, isCompanheiro: boolean) => {
    const index = isCompanheiro ? companheiroIndex : adversarioIndex;
    const newText = isCompanheiro ? companheiros[index] : adversarios[index];
    setState({ ...state, [isCompanheiro ? "selecionarTexto1" : "selecionarTexto2"]: newText });
  };

  const alteraPersonagem = (isCompanheiro: boolean, botao: boolean) => {
    const index = isCompanheiro ? companheiroIndex : adversarioIndex;
    const length = isCompanheiro ? companheiros.length : adversarios.length;
    if (botao) {
      if (index < length - 1) {
        setState({ ...state, [isCompanheiro ? "companheiroIndex" : "adversarioIndex"]: index + 1 });
      }
    } else {
      if (index > 0) {
        setState({ ...state, [isCompanheiro ? "companheiroIndex" : "adversarioIndex"]: index - 1 });
      }
    }
  };

  return (
    <>
      <main>
        <section className={`${styles.module} ${styles.parallax} ${styles.parallax_1}`}>
          <div className={styles.cabecalho}>
            <Logo qualLogo={selecionarTema} />
            <h1 className={styles.title}>Uma aventura sem limites</h1>
          </div>
          <div className={styles.buttons}>
            <button type="button" onClick={toggleTema}>
              {selecionarTema ? "IR PARA A SÉRIE" : "IR PARA O ANIME"}
            </button>
          </div>
        </section>

        <section className={`${styles.module} ${styles.content}`}>
          <Section
            qualTema={selecionarTema}
            qualTexto={selecionarTexto1}
            personagens={companheiros}
            alteraTexto={(personagem: string) => alteraTexto(personagem, true)}
            alteraPersonagem={(botao: boolean) => alteraPersonagem(true, botao)}
          />
        </section>

        <section className={`${styles.module} ${styles.parallax} ${styles.parallax_2}`}>
          <h1></h1>
        </section>

        <section className={`${styles.module} ${styles.content}`}>
          <Section
            qualTema={selecionarTema}
            qualTexto={selecionarTexto2}
            personagens={adversarios}
            alteraTexto={(personagem: string) => alteraTexto(personagem, false)}
            alteraPersonagem={(botao: boolean) => alteraPersonagem(false, botao)}
          />
        </section>
      </main>
    </>
  );
}