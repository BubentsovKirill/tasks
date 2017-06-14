import React from 'react';
import {Link} from 'react-router-dom';

const styleInput = {
    marginRight : '10px'
};

const Task = ({title, isCompleted, deleteTrack,chengeIsCompaleted, key, id}) => (
    <li className="list-group-item">
        <input type="checkbox"
               style={styleInput}
               defaultChecked={isCompleted}
               onChange={chengeIsCompaleted.bind(null, !isCompleted, key)} />
        <Link to={`/tasks/${id}`}>
            <span
                style={isCompleted ? {textDecoration:'line-through'} : {textDecoration: 'none'} }
            >{title}</span>
        </Link>
        <button className="btn btn-default pull-right"
                onClick={deleteTrack.bind(null, key)} >
            <Link to="/tasks">Delete</Link>
        </button>
        <div className="clearFix"></div>
    </li>
);

export default Task;