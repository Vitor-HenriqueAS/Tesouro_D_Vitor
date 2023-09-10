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
  const companheiros = ["east-blue","goldroger","luffy","koby","zoro","shanks","nami","usopp","sanji",];
  const adversarios = ["alvida", "morgan", "buggy", "garp", "kuro", "mihawk", "arlong"];

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
          <div className={styles.manga}>
            <div className={styles.container}>
              <Secoes qualTema={selecionarTema} qualTexto={selecionarTexto1} ilha="east-blue"/>
              <div className={styles.personagens}>
                {companheiros.map((personagem) => (
                  <PersonImg
                    key={personagem}
                    qualImagens={selecionarTema}
                    personagem={personagem}
                    ClicouNoPersonagem={alteraTexto1}
                  />
                ))}
              </div>

              <div className={styles.container__button}>
                <button type="button">Voltar</button>
                <button type="button">Próximo</button>
              </div>

            </div>
          </div>
        </section>

        <section
          className={`${styles.module} ${styles.parallax} ${styles.parallax_2}`}
        >
          <h1></h1>
        </section>

        <section className={`${styles.module} ${styles.content}`}>
          <div className={styles.manga}>
            <div className={styles.container}>
              <Secoes qualTema={selecionarTema} qualTexto={selecionarTexto2} ilha="east-blue"/>
              <div className={styles.personagens}>
                {adversarios.map((personagem) => (
                  <PersonImg
                    key={personagem}
                    qualImagens={selecionarTema}
                    personagem={personagem}
                    ClicouNoPersonagem={alteraTexto2}
                  />
                ))}
              </div>

              <div className={styles.container__button}>
                <button type="button">Voltar</button>
                <button type="button">Próximo</button>
              </div>

            </div>
          </div>
        </section>
      </main>
    </>
  );
}
