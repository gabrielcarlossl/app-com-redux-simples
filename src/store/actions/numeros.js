// Action creator = retorna  uma ação

export function alterarNumeroMinimo(novoNumero){
    return {
        type:'NUM_MIN_ALTERADO',
        payload: novoNumero
    }
}