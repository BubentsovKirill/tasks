var tasks = [
    {
        id:1,
        title: 'task 1',
        discription: 'some task 1',
        isCompleted: false
    },
    {
        id:2,
        title: 'task 2',
        discription: 'some task 2',
        isCompleted: false
    },
    {
        id:3,
        title: 'task 3',
        discription: 'some task 3',
        isCompleted: false
    },
    {
        id:4,
        title: 'task 4',
        discription: 'some task 4',
        isCompleted: false
    },
    {
        id:5,
        title: 'task 5',
        discription: 'some task 5',
        isCompleted: false
    }
];


export default function getTasks(){
    return dispatch => {
        setTimeout(() => {
            console.log('I got Tasks');
            dispatch({type: 'FETCH_TASKS_SUCCESS', payload : tasks})
        },1000)
    }
};
