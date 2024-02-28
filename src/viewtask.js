const TaskManager = {
  init() {

  },
  async getTask(key, id) {
    try {
      // Search JSON data for the specified key and ID
      const foundItem = await this.searchJSON(key, id);

      // Display information in a div
      const contentDiv = document.querySelector('.content');
      if (foundItem) {
          // Create HTML content using the found item
          const itemHTML = `<div>Task: ${foundItem.task}</div>
                            <div>Description: ${foundItem.description}</div>
                            <div>Due Date: ${foundItem.dueDate}</div>
                            <div>Priority: ${foundItem.priority}</div>
                            <div>Notes: ${foundItem.notes}</div>
                            <div>Completed: ${foundItem.completed}</div>`;

          // Set the HTML content in the contentDiv
          contentDiv.innerHTML = itemHTML;
      } else {
          contentDiv.textContent = 'Item not found'; // Display message if item not found
      }
    } catch (error) {
      console.error('Error initializing TaskManager:', error);
    }
  },
  async searchJSON(key, id) {
    try {
        // Fetch JSON data from the server
        const response = await fetch('./sample.json');
        const data = await response.json();

        // Check if the key exists in the JSON data
        if (key in data) {
            const items = data[key];
            const result = items.find(item => item.id === id);

            if (result) {
                console.log('Item found:', result);
                return result;
            } 
                console.log('Item not found with ID:', id);
                return null;
        } 
            console.log('Key not found:', key);
            return null;
        
    } catch (error) {
        console.error('Error fetching or parsing JSON:', error);
        return null;
    }
  },
  showTask() {
      const content = document.querySelector('content');
      const titlebar = document.createElement('div');
      titlebar.className = 'titlebar';
      titlebar.textContent = 'Task Manager'

      const taskContent = document.createElement('div');
      taskContent.classList.add('task-view')
  },
};

export default TaskManager;