import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { actualizarPortas, criarPortas } from "../../../../functions/portas"
import Porta from "../../../components/Porta"

import styles from "../../../styles/Jogo.module.css"

export default function Jogo() {
    const router = useRouter();
    const [portas, setPortas] = useState([])
    const [valido, setValido] = useState(false);
    
    useEffect(() => {
        const quantidadePortas = +router.query.portas;
        const portaComPresente = +router.query.temPresente;

        const temPortasValidas = quantidadePortas >= 3 && quantidadePortas <= 100;
        const temPresenteValido = portaComPresente >= 1 && portaComPresente <= quantidadePortas;
        
        setValido(temPortasValidas && temPresenteValido)
    }, [portas, router.query.portas, router.query.temPresente])
    
    useEffect(() => {
        const quantidadePortas = +router.query.portas;
        const portaComPresente = +router.query.temPresente;

        setPortas(criarPortas(quantidadePortas, portaComPresente))
    }, [router?.query])
    
    function renderizarPortas() {
        return portas.map((porta) => {
            return <Porta key={porta.numero} value={porta} onChange={portaAtual => setPortas(actualizarPortas(portas, portaAtual))}/>
        })
    }

    return (
        <div className={styles.jogo}>
            <div className={styles.portas}>   
                {valido ? 
                    renderizarPortas()
                    :
                    <h1>Valores inválidos</h1>
                }
            </div>
            <div className={styles.botoes}>
                <Link href={"/"}>
                    <button>Reiniciar Jogo</button>
                </Link>
            </div>
        </div>
    )
}