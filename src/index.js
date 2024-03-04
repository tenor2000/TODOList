import _ from 'lodash';
import "./style.css";
import FrontPage from './frontpage';
import InboxPage from './inboxpage';
import TaskManager from './viewtask';
import { createProject, createTask } from './createnew';

let currentProject = ''
const userDataAddress = 'sample.json'

const clearContent = function() {
  const content = document.querySelector('.content');
  content.innerHTML = '';
}

const setup = {
  async init(dataAddress) {
    this.createHeader();
    this.createSidebar();
    this.createMenuBar();
    this.createContent();
    this.dataList = await this.getJSON(dataAddress)
    this.showCurrentTasks(this.dataList);
  },
  createHeader() {
    // Create Header with app name, branding maybe
    const header = document.createElement('header');
    const headerText = document.createElement('h1');
    headerText.textContent = 'TaskMaster 2000';
    
    header.appendChild(headerText);
    document.body.appendChild(header);
  },
  createSidebar() {
    // Create the navbar div
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');

    // Create base navigation
    const mainNav = document.createElement('div')
    const navHeadings = ['Home', 'Inbox', 'Today', 'Coming Soon'];
    navHeadings.forEach(item => {
      const ul = document.createElement('ul');
      ul.classList.add('sidebar-nav');
      ul.textContent = item;
      sidebar.appendChild(ul);
      
      // Add event listener
      ul.addEventListener('click', () => {
        this.handleHeadingClick(item)
      })
    });

    sidebar.appendChild(mainNav);
    const spacer = document.createElement('div');
    spacer.classList.add('spacer');
    sidebar.appendChild(spacer);

    // Create Modal for popup displays
    const modal = document.createElement('dialog');
    modal.setAttribute('id', 'modal-dialog');
    document.body.appendChild(modal)

    // New Project Button
    const createProjectBtn = document.createElement('button');
    createProjectBtn.classList.add('new-project-btn');
    createProjectBtn.textContent = '+ New Project';
    createProjectBtn.onclick = () => {
      modal.showModal()
      createProject();
    }
    sidebar.appendChild(createProjectBtn)

    document.body.appendChild(sidebar);
  },
  async getJSON(dataAddress) {
    try {
      const response = await fetch(dataAddress);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
      return data;
    } catch(error) {
      console.error('Error fetching JSON data:', error);
      throw error;
    }
  },
  showCurrentTasks(data) {
    const sidebar = document.querySelector('.sidebar')
    Object.keys(data).forEach(key => {
      if (Array.isArray(data[key])) {
          const ul = document.createElement('ul');
          const div = document.createElement('div')
          div.textContent = key;
          div.addEventListener('click', () => {
            this.handleViewClick(key)});
          div.classList.add('sidebar-nav')
          ul.appendChild(div)
          data[key].forEach(item => {
              const li = document.createElement('li');
              li.textContent = item.task;
              li.classList.add('sidebar-task');
              li.addEventListener('click', (event) => {
                event.stopPropagation();
                this.handleViewClick(key, item)});
              ul.appendChild(li);
          });
          sidebar.appendChild(ul);
      }
  });
  },
  createContent() {
    // Create content area
    const content = document.createElement('div');
    content.classList.add('content');
    
    document.body.appendChild(content);
  },
  createMenuBar() {
    const modal = document.getElementById('modal-dialog');
    const menuBar = document.createElement('div');
    menuBar.classList.add('menu-container');
    document.body.appendChild(menuBar)
    if (currentProject !== '') {
      menuBar.innerHTML = `
        <button class="menu-button" id='new-task-btn'>+ New Task</button>`
      const newTaskBtn = document.getElementById('new-task-btn');
      newTaskBtn.addEventListener('click', () => {
        console.log('New Task Button Pressed')
        modal.showModal();
        createTask();
      });
    }
  },
  handleHeadingClick(text) {
    console.log('Heading clicked:', text);
    clearContent()
    if (text === 'Home') {
      FrontPage.init();
    } else if (text === 'Inbox') {
      InboxPage.init()
    } else if (text === 'Today') {
      InboxPage.init()
    } else if (text === 'Coming Soon') {
      InboxPage.init()
    }
  },
  handleViewClick(projectName, task) {
    if (arguments.length === 1) {
      console.log('Project clicked:', `${projectName}`);
      currentProject = projectName;
      clearContent()
      TaskManager.showProject(this.dataList, projectName)
    } else {
      console.log('Task clicked:', `${projectName}, ${task.id}, ${task.task}`);
      currentProject = projectName;
      clearContent()
      TaskManager.showTask(this.dataList, projectName, task.id)
    }
  },
}

setup.init(userDataAddress);
FrontPage.init();
