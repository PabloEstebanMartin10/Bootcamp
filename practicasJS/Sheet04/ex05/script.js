//Declaraciones de elementos
const contenedor = document.getElementById("tareas");
const subtitulo = document.createElement("h2");
const listaTareas = document.createElement("ul");
const li1 = document.createElement("li");
const li2 = document.createElement("li");
//set atributos de elementos
subtitulo.textContent = "Mis tareas";
listaTareas.id = "lista-tareas";
li1.classList.add("tarea");
li2.classList.add("tarea");
li1.textContent = "Aprender Javascript";
li2.textContent = "Practica DOM";
//add elementos al html
listaTareas.append(li1, li2);
contenedor.append(subtitulo, listaTareas);
//actualiza el contador de tareas
updteContTareas();
//añade los botones a los elementos de la lista
addButtonsLi();
//declara input
const formInput = document.getElementsByTagName("input")[0];
//añade atributos a input
formInput.setAttribute("required", "");
formInput.setAttribute("pattern", `(.|\\s)*\\S(.|\\s)*`);

//añade el eventlistener
document.querySelector("#form-tarea").addEventListener("click", (e) => {
  //elimina el comportamiento basico del formulario para hacer input
  e.preventDefault();
  //comprueba que se haya pulsado el boton
  if (e.target.type == "submit" && formInput.reportValidity()) {
    //crea una li y la añade como nueva tarea con el texto del input, tras esto resetea el formulario
    nuevaTarea(formInput);
    //actualizar el contador de tareas
    updteContTareas();
    //recorre todos los elementos de la lista de tareas y comprueba si tienen botones, en caso de que no lo añaden
    addButtonsLi();
    //resetea el formulario para limpiar valores
    document.querySelector("#form-tarea").reset();
  } else if (!formInput.checkValidity()) {
    const evento = new CustomEvent("errorFormulario", {
      detail: { mensaje: "El campo no puede estar vacío" },
    });
    document.dispatchEvent(evento);
  }
});

listaTareas.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    switch (e.target.textContent) {
      case "Completar":
        e.target.parentElement.parentElement.classList.add("hecha");
        break;
      case "Eliminar":
        e.target.parentElement.parentElement.remove();
        updteContTareas();
        break;
    }
  }
});

//actualiza el contador de tareas
function updteContTareas() {
  document.getElementsByClassName("nTareas")[0].textContent =
    listaTareas.childElementCount;
}

//añade  una tarea a la lista
function nuevaTarea(formInput) {
  const li = document.createElement("li");
  li.classList.add("tarea");
  li.textContent = formInput.value.trim();
  listaTareas.append(li);
}

//añade los botones iniciales a la lista
function addButtonsLi() {
  const tareas = document.getElementsByClassName("tarea");
  for (let i = 0; i < tareas.length; i++) {
    if (tareas[i].childElementCount < 1) {
      const divBotones = document.createElement("div");
      const botonComp = document.createElement("button");
      const botonDel = document.createElement("button");
      botonComp.textContent = "Completar";
      botonDel.textContent = "Eliminar";
      divBotones.append(botonComp, botonDel);
      tareas[i].append(divBotones);
    }
  }
}

document.addEventListener("errorFormulario", (e) => {
  console.log("La tarea no puede estar vacía");
});
