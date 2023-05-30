//Variables
const resultado = document.querySelector("#resultado");


//Eventos

document.addEventListener("DOMContentLoaded", () => {
    mostrarAutos();

})


//funciones

function mostrarAutos() {
    autos.forEach(auto => {
        const autoHtml = document.createElement("P");

        autoHtml.textContent = `
            ${auto.marca} - ${auto.modelo} - ${auto.year}
        `;
        
        //insertar en el html
        resultado.appendChild(autoHtml);
    });

}