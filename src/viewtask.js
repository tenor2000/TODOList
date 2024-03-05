const TaskManager = {
  showTask(dataList, key, id) {
    try {
      // sample JSON starts index 1
      const item = dataList[key].find(task => task.id === id);
      this.createBanner('task', item.task)

      // Display information in a div
      const contentDiv = document.querySelector('.content');
      if (item) {
          // Create HTML content using the found item
          const itemHTML = `<div class='task-card'>
                              <div>Task: ${item.task}</div>
                              <div>Description: ${item.description}</div>
                              <div>Due Date: ${item.deadline}</div>
                              <div>Priority: ${item.priority}</div>
                              <div>Notes: ${item.notes}</div>
                              <div>Completed: ${item.completed}</div>
                            </div>`;

          contentDiv.innerHTML += itemHTML;
      } else {
          contentDiv.textContent = 'Item not found';
      }
    } catch (error) {
      console.error('Error initializing TaskManager:', error);
    }
  },
  showProject(dataList, key) {
    this.createBanner('project', key);
    try {
      const project = dataList[key];
      const contentDiv = document.querySelector('.content');

      if (project) {

        project.forEach(item => {
          const itemHTML = `<div class='task-list-item'>
                        <input type="checkbox" id="check${item.id}" name="check${item.id}">
                        <label for="check${item.id}">Done</label>
                        <div>${item.task}</div>
                        <div>Due Date: ${item.deadline}</div>
                        <div>Priority: ${item.priority}</div>
                        <div>Completed: ${item.completed}</div>
                      </div>`;
          contentDiv.innerHTML += itemHTML;
          
          const checkbox = document.getElementById(`check${item.id}`);
          checkbox.checked = item.completed;
          });
          
        
      } else {
        contentDiv.textContent = 'Item not found';
      }

    } catch (error) {
      console.error('Error initializing TaskManager:', error);
    }
  },
  createBanner(type, text) {
    const content = document.querySelector('.content')
    const banner = document.createElement('h1');
    if (type === 'task') {
      banner.textContent = `Task Manager: ${text}`;
    } else if (type === 'project') {
      banner.textContent = `Project Manager: ${text}`;
    } else {
      banner.textContent = 'A Problem has occurred';
    }
    banner.classList.add('banner');
    content.appendChild(banner);
  },
  filterByDate() {
    // WIP
  }
};

export default TaskManager;