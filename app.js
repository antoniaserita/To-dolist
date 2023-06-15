    const titleInput = document.querySelector('#title')
    const descriptionInput= document.querySelector('.description')
    const startInput= document.getElementById('start')
    const completionDateInput = document.getElementById('completionDate')
    const addBtn = document.querySelector('#addBtn')
    const todo= document.getElementById('todo')

    const todos=[]

// Adding a Todolist
function addTodo(){
    const singleTodo={
        id:todos.length+1,
        title:titleInput.value,
        description:descriptionInput.value,
        start:startInput.value,
        completed:false,
        completionDate:completionDateInput.value
    }
    todos.push(singleTodo)
    displayTodos()
    console.log(todos);
}

addBtn.addEventListener('click', addTodo)

displayTodos()

//displaying a Todolist
function displayTodos(){
    let html=''
    todos.forEach((todo, id)=>{
        html +=`
        <div class="item">
        <div class="tasklist">
          <h2>${title.input}</h2>
          <p>${description.input}Todo Desciption</p>
          <p>${start.input}4/10/2022</p>
          <p>${completionDate.input}9/10/2022</p>
          <button onClick="deleteTodo(${id})">Delete</button>
        </div>
        </div>
        `
    })

    app.innerHTML=html
}

//deleting a Todolist
function deleteTodo(id){
    todos.splice(id,1)
    displayTodos()
}
  
    
