import PortaModel from "../src/model/porta";

export function criarPortas(quantidade: number, portaComPresente: number): PortaModel[]{
    return Array.from( { length: quantidade }, (_, i) => {
        const numero = i + 1;
        const temPresente = numero === portaComPresente;
        return new PortaModel(numero, temPresente);
    })
}

export function actualizarPortas(portas: PortaModel[], portaModificada: PortaModel) : PortaModel [] {
    return portas.map(portaAtual =>{
        const igualModificada = portaAtual.numero === portaModificada.numero;
        
        if(igualModificada){
            return portaModificada;
        }else{
            return portaModificada.aberta ? portaAtual : portaAtual.desselecionar();
        }
    })
}