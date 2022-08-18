// Action creator = retorna  uma ação
import { NUM_MIN_ALTERADO, NUM_MAX_ALTERADO } from "./actionTypes";

export function alterarNumeroMinimo(novoNumero) {
  return {
    type: NUM_MIN_ALTERADO,
    payload: novoNumero,
  };
}

// action creator para criação do numero máximo
export function alterarNumeroMaximo(novoNumero) {
  return {
    type: NUM_MAX_ALTERADO,
    payload: novoNumero,
  };
}
