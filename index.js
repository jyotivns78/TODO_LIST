// index.js

document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('new-task-form');
    const taskList = document.getElementById('tasks');

    taskForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const taskInput = document.getElementById('new-task-input');
        const taskContent = taskInput.value.trim();

        if (taskContent !== '') {
            const taskElement = createTaskElement(taskContent);
            taskList.appendChild(taskElement);
            taskInput.value = '';
        }
    });
});

function createTaskElement(content) {
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');

    const taskContentDiv = document.createElement('div');
    taskContentDiv.classList.add('content');
    taskContentDiv.textContent = content;

    const actionDiv = document.createElement('div');
    actionDiv.classList.add('action');

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete');
    deleteButton.addEventListener('click', () => {
        taskDiv.remove();
    });

    actionDiv.appendChild(deleteButton);

    taskDiv.appendChild(taskContentDiv);
    taskDiv.appendChild(actionDiv);

    return taskDiv;
}
