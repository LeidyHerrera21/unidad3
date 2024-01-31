const fila = document.querySelector('.contenedor-carousel');
const peliculas = document.querySelectorAll('.pelicula');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

// ? ----- ----- Event Listener/ receptor para la flecha derecha. ----- -----
flechaDerecha.addEventListener('click', () => {
	fila.scrollLeft += fila.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.nextSibling){
		indicadorActivo.nextSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// ? ----- ----- Event Listener / receptor para la flecha izquierda. ----- -----
flechaIzquierda.addEventListener('click', () => { //toma dos parámetros: el nombre del evento y la función que se ejecutará cuando ocurra el evento.//
	fila.scrollLeft -= fila.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.previousSibling){ //Esta propiedad es de solo lectura, lo que significa que no puedes modificarla directamente.//
		indicadorActivo.previousSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// ? ----- ----- Paginacion ----- -----
const numeroPaginas = Math.ceil(peliculas.length / 5); //redondea//
for(let i = 0; i < numeroPaginas; i++){
	const indicador = document.createElement('button');

	if(i === 0){ // identidad//
		indicador.classList.add('activo'); //se refiere a la lista de clases asignadas al elemento//
	}

	document.querySelector('.indicadores').appendChild(indicador);
	indicador.addEventListener('click', (e) => {
		fila.scrollLeft = i * fila.offsetWidth;

		document.querySelector('.indicadores .activo').classList.remove('activo');
		e.target.classList.add('activo');
	});
}

// ? ----- ----- pasa / hover ----- -----
peliculas.forEach((pelicula) => { // se utiliza para recorrer un arreglo o una colección//
	pelicula.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			peliculas.forEach(pelicula => pelicula.classList.remove('hover')); //quita el hover//
			elemento.classList.add('hover');
		}, 300); //milisegundos//
	});
});

fila.addEventListener('mouseleave', () => { //Se activa cuando el cursor del mouse sale de un elemento determinado, después de haber entrado previamente en él//
	peliculas.forEach(pelicula => pelicula.classList.remove('hover')); //quita el hover de cada pelicula//
});

//-------API-----//

/*$.ajax({
    type: "GET",
    url: `${}/`,
    dataType: "json",
    success: function (data) {
        renderData(data);
    }
});*/