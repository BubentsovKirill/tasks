import React from 'react';

const styleInput = {
    marginRight : '10px'
};

const Task = ({title, isCompleted, deleteTrack,chengeIsCompaleted, showTaskView, key}) => (
    <li className="list-group-item" onClick={showTaskView.bind(null,key)}>
        <input type="checkbox"
               style={styleInput}
               defaultChecked={isCompleted}
               onChange={chengeIsCompaleted.bind(null, !isCompleted, key)} />
        <span
            style={isCompleted ? {textDecoration:'line-through'} : {textDecoration: 'none'} }
        >{title}</span>
        <button className="btn btn-default pull-right"
                onClick={deleteTrack.bind(null, key)}>Delete</button>
        <div className="clearFix"></div>
    </li>
);

export default Task;