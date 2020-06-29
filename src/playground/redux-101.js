import {createStore} from 'redux'

const incrementCount = ({incrementBY=1}={})=>({
    type:'INCREMENT',
    incrementBY
})

const decrementCount = ({decrementBY=1}={})=>({
    type:'DECREMENT',
    decrementBY
})

const setCount = ({count})=>({
    type:'SET',
    count
})

const resetCount = ()=>({
    type:'RESET',
    
})

const countReducer = (state={count:0},action)=>{
    switch(action.type){
        case 'INCREMENT':
            return{
                count:state.count + action.incrementBY
            }
        case 'DECREMENT':
            return{
                count:state.count-action.decrementBY
            }
        case 'SET':
            return{
                count:action.count
            }
        case 'RESET':
            return{
                count:0
            }
        default:
            return state

    }
}
const store = createStore(countReducer)

const unsubscribe = store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(incrementCount({incrementBY:5}))
store.dispatch(incrementCount())
store.dispatch(decrementCount({decrementBY: 10}))
store.dispatch(decrementCount())

store.dispatch(resetCount())

store.dispatch(setCount({count:-101}))
