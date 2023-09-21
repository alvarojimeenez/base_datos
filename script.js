const lista = document.getElementById('lista_equipos'); // Añadir a esta constante la lista de los equipos
const equipo1 = document.getElementById('equipo_local'); // Añade a esta constante el dato puesto en el input de equipo local
const equipo2 = document.getElementById('equipo_visitante'); // Añade a esta constante el dato puesto en el input de equipo visitante
const horario = document.getElementById('fecha'); // Añade a esta constante el dato puesto en el input de horario
const agregar = document.getElementById('add');  // Asignamos la accion del botón agregar equipo
const borrar = document.getElementById('delete'); // Asignamos la accion de borrar equipo

/* En la variable del boton de añadir equipo; si hacemos clic en ella al añadir equipos 
y horarios nos la introduzca en la tabla añadiendo una fila siempre al final con cada uno de los datos introducidos*/
agregar.addEventListener('click',()=> {
    let fila = document.createElement('tr');
    lista.appendChild(fila);
    if (equipo1.value != equipo2.value) {
        fila.insertAdjacentHTML('beforeend',`<td>${equipo1.value}</td>`);
        fila.insertAdjacentHTML('beforeend',`<td>${equipo2.value}</td>`);
        fila.insertAdjacentHTML('beforeend',`<td>${horario.value}</td>`);
    }else {
        alert("No puedes agregar en un mismo partido al mismo equipo");
    }

})
/* En la variable del boton de borrar equipo; al hacer clic en ella borra siempre la ultima fila de la tabla */
borrar.addEventListener('click', ()=> {
    let fila = lista.getElementsByTagName('tr').length;
    if (fila>1) {
        lista.getElementsByTagName('tr')[fila-1].remove();
    }else {
        alert("No hay más partidos para borrar");
    }
})