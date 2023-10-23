let formulario = document.getElementById("formContacto");

formulario.addEventListener("submit",function(evento){
    evento.preventDefault();

    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let mail = document.getElementById("mail");
    let telefono = document.getElementById("telefono");
    let mensaje = document.getElementById("mensaje");
    let error = document.getElementById("error");
    let enviado = document.getElementById("enviado");

    
    if((!nombre || contieneNum(nombre.value))){
        mostarError("Nombre mal puesto");
        return;
    }else if(!apellido || contieneNum(apellido.value)){
        mostarError("Apellido mal puesto");
        return;
    }else if(!validarMail(mail.value)){
        mostarError("Mail mal puesto")
        return;
    }else if(validarTel(telefono.value)){
        mostarError("Telefono mal puesto")
        return;
    } else if(!mensaje.value){
        mostarError("Debe escribir un mensaje");
    } else {
        error.innerHTML = "";
        enviado.innerHTML = nombre.value+" "+apellido.value+" tu mensaje se ha enviado exitosamente: '"+mensaje.value+".'";
        limpiar();
    }



    function mostarError(e1) {
        error.innerHTML = e1;
        enviado.innerHTML = "";
    }

    function limpiar() {
        nombre.value = "";
        apellido.value = "";
        mail.value = "";
        telefono.value = "";
        mensaje.value = "";
    }

    function validarMail(correo){
        let pat_mail = /^\w+@\w+(\.\w{2,4})+$/;
        return pat_mail.test(correo);
    }

    function contieneNum(palabra){
        for(let i=0;i<palabra.length;i++){
            if(!isNaN(palabra.substring(i,i+1))){
                return true;
            }
        }
        return false;
    }

    function validarTel(tel){
        if((tel.length>9&&tel.length<14)||tel==""){
            for(let i=0;i<tel.length;i++){
                if(!isNaN(tel.substring(i,i+1))){
                    return false;
                }
            }
            if(tel==""){
                return false;
            }
        } else {
            return true;
        }
    }
});