document.addEventListener("DOMContentLoaded", function() {
    const imagen = document.getElementById("imagen");
    const anteriorBtn = document.getElementById("anterior");
    const siguienteBtn = document.getElementById("siguiente");
    const imagenes = ["fotos/antes/antes1.jpeg","fotos/despues/despues1.jpeg", "fotos/antes/antes2.jpeg","fotos/despues/despues2.jpeg", 
    "fotos/antes/antes3.jpeg","fotos/despues/despues3.jpeg",
    "fotos/antes/antes4.jpeg","fotos/despues/despues4.jpeg"];
    
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
