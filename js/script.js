var btnRegistro = document.getElementById('btnRegistro');

function validarRegistro(evento) {
  evento.preventDefault();
  window.location.href = "login.html";
  }


btnRegistro.addEventListener('click', validarRegistro);
