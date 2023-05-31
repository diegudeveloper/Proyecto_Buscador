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
    mostrarAutos();

    //llenar las opciones del años.
    llenarSelect();

});

marca.addEventListener("change", (e) => {
    datosBusqueda.marca = e.target.value;
})
year.addEventListener("change", (e) => {
    datosBusqueda.year = e.target.value;
})
minimo.addEventListener("change", (e) => {
    datosBusqueda.minimo = e.target.value;
})
maximo.addEventListener("change", (e) => {
    datosBusqueda.maximo = e.target.value;
})
puertas.addEventListener("change", (e) => {
    datosBusqueda.puertas = e.target.value;
})
transmision.addEventListener("change", (e) => {
    datosBusqueda.transmision = e.target.value;
})
color.addEventListener("change", (e) => {
    datosBusqueda.color = e.target.value;
    console.log(datosBusqueda);
})



//funciones

function mostrarAutos() {
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

function llenarSelect() {
    for (let i = max;  i >= min ; i--) {
        const opcion = document.createElement("option");
        opcion.value = i;
        opcion.textContent = i;

        year.appendChild(opcion);
        
    }
}