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
            <>
                <p className='topic-heading'> ={'>'} TODO ~ Add Task (Class Component Demo)</p>
                <form className='mb-2' onSubmit={this.handleSubmit}>
                    <label htmlFor="new-todo">What needs to be done?</label>
                    <div className='div-flex'>
                        <input name="new-todo" id="new-todo" onChange={this.handleChange} value={this.state.text} />
                        <button className='btn btn-primary'> Add Task={'>'}{this.state.tasks.length + 1}</button>
                    </div>
                </form>

                {this.state.tasks !== [] ? <TodoList rmtask={this.handleRemove} todo_tasks={this.state.tasks} /> : alert('No any task.')}
            </>
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
            id: Date.now(),
            taskStyle: 'div-flex'
        };
        this.setState(state => ({
            tasks: state.tasks.concat(newTask), // passing object of 2 element to taks array.
            text: ''
        }));
    }

    handleRemove(task_id) {
        this.setState({ tasks: this.state.tasks.map((item) => (item.id === task_id ? { ...item, taskStyle: 'div-flex removed-item' } : { ...item })), });

        setTimeout(() => {
            this.setState(prevState => ({
                tasks: prevState.tasks.filter((tasks_obj) => (tasks_obj.id !== task_id))
            }));
        }, 400);
    }
}

function TodoList(props) {

    const removeTask = (task) => props.rmtask(task.id);

    return (
        <div>
            <p className='topic-heading mb-2'> ={'>'} Shows Task List (Function Component Demo)</p>
            {props.todo_tasks.map(task => (
                <div key={task.id} className={task.taskStyle}>
                    <input className='rectanglebg'value={task.text} readOnly /><button type='button' className='btn btn-danger' onClick={() => removeTask(task)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default Todo;