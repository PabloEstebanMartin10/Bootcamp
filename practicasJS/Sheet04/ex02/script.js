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
