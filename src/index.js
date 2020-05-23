import { formatDistance, subDays } from 'date-fns';
import { getProjectInput } from './modules/display';
import { project } from './modules/project';
import { Application } from './modules/application';
import { Todo } from './modules/list-item';

// console.log(formatDistance(subDays(new Date(), 3), new Date()));

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-modal-close]');
const overlay = document.getElementById('overlay');

//closes any currently open modals if the user clicks outside of them
overlay.addEventListener('click', () => {
	const modalsCurrentlyOpen = document.querySelectorAll('.modal.active');
	modalsCurrentlyOpen.forEach((modal) => {
		closeModal(modal);
	});
});
//opens modal when the add new button is clicked
openModalButtons.forEach((button) => {
	button.addEventListener('click', () => {
		const modal = document.querySelector(button.dataset.modalTarget);
		openModal(modal);
	});
});
function openModal(modal) {
	if (modal === null) return;
	modal.classList.add('active');
	overlay.classList.add('active');
}
//closes modal when the x on the modal is clicked
closeModalButtons.forEach((button) => {
	button.addEventListener('click', () => {
		const modal = button.closest('.modal');
		closeModal(modal);
	});
});
function closeModal(modal) {
	if (modal === null) return;
	modal.classList.remove('active');
	overlay.classList.remove('active');
}

//adds an event listener to the projects Add New button
const addProject = document.querySelector('[data-add-project]');
addProject.addEventListener('click', () => {
	const projectName = document.querySelector('[data-project-name]').value;
	projectList.addProject(projectName);
	const modalsCurrentlyOpen = document.querySelectorAll('.modal.active');
	modalsCurrentlyOpen.forEach((modal) => {
		closeModal(modal);
	});
	const project1 = new Display();
	project1.clearActiveProject();
	project1.displayProjects();
});

const addListItem = document.querySelector('[data-add-todo]');
addListItem.addEventListener('click', () => {
	let currentProject = document.querySelector('.active-project');
	console.log('active project: ' + currentProject);
	console.log(projectList.currentProject.addTodo('test', 'may 1', 'high', 'do stuff'));
});

//initializes data by creating a new application
const projectList = new Application();

//testing data
// const project1 = projectList.addProject('Project1');
// const project2 = projectList.addProject('second test project');
// var p2todo = project2.addTodo('Final test', '12/25/2020', 'High', 'Christmas!!!');
// var todo1 = project1.addTodo('Test1', '5/20/2020', 'High', 'perform the first test');
// var todo2 = project1.addTodo('Test2', '5/22/2020', 'low', 'peform the second test');
// console.log(projectList);
// console.log(project1);
// console.log(todo1);
// console.log(todo2);
// console.log(project2);
// console.log(p2todo);
// console.log('poop');

class Display {
	constructor() {
		this.projectDisplay = document.querySelector('.projects__list');
	}

	//displays the current projects
	displayProjects() {
		console.log('running display');
		// const projectDisplay = document.querySelector('.projects__list');
		let projectTitle = document.createElement('li');
		projectTitle.textContent = projectList.projects[0].name;
		projectTitle.classList.add('active-project', 'project-element');
		this.projectDisplay.insertBefore(projectTitle, this.projectDisplay.childNodes[0]);
	}

	clearActiveProject() {
		const list = this.projectDisplay.children;
		for (let i = 0; i < list.length; i++) {
			if (list[i].classList.contains('active-project')) {
				list[i].classList.remove('active-project');
			}
		}
	}
}
