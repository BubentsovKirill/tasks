import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types'

import Task from '../components/Task';
import TaskView from '../components/TaskView';

class Tasks extends Component{
    constructor(props,context){
        super(props,context);
        this.state = {
            task : {
                title : '',
                dicription: ''
            }
        }
    }

    handleOnClick(id){
    //TODO: вот тут не знаю как сделать
        //в старых версиях болы что то типо такого this.context.router.history.push(`/tasks/${id}`)
        //как сейчас это делается не догоняю

    }

    handleTitleChange(event){
       const title = event.target.value;
       this.setState({
           task: {
               title : title,
               dicription : this.state.task.dicription
           }
       })
    }
    handleDiscriptionChange(event){
        const dicription = event.target.value;
        this.setState({
            task: {
                title : this.state.task.title,
                dicription : dicription
            }
        })
    }
    handleSubmit(event){
        event.preventDefault();
        const title = this.state.task.title;
        const discription = this.state.task.dicription;
        this.props.onAddTask(title, discription);
        this.setState({
            task: {
                title: '',
                dicription: ''
            }
        })
    }

    render(){
        const onDeleteTask = this.props.onDeleteTask;
        const onChangeCompleted = this.props.onChangeCompleted;
        const handleOnClick = this.handleOnClick;
        return(
            <div className="container">
               <div className="row">
                   <div className="col-md-6">
                       <form onSubmit={this.handleSubmit.bind(this)}>
                           <div className="form-group">
                               <input type="text" className="form-control" placeholder="Title"
                               value={this.state.task.title}
                               onChange={this.handleTitleChange.bind(this)}/>
                           </div>
                           <div className="form-group">
                               <textarea type="password" className="form-control" placeholder="Dicription"
                                         value={this.state.task.dicription}
                                         onChange={this.handleDiscriptionChange.bind(this)}/>
                           </div>
                           <button type="submit" className="btn btn-default pull-right">Add task</button>
                           <div className="clearFix"></div>
                       </form>
                       <br/>
                       <br/>
                       <ul className="list-group">
                           {
                               this.props.tasks.map(function(item){
                                   return <Task key={item.id}
                                                showTaskView={handleOnClick.bind(null,item.id)}
                                                title={item.title}
                                                discription={item.discription}
                                                isCompleted={item.isCompleted}
                                                deleteTrack={onDeleteTask.bind(null,item.id)}
                                                chengeIsCompaleted={onChangeCompleted.bind(null, item.id)}
                                   />
                               })
                           }
                       </ul>
                   </div>
                   <div className="col-md-6">
                       {/*вот сдесь должен показаться нужный мне контент*/}
                       <Route path="/tasks/:taskId" component={TaskView}/>
                   </div>
               </div>
            </div>
        )
    }
}

export default withRouter(connect(
    state => ({
        tasks : state.tasks
    }),
    dispatch => ({
        onAddTask:(title,dicription) => {
            const payload = {
                id: Date.now().toString(),
                title : title,
                dicription : dicription,
                isCompleted : false
            };
            dispatch({
                type: 'ADD_TASK',
                payload: payload
            })
        },
        onDeleteTask:(id) => {
            const payload = {
                id : id
            };
            dispatch({
                type: 'DELETE_TASK',
                payload: payload
            })
        },
        onChangeCompleted:(id,isCompleted) => {
            const payload = {
                id: id,
                isCompleted : isCompleted
            };
            dispatch({
                type: 'CHANGE_ISCOMPLETED',
                payload : payload
            })
        }
    })
)(Tasks))
