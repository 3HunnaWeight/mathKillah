const defaultState = {
    first:0,
    sign:[],
    second:0,
    score:0,
    ansver:null,
    modal:false,
    timerReset:false
}
const GENERATE_FIRST = 'GENERATE_FIRST'
const GENERATE_SECOND = 'GENERATE_SECOND'
const ADD_SCORE = 'ADD_SCORE'
const GET_ANSVER = 'GET_ANSVER'
const PUSH_SIGN  = "PUSH_SIGN"
const MODAL_SWITCH = 'MODAL_SWITCH'
const ARRAY_RESET = 'ARRAY_RESET'
const SCORE_RESET = 'SCORE_RESET'
const TIMER_RESET = 'TIMER_RESET'

export const taskReducer = (state=defaultState,action) =>{
    switch(action.type){
        case GENERATE_FIRST:
            return {...state, first:state.first=action.payload}
       case MODAL_SWITCH:
            return {...state, modal:!state.modal}
        case TIMER_RESET:
            return {...state, timerReset:!state.timerReset}                         
        case GENERATE_SECOND:
            return {...state, second:state.second=action.payload}
        case ADD_SCORE:
            return {...state, score:state.score+=1}
        case GET_ANSVER:
            return {...state, ansver:state.ansver=action.payload}
        case PUSH_SIGN:
            return {...state, sign:[...state.sign, action.payload]}
        case ARRAY_RESET:
            return {...state,sign:[]}
        case SCORE_RESET:
            return {...state,score:state.score=0}    
        default:
            return state
    }
}

export const generateFirstAction = (payload) => ({type:GENERATE_FIRST,payload})
export const generateSecondAction = (payload) => ({type:GENERATE_SECOND,payload})
export const getAnsverAction = (payload) => ({type:GET_ANSVER,payload})
export const addScoreAction = (payload) => ({type:ADD_SCORE,payload})
export const pushSignAction = (payload) => ({type:PUSH_SIGN, payload})
export const switchModalAction = (payload) => ({type:MODAL_SWITCH,payload})
export const arrayResetAction = (payload) => ({type:ARRAY_RESET,payload})
export const scoreResetAction = (payload) => ({type:SCORE_RESET,payload})
export const timerResetAction = (payload) => ({type:TIMER_RESET,payload})