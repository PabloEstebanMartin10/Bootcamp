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

//ejercicio 2
updteContTareas();
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
    //resetea el formulario para limpiar valores
    document.querySelector("#form-tarea").reset();
  }
});

function updteContTareas() {
  document.getElementsByClassName("nTareas")[0].textContent =
    listaTareas.childElementCount;
}
function nuevaTarea(formInput) {
  const li = document.createElement("li");
  li.classList.add("tarea");
  li.textContent = formInput.value.trim();
  listaTareas.append(li);
}
