document.addEventListener("DOMContentLoaded", function() {
    const imagen = document.getElementById("imagen");
    const anteriorBtn = document.getElementById("anterior");
    const siguienteBtn = document.getElementById("siguiente");
    const imagenes = ["fotos/descarga.jpg", "fotos/paisaje.jpg", "fotos/pepito.jpg"];
    let indiceActual = 0;

    function cambiarImagen(direccion) {
        if (direccion === "izquierda") {
            indiceActual--;
            if (indiceActual < 0) {
                indiceActual = imagenes.length -1;
            };
       
        } else if (direccion === "derecha") {
            indiceActual ++;
            if(indiceActual >= imagenes.length){
            indiceActual = 0;
            };
        }
        imagen.src = imagenes[indiceActual];
    }

    anteriorBtn.addEventListener("click", function() {
        cambiarImagen("izquierda");
    });

    siguienteBtn.addEventListener("click", function() {
        cambiarImagen("derecha");
    });
});
