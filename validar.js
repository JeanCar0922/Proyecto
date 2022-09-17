function validar_login(){
    let usuario = document.formE.usuario.value;
    let pass = document.formE.pass.value;

    if(usuario === "acadrasc0" && pass === "12345") {
       alert("Hola");
       location.href = "principal.html";
       // alert("Bienvenido " + usuario);
    }

}