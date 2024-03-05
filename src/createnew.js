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

export const createTask = (project) => {
    const modal = document.getElementById('modal-dialog');
    modal.innerHTML = `
        <div class="modal-content">
            <button id="closeBtn" class="close">&times;</button>
            <form id="new-task-form" action=>
                <p>Please complete for a new task entry.</p>
                <div>
                    <label>Project: ${project}</label>
                    <div>
                </div>
                <div>
                    <label for="new-task">Task:</label>
                    <input type="text" id="new-task" name="new-task" required>
                </div>
                <div>
                    <label for="deadline">Due Date:</label>
                    <input type="text" id="deadline" name="deadline" required>
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
    
    submitBtn.onclick = () => {
        // Write to database
        console.log(taskElem.value)
        modal.close();
      }
    closeBtn.onclick = () => {
        modal.close();
    }
}

export function editProject() {
    
}

export function editTask(project, task) {
    const modal = document.getElementById('modal-dialog');
    modal.innerHTML = `
        <div class="modal-content">
            <button id="closeBtn" class="close">&times;</button>
            <form id="new-task-form" action=>
                <p>Editing Task.</p>
                <div>
                    <label>Project: ${project}</label>
                    <div>
                </div>
                <div>
                    <label for="edit-task">Task:</label>
                    <input type="text" id="edit-task" name="edit-task" value=${task.task} required>
                </div>
                <div>
                    <label for="deadline">Deadline:</label>
                    <input type="text" id="deadline" name="deadline" value=${task.deadline} required>
                </div>
                <div>
                    <label for="priority">Priority:</label>
                    <select id="priority" name="priority" value= ${task.priority} required>
                        <option value="">Select Priority</option>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </div>
                <div>
                    <label for="task-description">Description:</label>
                    <textarea type="text" id="description-new" name="description-new" value=${task.description}required></textarea>
                </div>
                <div>
                    <label for="task-notes">Notes:</label>
                    <textarea type="text" id="task-notes" name="task-notes" value=${task.notes}required></textarea>
                </div>
                <button type="submit" id="submit">Submit</button>
            </form>
        </div>
    `;
    const submitBtn = document.getElementById('submit');
    const closeBtn = document.getElementById('closeBtn');
    const taskElem = document.getElementById('edit-task')
    taskElem.focus()
    
    submitBtn.onclick = () => {
        // Write to database
        console.log(taskElem.value)
        modal.close();
      }
    closeBtn.onclick = () => {
        modal.close();
    }
}

function doesProjectExist() {
    const constraints = {
        data: 1
    }
}