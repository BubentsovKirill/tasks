import React, { Component } from 'react';
import {Route} from 'react-router-dom';


import Header from '../components/Header';
import Home from '../components/Home';
import About from '../components/About';
import Tasks from './Tasks';
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
            <Header/>
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/tasks" component={Tasks}/>
            </div>
        </div>
    );
  }
}

export default App;
