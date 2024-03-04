export const createProject = () => {
    const modal = document.getElementById('modal-dialog');
    modal.innerHTML = `
        <div class="modal-content">
            <button id="closeBtn" class="close">&times;</button>
            <form id="new-project" novalidate>
                <h3>Please name your new project.</h3>
                <div>
                    <label for="new-project">Project:</label>
                    <input type="text" id="new-project" name="new-project" required>
                    <button type="submit" id="submit">Submit</button>
                </div>
            </form>
        </div>
        `

    const submitBtn = document.getElementById('submit');
    const closeBtn = document.getElementById('closeBtn');
    const inputElem = document.getElementById('new-project')
    inputElem.focus()
    
    submitBtn.onclick = () => {
        // Write to database
        console.log(inputElem.value)
        modal.close();
      }
    closeBtn.onclick = () => {
        modal.close();
    }
}

export const createTask = () => {
    const modal = document.getElementById('modal-dialog');
    modal.innerHTML = `
        <div class="modal-content">
            <button id="closeBtn" class="close">&times;</button>
            <form id="new-task-form" novalidate>
                <p> Please complete for a new task entry.</p>
                <div>
                    <label for="new-task">Task:</label>
                    <input type="text" id="new-task" name="new-task" required>
                </div>
                <div>
                    <label for="due-date">Due Date:</label>
                    <input type="text" id="due-date" name="due-date" required>
                </div>
                <div>
                    <label for="priority">Priority:</label>
                    <select id="priority" name="priority" required>
                        <option value="">Select Priority</option>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </div>
                <div>
                    <label for="task-description">Description:</label>
                    <textarea type="text" id="description-new" name="description-new" required></textarea>
                </div>
                <div>
                    <label for="task-notes">Description:</label>
                    <textarea type="text" id="task-notes" name="task-notes" required></textarea>
                </div>
                <button type="submit" id="submit">Submit</button>
            </form>
        </div>
    `;

    const submitBtn = document.getElementById('submit');
    const closeBtn = document.getElementById('closeBtn');
    const taskElem = document.getElementById('new-task')
    taskElem.focus()
    
    submitBtn.onclick = function() {
        // Write to database
        console.log(taskElem.value)
        modal.style.display = 'none';
      }
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }
}