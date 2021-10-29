(function() {

    var formulario = document.getElementsByName("formulario")[0],
    elementos = formulario.elements,
    boton = document.getElementById("enviar");

    var validarNombre = function(e){
        if(formulario.nombre.value == 0){
            alert("Completa el campo nombre");
            e.preventDefault();

        }

    };

    var validarRadio = function(e){
        if(formulario.cuota[0].checked == true || formulario.cuota[1].checked ==  true || formulario.cuota[2].checked ==  true) {

        } else {
            alert("Selecciona un monto");
            e.preventDefault();
        }
       
    };

    var validarDni = function(e){
        if(formulario.dni.value == 0){
            alert("Complete el campo D.N.I");
            e.preventDefault();
        }
    };


    var validarApellido = function(e){
        if(formulario.apellido.value == 0){
            alert("Complete el campo apellido");
            e.preventDefault();
        }
    };

    var validarCorreo = function(e){
        if(formulario.correo.value == 0){
            alert("Complete el campo Correo electronico");
            e.preventDefault();
        }
    };
        

   

    var validar = function(e){
        validarNombre(e);
        validarRadio(e);
        validarApellido(e);
        validarDni(e);
        validarCorreo(e);
    };

    formulario.addEventListener("submit", validar);



}())