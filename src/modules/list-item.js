class Todo {
	constructor(title, dueDate, priority, description) {
		this.title = title;
		this.dueDate = dueDate;
		this.priority = priority;
		this.description = description;
		//this.element = document.createElement('li');
	}

	getElement() {
		return this.element;
	}
}

export { Todo };
