var btnRegistro = document.getElementById('btnRegistro');

function validarRegistro(evento) {
  evento.preventDefault();
  window.location.href = "login.html";
  }


btnRegistro.addEventListener('click', validarRegistro);



var btnModal = document.getElementById('btnModal');
btnModal.addEventListener('click', openModal);


function openModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
  setTimeout(closeModal, 65000);
  
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

