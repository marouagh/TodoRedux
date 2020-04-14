import { ADD_TASK, DELETE_TASK, COMPLETE_TASK, EDIT_TASK } from "../constants/actionTypes"

const initState = { listTodo:[{id: Math.random, todo: 'hello', isComplet: false, isEdit: true}]}


const rootReducer = (state = initState.listTodo , action) => {
    switch (action.type) {
        case ADD_TASK:
            return state.concat(action.payload)
        case DELETE_TASK:
            return state.filter(el => el.id !== action.payload)
        case COMPLETE_TASK:
            return state.map(el=> (el.id===action.payload) ? {...el, isComplete:!el.isComplete}:el)
        case EDIT_TASK:
            return state.map(el=> (el.id===action.payload) ? {...el, isComplete:false, isEdit:!el.isEdit, todo: action.newTask}:el)
            default:
            return state;

    }
}
export default rootReducer