//variables
const resultado = document.querySelector("#resultado"); 
const year = document.querySelector("#year");

const max = new Date().getFullYear(); 
const min = max - 10;
// console.log(min);





//eventos
document.addEventListener("DOMContentLoaded", () => {
    mostrarAutos();

    //llenar las opciones del años.
    llenarSelect();


});



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