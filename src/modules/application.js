import { Project } from './project';

class Application {
	constructor() {
		this.projects = [];
		this.activeProject = new Project('');
		//this.element = document.createElement('div');
		//this.element.addClass('application');
		//document.querySelector('.application').appendChild(this.element);
	}

	addProject(name) {
		const project = new Project(name);
		this.projects.unshift(project);
		//this.element.appendChild(project);
		return project;
	}

	switchProject(project) {
		this.element.removeChild(this.activeProject.getElement());
		this.activeProject = project;
		//this.element.addChild(this.activeProject.getElement());
	}
}

export { Application };
