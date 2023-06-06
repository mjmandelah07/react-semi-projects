import React from 'react'
import Todo from './Todo'

function TodoList( { todos, toogleTodo}) {
    return (
        todos.map(todo => {
            return <Todo key={ todo.id } toogleTodo={toogleTodo} todo={todo} />
        })
    )
}

export default  TodoList;
