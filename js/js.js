let imagenes = [
    "Imagen/OSIN-Entrevistar.jpg",
    "Imagen/OSIN-Organizar.jpg",
    "Imagen/OSINT-Informacion.jpg",
    "Imagen/OSINT-Mapa.jpg"

];

let posicion = 0;

function cambiarImagen() {

    let imagen = document.getElementById("imagenCarrusel");

    imagen.style.opacity = "0";

    setTimeout(function() {

        posicion++;

        if (posicion >= imagenes.length) {
            posicion = 0;
        }

        imagen.src = imagenes[posicion];

        imagen.style.opacity = "1";

    }, 800);
}

setInterval(cambiarImagen, 4000);

const procesos = [
    {
        numero: "01",
        titulo: "Buscar",
        texto: "Localizar información relacionada con el objetivo de la investigación utilizando diferentes fuentes."
    },
    {
        numero: "02",
        titulo: "Recopilar",
        texto: "Reunir los datos encontrados y organizar la información relevante."
    },
    {
        numero: "03",
        titulo: "Verificar",
        texto: "Comprobar la información utilizando diferentes fuentes para determinar su confiabilidad."
    },
    {
        numero: "04",
        titulo: "Relacionar",
        texto: "Comparar los datos obtenidos y establecer conexiones entre diferentes fuentes."
    },
    {
        numero: "05",
        titulo: "Analizar",
        texto: "Interpretar la información recopilada para obtener datos útiles y encontrar posibles patrones."
    },
    {
        numero: "06",
        titulo: "Presentar",
        texto: "Organizar los resultados de la investigación de manera clara, ordenada y comprensible."
    }
];

let procesoActual = 0;

const numero = document.querySelector(".numero-proceso");
const titulo = document.querySelector(".tarjeta h3");
const texto = document.querySelector(".tarjeta p");
const contador = document.querySelector("#contador");

function mostrarProceso() {

    numero.textContent = procesos[procesoActual].numero;
    titulo.textContent = procesos[procesoActual].titulo;
    texto.textContent = procesos[procesoActual].texto;

    contador.textContent = (procesoActual + 1) + " / " + procesos.length;
}

document.querySelector("#siguiente").addEventListener("click", function() {

    procesoActual++;

    if (procesoActual >= procesos.length) {
        procesoActual = 0;
    }

    mostrarProceso();
});

document.querySelector("#anterior").addEventListener("click", function() {

    procesoActual--;

    if (procesoActual < 0) {
        procesoActual = procesos.length - 1;
    }

    mostrarProceso();
});