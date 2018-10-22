import { combineReducers } from 'redux';
import chismeReducer, * as fromChismes from './chismes';
import { reducer as formReducer } from 'redux-form';

const reducer = combineReducers({ 
    chismeReducer,
    form: formReducer,
 });

 export const getChisme = (state, id) => fromChismes.getChisme(state.chismeReducer, id);
 export const getChismes = (state) => fromChismes.getChismes(state.chismeReducer)

export default reducer;