import React from 'react';
import style from './App.css';
import Title from '../components/Title.js';
import TodoList from '../components/TodoList.js';
import { hot } from 'react-hot-loader';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [{
                id: 1,
                text: 'clean room'
            }, {
                id: 2,
                text: 'wash the dishes'
            }, {
                id: 3,
                text: 'feed my cat'
            }]
        };

        this.removeTodo = this.removeTodo.bind(this);
    }

    removeTodo(id) {
        const remaining = this.state.data.filter(todo => todo.id !== id);

        this.setState({data: remaining});
    }

    render() {
        return (
            <div>
                <Title title={"To do: "} listCount={this.state.data.length}/>
                <div className={style.TodoApp}>
                    <TodoList elements={this.state.data} removeTodo={this.removeTodo}/>
                </div>
            </div>
        );
    }
}

export default hot(module)(App);
