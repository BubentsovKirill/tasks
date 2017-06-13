const initialState = [
    {
        id: 0,
        title: 'Task 1333',
        discription : 'some tasks',
        isCompleted : false
    },
    {
        id: 1,
        title: 'Task 2',
        discription : 'some tasks 2',
        isCompleted : false
    }
];

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
    return state
}