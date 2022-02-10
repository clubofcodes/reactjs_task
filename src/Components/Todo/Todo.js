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
            <div style={{ marginBottom: '30px' }}>
                <hr />
                <h3>TODO ~ TASK</h3>
                <form onSubmit={this.handleSubmit}>
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

class TodoList extends React.Component {

    removeTask = (task) => this.props.rmtask(task.id);

    render() {
        return (
            <ul>
                {this.props.todo_tasks.map(task => (
                    <li key={task.id}>
                        {task.text} { }
                        <button onClick={this.removeTask.bind(this, task)}>Delete</button>
                    </li>
                ))}
            </ul>
        );
    }
}

export default Todo;