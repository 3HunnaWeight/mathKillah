import { createStore,combineReducers, applyMiddleware } from 'redux';
import { chooseReducer } from './chooseReducer';
import { taskReducer } from './taskReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    chooseReducer,
    taskReducer,
})

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))
