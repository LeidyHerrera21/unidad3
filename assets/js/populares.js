// Creamos un nuevo XMLHttpRequest
var xhttp = new XMLHttpRequest();

// Esta es la función que se ejecutará al finalizar la llamada
xhttp.onreadystatechange = function() {
  // Si nada da error
  if (this.readyState == 4 && this.status == 200) {
    // La respuesta, aunque sea JSON, viene en formato texto, por lo que tendremos que hace run parse
    console.log(JSON.parse(this.responseText));
  }
};

// Endpoint de la API y método que se va a usar para llamar
xhttp.open("GET", "https://www.npmjs.com/package/anime-api", true);
xhttp.setRequestHeader("Content-type", "application/json");
// Si quisieramos mandar parámetros a nuestra API, podríamos hacerlo desde el método send()
xhttp.send(null);

fetch('https://www.npmjs.com/package/anime-api')
    .then(response => response.json())
    .then(json => console.log(json));

axios.get('https://www.npmjs.com/package/anime-api')
  .then(function (response) {
    // función que se ejecutará al recibir una respuesta
    console.log(response);
})
  .catch(function (error) {
    // función para capturar el error
    console.log(error);
})
  .then(function () {
    // función que siempre se ejecuta
});

// axios
axios.get('https://www.npmjs.com/package/anime-api')
  .then(response => {
    console.log(response.data); // response.data ya es un JSON
  }, error => {
    console.log(error);
  });

// fetch()
fetch('https://www.npmjs.com/package/anime-api')
  .then(response => response.json())    // a fetch le llega una respuesta en string que tiene que ser parseada a JSON
  .then(data => {
    console.log(data) 
})
  .catch(error => console.error(error));

axios.interceptors.request.use(config => {
    // Aquí podríamos hacer algo con la llamada antes de enviarla
    console.log('Se ha enviado algo');
    return config;
});
  
  // llamada común
axios.get('https://www.npmjs.com/package/anime-api')
    .then(response => {
      console.log(response.data);
});

$.ajax({
    type: 'GET',
    url: 'https://www.npmjs.com/package/anime-api',
    dataType: 'json',
    success: function(data) {
      console.log(data)
    }
});

fetch('https://www.npmjs.com/package/anime-api')
        .then(response => response.json())
        .then(json => {
            printAnimes(json.results);
});

// Pinta todos los pokemos insertando un HTML dentro del #container
function printAnimes(pokemons) {
  const container = document.getElementById('container')
  animes.forEach(anime => {
    container.innerHTML = `
    ${container.innerHTML}
    <div class="card">
    <img src="${getAnimeId(anime.url)}.png"/>
    <span>Nº.${getAnimeId(anime.url)}</span>
    <h2>${anime.name.charAt(0).toUpperCase() + anime.name.slice(1)}</h2>
    </card>
  `;
  });
}

// En esta ruta de la API no nos viene el id de cada pokemon, pero si que nos viene
// una URL, para poder obtener todos los datos de ese pokemon, la cual contiene su ID
// así que le extraigo el ID a la URL
function getAnimeId(url) {
  return url.replace('https://www.npmjs.com/package/anime-api', '').replace('/','')
}
/*const API_URL ="https://www.npmjs.com/package/anime-api";
const HTMLResponse = document.querySelector('listaAnime');
const tpl = document.createDocumentFragment(`ul`);

fetch(`${API_URL}/anime`)
.then((response) => response.json())
.then((anime) => {
    anime.forEach(anime => {
     let elem = document.createElement('li');
     elem.appendChild(
        document.createTextNode( `${anime.name}  ${anime.resolved}`)
        );
        ul.appendChild(elem);
    });

    HTMLResponse.appendChild(ul);

    const tpl = anime.map(anime => `<li> ${anime.name}  ${anime.resolved}</li>` );
    HTMLResponse.innerHTML = `<ul> ${tpl}</ul>`
})

const xhi = new XMLHttpRequest();

function onRequestHandler() {
    if (this.readyState === 4 && this.status === 200) {
        const data = JSON.parse(this.response);
        const HTMLResponse = document.querySelector('#listaAnime')

        const tpl = data.map(anime => `<li> ${anime.name}  ${anime.resolved}</li>`);
        HTMLResponse.innerHTML = `<ul> ${tpl}</ul>`
    }
}

xhi.addEventListener('load',onRequestHandler);
xhi.open('GET', `${API_URL}/anime`);
xhi.send();*/

/*const listaAnime = document.querySelector("#listaAnime");
const botonesHeader = document.querySelectorAll(".btn-header");
let URL = "https://www.npmjs.com/package/anime-api" ;

for (let i = 1; i <= 151; i++) {
    fetch(URL + i)
        .then((response) => response.json())
        .then(data => mostrarAnime(data))
}

function mostrarAnime(anime) {

    let tipos = anime.types.map((type) => `<p class="${type.type.name} tipo">${type.type.name}</p>`);
    tipos = tipos.join('');

    let animeId = poke.id.toString();
    if (animeId.length === 1) {
        animeId = "00" + animeId;
    } else if (animeId.length === 2) {
        animeId = "0" + animeId;
    }


    const div = document.createElement("div");
    div.classList.add("anime");
    div.innerHTML = `
        <p class="anime-id-back">#${animeId}</p>
        <div class="anime-imagen">
            <img src="${anime.sprites.other["official-artwork"].front_default}" alt="${anime.name}">
        </div>
        <div class="anime-info">
            <div class="nombre-contenedor">
                <p class="anime-id">#${animeId}</p>
                <h2 class="anime-nombre">${anime.name}</h2>
            </div>
            <div class="anime-tipos">
                ${tipos}
            </div>
            <div class="anime-stats">
                <p class="stat">${anime.height}m</p>
                <p class="stat">${anime.weight}kg</p>
            </div>
        </div>
    `;
    listaAnime.append(div);
}

botonesHeader.forEach(boton => boton.addEventListener("click", (event) => {
    const botonId = event.currentTarget.id;

    listaAnime.innerHTML = "";

    for (let i = 1; i <= 151; i++) {
        fetch(URL + i)
            .then((response) => response.json())
            .then(data => {

                if(botonId === "ver-todos") {
                    mostrarAnime(data);
                } else {
                    const tipos = data.types.map(type => type.type.name);
                    if (tipos.some(tipo => tipo.includes(botonId))) {
                        mostrarAnime(data);
                    }
                }

            })
    }
}))*/