var btnlogin = document.getElementById('btnlogin');

function validarFormulario(evento) {
  evento.preventDefault();
  var usuario = document.getElementById('usuario').value;
  var pass = document.getElementById('pass').value;
  
  if (usuario == 'admin' && pass == '1234') {
    window.location.href = "index.html";
  } else {
    alert('Usuario y contraseña incorrectos');
  }
}

btnlogin.addEventListener('click', validarFormulario);
