console.log("Página cargada correctamente");

const formulario = document.querySelector(".formulario");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Información enviada correctamente");

});