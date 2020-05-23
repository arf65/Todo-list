import { Todo } from './list-item';

class Project {
	constructor(name) {
		this.name = name;
		this.todos = [];
		//this.element = document.createElement('div');
	}

	getTodos() {
		return this.todos.slice();
	}

	addTodo(title, dueDate, priority, description) {
		const todo = new Todo(title, dueDate, priority, description);
		this.todos.push(todo);
		//this.element.appendChild(todo.getElement);
		return todo;
	}

	deleteTodo(todo) {
		this.todos.remove(todo);
		//this.element.removeChild(todo.getElement);
	}
}

export { Project };
