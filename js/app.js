//variables
const marca = document.querySelector("#marca");
const year = document.querySelector("#year");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");

const resultado = document.querySelector("#resultado"); 

const max = new Date().getFullYear(); 
const min = max - 10;
// console.log(min);


//generar un objeto

const datosBusqueda = {
    marca: "",
    year: "",
    minimo: "",
    maximo: "",
    puertas: "",
    transmision: "",
    color: "",
}



//eventos
document.addEventListener("DOMContentLoaded", () => {
    mostrarAutos(autos);

    //llenar las opciones del años.
    llenarSelect();

});

marca.addEventListener("change", (e) => {
    datosBusqueda.marca = e.target.value;

    filtrarAuto();
    
})
year.addEventListener("change", (e) => {
    datosBusqueda.year = parseInt(e.target.value);

    filtrarAuto();
})
minimo.addEventListener("change", (e) => {
    datosBusqueda.minimo = e.target.value;

    filtrarAuto();
})
maximo.addEventListener("change", (e) => {
    datosBusqueda.maximo = e.target.value;

    filtrarAuto();
})
puertas.addEventListener("change", (e) => {
    datosBusqueda.puertas = parseInt(e.target.value);

    filtrarAuto();
})
transmision.addEventListener("change", (e) => {
    datosBusqueda.transmision = e.target.value;

    filtrarAuto();
})
color.addEventListener("change", (e) => {
    datosBusqueda.color = e.target.value;

    filtrarAuto();
    // console.log(datosBusqueda);
})



//funciones

function mostrarAutos(autos) {
    
    limpiarHtml() //elimina el html previo

    autos.forEach(auto => {
        const {marca, year, precio, puertas, color, transmision} = auto;
        const autoHTML = document.createElement("P");

        autoHTML.textContent = ` 
            Marca: ${marca} / Año: ${year} / Precio ${precio} /
            Puertas: ${puertas} / Color: ${color} / Transmision: ${transmision};
        `

        resultado.appendChild(autoHTML);
    });
}

function limpiarHtml() {
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

function llenarSelect() {
    for (let i = max;  i >= min ; i--) {
        const opcion = document.createElement("option");
        opcion.value = i;
        opcion.textContent = i;

        year.appendChild(opcion);
        
    }
}

function filtrarAuto() {
    const resultado = autos.filter( filtrarMarca).filter( filtrarYear ).filter( filtrarMinimo ).filter( filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor)

    if (resultado.length) {
        mostrarAutos(resultado);
    }else {
        noResultado();
    }
    
}

function noResultado() {

    limpiarHtml();
    const mensajeNoresultado = document.createElement("div");
    mensajeNoresultado.classList.add("alerta", "error");
    mensajeNoresultado.textContent = "No hay Resultados de datosBusqueda, Intente con otros Terminos";
    resultado.appendChild(mensajeNoresultado);
}

function filtrarMarca(auto){

    if(datosBusqueda.marca) {
        return auto.marca === datosBusqueda.marca; 
    }
    return auto;
}
function filtrarYear(auto){

    if(datosBusqueda.year) {
        return auto.year === datosBusqueda.year; 
    }
    return auto;
}

function filtrarMinimo(auto) {
    if(datosBusqueda.minimo) {
        return auto.precio >= datosBusqueda.minimo; 
    }
    return auto;
}

function filtrarMaximo(auto) {
    if(datosBusqueda.maximo) {
        return auto.precio <= datosBusqueda.maximo; 
    }
    return auto;
}

function filtrarPuertas(auto) {
    if(datosBusqueda.puertas) {
        return auto.puertas === datosBusqueda.puertas; 
    }
    return auto;
}

function filtrarTransmision(auto) {
    if(datosBusqueda.transmision) {
        return auto.transmision === datosBusqueda.transmision; 
    }
    return auto;
}

function filtrarColor(auto) {
    if(datosBusqueda.color) {
        return auto.color === datosBusqueda.color; 
    }
    return auto;
}