const defaultState = {
    plus:false,
    minus:false,
    mult:false,
    division:false,
}

const PLUS_CHOOSE = 'PLUS_CHOOSE'
const MINUS_CHOOSE = 'MINUS_CHOOSE'
const MULT_CHOOSE = 'MULT_CHOOSE'
const DIVISION_CHOOSE = 'DIVISION_CHOOSE'
export const chooseReducer = (state=defaultState,action) =>{
    switch(action.type){
        case PLUS_CHOOSE:
            return {...state, plus:!state.plus}
        case MINUS_CHOOSE:
            return {...state, minus:!state.minus}
        case MULT_CHOOSE:
            return {...state, mult:!state.mult}
        case DIVISION_CHOOSE:
            return {...state, division:!state.division}
        default:
            return state
    }
}

export const choosePlusAction = (payload) => ({type:PLUS_CHOOSE,payload})
export const chooseMinusAction = (payload) => ({type:MINUS_CHOOSE,payload})
export const chooseMultAction = (payload) => ({type:MULT_CHOOSE,payload})
export const chooseDivisionAction = (payload) => ({type:DIVISION_CHOOSE,payload})