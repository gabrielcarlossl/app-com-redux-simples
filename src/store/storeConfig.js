import { createStore, combineReducers } from "redux";

//O reducer recebe um estado e uma ação e retorna o próximo estado
const reducers = combineReducers({
  numeros: function (state, action) {
    switch (action.type) {
      case "NUM_MIN_ALTERADO":
        return {
          ...state,
          min: action.payload,
        };
      case "NUM_MAX_ALTERADO":
        return {
          ...state,
          max: action.payload,
        };
      default:
        return {
          min: 2,
          max: 11,
        };
    }
  },
});

// função que vai configurar um novo estado apartir dos reducers

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;
