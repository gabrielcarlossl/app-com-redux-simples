import { createStore, combineReducers } from "redux";

import numerosReducer from "./reducers/numerosReducer"; 


//O reducer recebe um estado e uma ação e retorna o próximo estado
const reducers = combineReducers({
  numeros: numerosReducer,
});

// função que vai configurar um novo estado apartir dos reducers

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;
