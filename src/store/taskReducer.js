const defaultState = {
    first:0,
    sign:'+',
    second:0,
    score:0,
    ansver:null
}
const GENERATE_FIRST = 'GENERATE_FIRST'
const GENERATE_SECOND = 'MINUS_CHOOSE'
const ADD_SCORE = 'ADD_SCORE'
const GET_ANSVER = 'GET_ANSVER'
export const taskReducer = (state=defaultState,action) =>{
    switch(action.type){
        case GENERATE_FIRST:
            return {...state, first:state.first=action.payload}
        case GENERATE_SECOND:
            return {...state, second:state.second=action.payload}
        case ADD_SCORE:
            return {...state, score:state.score+=1}
        case GET_ANSVER:
            return {...state, ansver:state.ansver=action.payload}
        default:
            return state
    }
}

export const generateFirstAction = (payload) => ({type:GENERATE_FIRST,payload})
export const generateSecondAction = (payload) => ({type:GENERATE_SECOND,payload})
export const getAnsverAction = (payload) => ({type:GET_ANSVER,payload})
export const addScoreAction = (payload) => ({type:ADD_SCORE,payload})