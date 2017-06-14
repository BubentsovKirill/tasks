import React from 'react';
import {connect} from 'react-redux';

const style = {
    fontSize : '20px'
};

const TaskView = ({task}) => (
    <div style={style}>
        <p>Title: {task.title}</p>
        <p>Status: {(task.isCompleted) ? 'This task is complete' : "This task isn't complete"}</p>
        <p>Discription: {task.discription}</p>
    </div>
);

const mapStateToProps = (state, ownProps) => {
    return {
        task: state.tasks.find(task => task.id === Number(ownProps.match.params.taskId))
    }
};

export default connect(mapStateToProps)(TaskView);