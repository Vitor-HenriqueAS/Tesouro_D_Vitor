import Secoes from "@/components/Secoes";
import PersonImg from "@/components/PersonImg";
import styles from "./section.module.css";

interface SectionProps {
  qualTema: boolean;
  qualTexto: string;
  personagens: string[];
  alteraTexto: (personagem: string) => void;
  alteraPersonagem: (botao: boolean) => void;
}

export default function Section({
  qualTema,
  qualTexto,
  personagens,
  alteraTexto,
  alteraPersonagem,
}: SectionProps) {
  return (
    <section className={`${styles.module} ${styles.content}`}>
      <div className={styles.manga}>
        <div className={styles.container}>
          <Secoes qualTema={qualTema} qualTexto={qualTexto} ilha="east-blue" />
          <div className={styles.personagens}>
            {personagens.map((personagem) => (
              <PersonImg
                key={personagem}
                qualImagens={qualTema}
                personagem={personagem}
                ClicouNoPersonagem={() => alteraTexto(personagem)}
              />
            ))}
          </div>
          <div className={styles.container__button}>
            <button type="button" onClick={() => alteraPersonagem(false)}>Voltar</button>
            <button type="button" onClick={() => alteraPersonagem(true)}>Próximo</button>
          </div>
        </div>
      </div>
    </section>
  );
}
