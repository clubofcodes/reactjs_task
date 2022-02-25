import React from 'react';

class Todo extends React.Component {

    constructor(props) {
        super(props);
        this.state = { tasks: [], text: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    render() {
        return (
            <div className='mb-0'>
                <hr />
                <p className='topic-heading'> ={'>'} TODO ~ Add Task (Class Component Demo)</p>
                <form className='innertag-flex' onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="new-todo">
                            What needs to be done?
                        </label>
                    </div>

                    <input
                        id="new-todo"
                        onChange={this.handleChange}
                        value={this.state.text}
                    />
                    <button>
                        Add Task{this.state.tasks.length + 1}
                    </button>
                </form>

                {this.state.tasks !== [] ? <TodoList rmtask={this.handleRemove} todo_tasks={this.state.tasks} /> : alert('No any task.')}
            </div>
        );
    }

    handleChange(e) { this.setState({ text: e.target.value }); }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.text.length === 0) {
            return;
        }
        const newTask = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState(state => ({
            tasks: state.tasks.concat(newTask), // passing object of 2 element to taks array.
            text: ''
        }));
    }

    handleRemove(task_id) {
        this.setState(prevState => ({
            tasks: prevState.tasks.filter((tasks_obj) => (tasks_obj.id !== task_id))
        }));
    }
}

function TodoList(props) {

    const removeTask = (task) => props.rmtask(task.id);

    return (
        <ul style={{ listStyle: 'none', marginBottom: '0' }}>
            <br />
            <p className='topic-heading mb-2'> ={'>'} Task List (Function Component Demo)</p>
            {props.todo_tasks.map(task => (
                <li key={task.id} className="innertag-flex mb-0">
                    <p className='mb-2'>{task.text} <button type='button' className='btn btn-danger btn-sm' onClick={() => removeTask(task)}>Delete</button></p>
                </li>
            ))}
        </ul>
    );
}

export default Todo;