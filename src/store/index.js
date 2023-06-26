import { createStore,combineReducers } from 'redux';
import { chooseReducer } from './chooseReducer';

const rootReducer = combineReducers({
    chooseReducer,
})

export const store = createStore(rootReducer)
