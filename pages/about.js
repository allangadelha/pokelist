import Image from "next/image";
import styles from "../styles/About.module.css";
export default function About() {

    return ( 
        <div className={styles.about}>
            <h1>Sobre o projeto</h1>
            <p>Pokémon é uma série de jogos eletrônicos desenvolvidos pela Game Freak e publicados pela Nintendo como parte da franquia de mídia Pokémon. Lançado pela primeira vez em 1996 no Japão para o console Game Boy, a principal série de jogos de RPGs, que continuou em cada geração em portáteis da Nintendo.</p>
            <p><span>Fonte:</span> <a href="https://pt.wikipedia.org/wiki/Pok%C3%A9mon_(s%C3%A9rie_de_jogos_eletr%C3%B4nicos)">Wikipédia</a></p>
            <Image
                src="/images/charizard.png"
                width="300"
                height="300"
                alt="Charizard"
            />
        </div>
    )

}