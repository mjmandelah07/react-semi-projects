import React from 'react'



function Todo({ todo, toogleTodo}) {

    const handleTodoClick = () => {
        toogleTodo(todo.id)
    };
    return (
        <div>
            <label>
                <input type="checkbox" checked={todo.complete} onChange={handleTodoClick}/>
                {todo.name}
            </label>

        </div>
    )
}

export default Todo;
