//variables
const resultado = document.querySelector("#resultado");



//eventos
document.addEventListener("DOMContentLoaded", () => {
    mostrarAutos();


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