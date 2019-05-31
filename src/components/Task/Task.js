import React from 'react';

function Task(props) {

    function handleDeleteTodo() {
        props.onDeleteTodo(props.index);
    }

    return (
        <div>
            <div className='card mt-4'>
            <div className='card-header'>
                <h3>{ props.task.title }</h3>
                <span className="badge bagde-pill badge-danger ml-2">
                { props.task.priority }
                </span>
            </div>
            <div className='card-body'>
                <p>{ props.task.description }</p>
                <p> <mark>{ props.task.responsable }</mark> </p>
            </div>
            <div className="card-footer">
                <button 
                className='btn btn-danger' 
                onClick={ handleDeleteTodo }>
                    Delete
                </button>
            </div>
            </div>
        </div>
    )
}

export default Task;