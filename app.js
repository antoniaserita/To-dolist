    const titleInput = document.querySelector('#title')
    const descriptionInput = document.querySelector('.description')
    const startInput = document.getElementById('start')
    const completionDateInput = document.getElementById('completionDate')
    const todo = document.getElementById('todo')
    const btn = document.querySelector('#addBtn')

    const task=[
        {
            title:"cleaning",
            description:"neighbourhood",
            start:"12/01/2022",
            completionDate:"13/01/2022"
        }

    ]
    
    const tasklist = document.getElementById('tasklist');
    const li = document.createElement('li');
    li.innerHTML = `
    <input type="checkbox">
    <span>${task.title}</span>
    <span>${task.description}</span>
    <span>${task.start}</span>
    <span>${task.completionDate}</span>
    <button class="delete-btn">Delete</button>
    `;
    tasklist.appendChild(li);

    function addTask(){
        const newTask={
            title:titleInput.value,
            description:descriptionInput.value,
            start:startInput.value,
            completionDate:completionDateInput.value,
        }
      
        task.push(newTask)
        displayTask()
      }
      
    const checkbox = li.querySelector("input[type='checkbox]");
    checkbox.addEventListener("change", toggleComplete);
    li.querySelector(".delete-btn").addEventListener("click", deleteTask);
    btn.addEventListener('Click', addTask)
    
    function toggleComplete() {
        const listItem = this.parentnode;
        listItem.ClassList.toggle ("completed");
    }
    function deleteTask(index){
        task.splice(index,1)
        displayTask()
    }

    document.getElementById("taskForm").addEventListener("submit", addTask);
