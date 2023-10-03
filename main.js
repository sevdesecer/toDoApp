 const addTaskButton = document.querySelector(".addTask");
 const todoInput = document.querySelector(".todoInput");

 const toggleComplete = (event) => {
    const {parentElement} = event.currentTarget;
    const isCompleted = [...parentElement.classList].some(
        (className) => className === "completed");

        if(!isCompleted){
            event.currentTarget.innerText = "To-do";
        }else{
            event.currentTarget.innerText = "Complete";
        }
    event.currentTarget.parentElement.classList.toggle("completed");
 };

 const removeItem = (event) => {
    //console.log(event.currentTarget.parentElement);
    todosContainer.removeChild(event.currentTarget.parentElement);
 };
    const todosContainer = document.querySelector(".todos");
    const renderTodoItem = (todoText)=>{

    const todoItemElement = document.createElement("li");
    todoItemElement.classList.add("todoItem");
    const textElement = document.createElement("p");
    todoItemElement.innerText = todoText;
    todoItemElement.appendChild(textElement);

    const completeButton = document.createElement("button");
    completeButton.classList.add("completeButton");
    completeButton.innerText = "Complete";
    completeButton.addEventListener('click', toggleComplete)
    todoItemElement.appendChild(completeButton);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener('click', removeItem);
    textElement.classList.add("todoText");
    todoItemElement.appendChild(deleteButton);

    todosContainer.appendChild(todoItemElement);
    todoInput.value = "";
    todoInput.focus();
 }

 const addTask = () => {
    if(todoInput.value === ""){
        alert("Input can not be empty body!")
    }else{
        renderTodoItem(todoInput.value);
    }
 }

 addTaskButton.addEventListener('click', addTask);

 
