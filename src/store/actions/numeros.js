// Action creator = retorna  uma ação

export function alterarNumeroMinimo(novoNumero){
    return {
        type:'NUM_MIN_ALTERADO',
        payload: novoNumero
    }
}

// action creator para criação do numero máximo
export function alterarNumeroMaximo(novoNumero){
    return {
        type:'NUM_MAX_ALTERADO',
        payload: novoNumero
    }
}