import Link from "next/link";
import { useState } from "react";
import Cartao from "../components/Cartao";
import EntradaNumerica from "../components/EntradaNumerica";

import styles from "../styles/Formulario.module.css"

export default function Formulario() {
  const [quantidadeDePortas, setQuantidadeDePortas] = useState(3)
  const [portaComPresente, setPortaComPresente] = useState(1)

  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgColor="#C0392C">
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao>
            <EntradaNumerica 
              text="Quantidade de Portas"
              value={quantidadeDePortas} 
              onChange={novaQuantidade => setQuantidadeDePortas(novaQuantidade)}
            />
        </Cartao>
      </div>
      <div>
        <Cartao>
            <EntradaNumerica 
              text="Porta com Presente"
              value={portaComPresente} 
              onChange={portaComPresente => setPortaComPresente(portaComPresente)}
            />
        </Cartao>
        <Cartao bgColor="#28A085">
          <Link href={`/jogo/${quantidadeDePortas}/${portaComPresente}`}>
            <h2 className={styles.link}>
              Iniciar
            </h2>
          </Link>
        </Cartao>
      </div>
    </div> 
  )
}
