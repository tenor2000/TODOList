import _ from 'lodash';
import "./style.css";
import FrontPage from './frontpage';
import InboxPage from './inboxpage';
import TaskManager from './viewtask';


const clearContent = function() {
  const content = document.querySelector('.content');
  content.innerHTML = '';
}

const setup = {
  init() {
    this.createHeader();
    this.createSidebar();
    this.createContent();
    this.addTasks();
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

    const prjBtn = document.createElement('button');
    prjBtn.classList.add('new-project-btn');
    prjBtn.textContent = '+ New Project';

    sidebar.appendChild(prjBtn)

    document.body.appendChild(sidebar);
  },
  addTasks() {
    const sidebar = document.querySelector('.sidebar')
    fetch('sample.json')
            .then(response => response.json())
            .then(data => {
                Object.keys(data).forEach(key => {
                    if (Array.isArray(data[key])) {
                        // Create a list for each array
                        const ul = document.createElement('ul');
                        ul.textContent = key;
                        ul.classList.add('sidebar-list')
                        data[key].forEach(item => {
                            const li = document.createElement('li');
                            li.textContent = item.task;
                            li.classList.add('sidebar-task');
                            li.addEventListener('click', () => {this.handleTaskClick(key, item)});
                            ul.appendChild(li);
                        });
                        sidebar.appendChild(ul);
                    }
                });
            })
            .catch(error => {
                console.error('Error fetching JSON file:', error);
            });
  },
  createContent() {
    // Create content area
    const content = document.createElement('div');
    content.classList.add('content');
    
    document.body.appendChild(content);
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
  handleTaskClick(listname, text) {
    console.log('Task clicked:', `${listname}, ${text.id}, ${text.task}`);
    clearContent()
    TaskManager.init(listname, text.id)
  },
}

setup.init();
FrontPage.init();
