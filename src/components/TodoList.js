import React from 'react';
import style from './TodoList.css';

class TodoList extends React.Component {
    removeTodo(id) {
        this.props.removeTodo(id);
    }

    render() {
        return (
            <ol>
                {this.props.elements.map((element) => {
                    return <li className={style.list} onClick={() => this.removeTodo(element.id)} key={element.id}>{element.text}</li>
                })}
            </ol>
        );
    }
}

export default TodoList;
