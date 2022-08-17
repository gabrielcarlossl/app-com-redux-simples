import {createStore, combineReducers} from 'redux'


//O reducer recebe um estado e uma ação e retorna o próximo estado
const reducers = combineReducers({
    numeros: function(state, action) {
        return{
            min: 2,
            max: 11
        }
    }
})

// função que vai configurar um novo estado apartir dos reducers

function storeConfig(){
    return createStore(reducers)
}

export default storeConfig