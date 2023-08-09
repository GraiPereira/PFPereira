const env = document.querySelector("#env");
env.addEventListener("click", mostrarAlerta);

function mostrarAlerta() {
    swal("¡Excelente!", "¡tu formulado ha sido enviado con éxito!", "success");
}