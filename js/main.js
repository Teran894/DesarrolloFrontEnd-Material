// Impresion en consola
console.log('Hola mundo!');

// Funcion tradional
function mostrarMensajeInicial() {

  if (confirm('Este sitio esta en desarrollo, disculpe las molestias')) {
    alert('Gracias por visitarnos!');
  } else {
    alert('...');
  }

}

// Evento de boton ir a arriba
document.addEventListener("DOMContentLoaded", () => {

  const scrollToBottomButtom = document.getElementById('btn-ir-arriba');

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      scrollToBottomButtom.style.display = 'block';
    } else {
      scrollToBottomButtom.style.display = 'none';
    }
  });

  scrollToBottomButtom.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      // behavior: 'smooth'
    });
  });

});


// Recuperar datos del formulario
const contactoForm = document.getElementById('contacto-form');

contactoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("mensaje").value;

  alert('Gracias por contactarnos - ' + nombre + ' | ' + email + ' | ' + mensaje);

  contactoForm.reset();
});

//BOTONES de eventos
document.getElementById("btn-modelo-1").addEventListener("click", function() {
  window.location.href = "https://www.nintendo.com/nintendo-live/";
});

document.getElementById("btn-modelo-2").addEventListener("click", function() {
  window.location.href = "https://west.paxsite.com/";
});

document.getElementById("btn-modelo-3").addEventListener("click", function() {
  window.location.href = "https://www.indiedevday.es/";
});