import { ReactNode } from "react"
import styles from "../styles/Cartao.module.css"

interface CartaoProps {
    bgColor?: string
    children?: ReactNode
}

export default function Cartao(props: CartaoProps){
    return (
        <div className={styles.cartao} style={{backgroundColor: props.bgColor ?? "#FFF"}}>
            {props.children}
        </div>
    )
}