import React from "react";

function TodoForm(props) {

    // State hooks
    const [title, setTitle] = React.useState('');
    const [responsable, setResponsable] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [priority, setPpriority] = React.useState('low');

    function handleSubmit(e) {
        e.preventDefault();
        console.log('sending...')
        props.onAddTodo({title, responsable, description, priority}) 
    }

    return (
        <div className="card">
            <form  className="card-body" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        name="title"
                        className="form-control"
                        placeholder="Title"
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        name="responsable"
                        className="form-control"
                        placeholder="Resonsable"
                        onChange={e => setResponsable(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        name="description"
                        className="form-control"
                        placeholder="Description"
                        onChange={e => setDescription(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <select
                        name="priority"
                        className="form-control"
                        onChange={e => setPpriority(e.target.value)}
                    >
                        <option>low</option>
                        <option>medium</option>
                        <option>high</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">
                    Save
                </button>
            </form>
        </div>
    )
}

export default TodoForm;