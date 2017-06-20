const initialState = [];

export default function tasks(state = initialState, action){
    if(action.type === 'ADD_TASK'){
        return [
            ...state, action.payload
        ]
    }
    else if(action.type === 'DELETE_TASK'){
        return state.filter(function(item){
            return item.id !== action.payload.id
        })
    }
    else if(action.type === 'CHANGE_ISCOMPLETED'){
        return state.filter(function(item){
            if(item.id === action.payload.id){
                item.isCompleted = action.payload.isCompleted
            }
            return item
        })
    }
    else if(action.type === 'FETCH_TASKS_SUCCESS'){
        return action.payload
    }
    return state
}