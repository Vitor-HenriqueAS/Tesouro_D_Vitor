"use client";

import { useState } from "react";
import Logo from "@/components/Logo";
import Secoes from "@/components/Secoes";
import PersonImg from "@/components/PersonImg";
import styles from "./styles/page.module.css";

export default function Home() {
  const [selecionarTema, setselecionarTema] = useState(true);
  const [selecionarTexto1, setSelecionarTexto1] = useState<string>("east-blue");
  const [selecionarTexto2, setSelecionarTexto2] = useState<string>("alvida");
  const mugiwaras = ["usopp", "zoro", "luffy", "sanji", "nami"];
  const adversarios = ["alvida", "morgan", "buggy", "garp", "kuro"];

  const alterarTema = () => setselecionarTema(!selecionarTema);

  const alteraTexto1 = (personagem: string) => setSelecionarTexto1(personagem);
  const alteraTexto2 = (personagem: string) => setSelecionarTexto2(personagem);

  return (
    <>
      <main>
        <section
          className={`${styles.module} ${styles.parallax} ${styles.parallax_1}`}
        >
          <div className={styles.cabecalho}>
            <Logo qualLogo={selecionarTema} />
            <h1 className={styles.title}>Uma aventura sem limites</h1>
          </div>
          {/* BOTÕES */}
          <div className={styles.buttons}>
            <button type="button" onClick={alterarTema}>
              {selecionarTema ? "IR PARA A SÉRIE" : "IR PARA O ANIME"}
            </button>
          </div>
        </section>

        <section className={`${styles.module} ${styles.content}`}>
          <div className={styles.container}>
            <Secoes qualTema={selecionarTema} qualTexto={selecionarTexto1} />

            <div className={styles.personagens}>
              <button
                type="button"
                className={styles.mapa_saga}
                onClick={() => setSelecionarTexto1("east-blue")}
              >
                MAPA
              </button>
              {mugiwaras.map((personagem) => (
                <PersonImg
                  key={personagem}
                  qualImagens={selecionarTema}
                  personagem={personagem}
                  ClicouNoPersonagem={alteraTexto1}
                />
              ))}
            </div>
          </div>
        </section>

        <section
          className={`${styles.module} ${styles.parallax} ${styles.parallax_2}`}
        >
          <h1></h1>
        </section>

        <section className={`${styles.module} ${styles.content}`}>
          <div className={styles.container}>
            <Secoes qualTema={selecionarTema} qualTexto={selecionarTexto2} />

            <div className={styles.personagens}>
              <button
                type="button"
                className={styles.mapa_saga}
                onClick={() => setSelecionarTexto2("east-blue")}
              >
                MAPA
              </button>
              {adversarios.map((personagem) => (
                <PersonImg
                  key={personagem}
                  qualImagens={selecionarTema}
                  personagem={personagem}
                  ClicouNoPersonagem={alteraTexto2}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
