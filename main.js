document.getElementById("icon-menu").addEventListener("click", mostrar_menu);

function mostrar_menu(){

    document.getElementById("move-content").classList.toggle('move-container-all');
    document.getElementById("show-menu").classList.toggle('show-lateral');
}

/*formulario*/

function validar(event) {
	event.preventDefault();
	  var nombre = document.getElementById("name").value;
	  var apellido = document.getElementById("lastName").value;
    var correo = document.getElementById("mail").value;
    var mensaje = document.getElementById("message").value;
	
    if (nombre == "" || apellido == "" || correo == "" || mensaje == "") {
      alert("Por favor complete todos los campos del formulario.");
      return false;
    }

    if (!/\S+@\S+\.\S+/.test(correo)) {
      alert("Por favor ingrese un correo electrónico válido.");
      return false;
    }

    document.contact.submit();
    window.location.href = "enviado.html";
}

const form = document.querySelector("form[name='contact']");
form.addEventListener("submit", validar);

