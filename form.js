let formulario = document.getElementById("formContacto");
formulario.addEventListener("submit",function(evento){
    evento.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let nombre2 = document.getElementById("nombre");
    let apellido = document.getElementById("apellido").value;
    let apellido2 = document.getElementById("apellido");
    let mail = document.getElementById("mail").value;
    let mail2 = document.getElementById("mail");
    let telefono = document.getElementById("telefono").value;
    let telefono2 = document.getElementById("telefono");
    let mensaje = document.getElementById("mensaje").value;
    let mensaje2 = document.getElementById("mensaje");
    let error2 = document.getElementById("error");
    let enviado2 = document.getElementById("enviado");

    if((!nombre || contieneNum(nombre))){
        error2.innerHTML = "Nombre mal puesto.";
        enviado2.innerHTML = "";
        return;
    }else if(!apellido || contieneNum(apellido)){
        error2.innerHTML = "Apellido mal puesto.";
        enviado2.innerHTML = "";
        return;
    }else if(!validarMail(mail)){
        error2.innerHTML = "Mail mal puesto.";
        enviado2.innerHTML = "";
        return;
    }else if(validarTel(telefono)){
        error2.innerHTML = "Telefono mal puesto.";
        enviado2.innerHTML = "";
        return;
    } else {
        error2.innerHTML = "";
        enviado2.innerHTML = nombre+" "+apellido+" tu mensaje se ha enviado exitosamente: '"+mensaje+".'";
        nombre2.value = "";
        apellido2.value = "";
        mail2.value = "";
        telefono2.value = "";
        mensaje2.value = "";
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