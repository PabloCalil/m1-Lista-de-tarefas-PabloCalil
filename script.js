const tasks = [
  { title: "Comprar comida para o gato", type: "Urgente" },
  { title: "Consertar Computador", type: "Importante" },
  { title: "Beber água", type: "Normal" },
  { title: "Enviar relatório trimestral", type: "Importante" },
  { title: "Fazer exercícios físicos", type: "Normal" },
  { title: "Agendar consulta médica", type: "Urgente" },
  { title: "Ler pelo menos um capítulo de um livro", type: "Normal" },
  { title: "Limpar a despensa", type: "Importante" },
  { title: "Pagar a conta de energia", type: "Urgente" },
  { title: "Assistir a um documentário interessante", type: "Normal" },
];

function renderElements(tasks) {
  const list = document.querySelector(".tasks__list");
  list.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    const li = createTaskItem(tasks[i].title, tasks[i].type);
    list.appendChild(li);
  }
}

function createTaskItem(title, type) {
  const listElement = document.createElement("li");
  const listDiv = document.createElement("div");
  const listSpan = document.createElement("span");
  const listP = document.createElement("p");
  const listRemoveButton = document.createElement("button");

  listRemoveButton.addEventListener('click', ()=>{
    for(let i = 0; i < tasks.length; i++){
      if(tasks[i].title === title && tasks[i].type === type){
        tasks.splice(i, 1);
      }
    }
    renderElements(tasks); 
  }); 
  
  listP.innerText = title; 

  listElement.classList.add("task__item");
  listDiv.classList.add("task-info__container");
  listSpan.classList.add("task-type");
  listRemoveButton.classList.add("task__button--remove-task");

  if (type === "Urgente") {
    listSpan.classList.add("span-urgent");
  } else if (type === "Importante") {
    listSpan.classList.add("span-important");
  } else {
    listSpan.classList.add("span-normal");
  }

  listElement.appendChild(listDiv);
  listElement.appendChild(listRemoveButton);
  listDiv.appendChild(listSpan);
  listDiv.appendChild(listP);

  return listElement;
}

renderElements(tasks);

const buttonAddEvent = document.querySelector('.form__button--add-task');
buttonAddEvent.addEventListener('click', ()=>{
  const taskTitle = document.getElementById('input_title').value;
  const taskType = document.querySelector('.form__input--priority').value;

  const newTask = {
    title: taskTitle,
    type: taskType,
  }

  tasks.push(newTask);
  renderElements(tasks); 

  document.getElementById('input_title').value = '';
  document.querySelector('.form__input--priority').value = ''; 
});