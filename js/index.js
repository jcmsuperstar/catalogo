M.AutoInit();

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});


$(document).ready(function () {
  // Si el modo oscuro ya está activado, establece el interruptor en la posición correcta
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    $('#dark-mode-toggle').prop('checked', true);
    $('body').addClass('dark-mode');
  }

  // Escuchar el evento 'change' del interruptor de modo oscuro
  $('#dark-mode-toggle').change(function () {
    if ($(this).is(':checked')) {
      $('body').addClass('dark-mode');
    } else {
      $('body').removeClass('dark-mode');
    }
  });
});

const btn = document.getElementById("miBoton");
const ventana = document.getElementById("report1");


/*btn.onclick = () => {
  ventana.hidden = !ventana.hidden;
}*/

function solicitarContrasena() {
  const contrasena = prompt("Ingrese la contraseña:");

  if (contrasena === "A1w2e3") {

  } else {
    alert("¡Contraseña incorrecta!");
  }

  if (contrasena === "A1w2e3") {
    ventana.hidden = !ventana.hidden;
  } else { "" }
}

/*buscador*/
document.addEventListener('DOMContentLoaded', function () {


  const searchInput = document.getElementById('search');


  const fileList = document.getElementById('fileList');


  const files = Array.from(fileList.getElementsByTagName('div'));

  searchInput.




    addEventListener('input', function () {


      const searchTerm = searchInput.value.toLowerCase();

      files.forEach(function (file) {
        const fileName = file.textContent.toLowerCase();


        if (fileName.includes(searchTerm)) {
          file.style.display = 'block';
        } else {
          file.style.display = 'none';
        }
      });
    });
});


/*efecto nieve en card de temporada navideña*/
var nieve_cantidad = 100;
var nieve_colorr = ["#aaaacc", "#ddddFF", "#ccccDD"];
var nieve_tipo = ["Arial Black", "Arial Narrow", "Times", "Comic Sans MS"];
var nieve_letra = "*";
var nieve_velocidad = 2.0;
var nieve_cantidadsize = 30;
var nieve_chico = 10;

function aleatorio(range) {
  return Math.floor(range * Math.random());
}

function crearCopo() {
  var copoNieve = document.createElement("span");
  copoNieve.className = "copo-nieve";
  copoNieve.innerHTML = nieve_letra;
  copoNieve.style.fontSize = aleatorio(nieve_cantidadsize - nieve_chico) + nieve_chico + "px";
  copoNieve.style.color = nieve_colorr[aleatorio(nieve_colorr.length)];
  copoNieve.style.left = aleatorio(window.innerWidth) + "px";
  copoNieve.style.top = aleatorio(window.innerHeight) + "px";
  document.getElementById("modo-nieve").appendChild(copoNieve);
}

function initnieve() {
  for (var i = 0; i < nieve_cantidad; i++) {
    crearCopo();
  }
}

function movenieve() {
  var coposNieve = document.querySelectorAll(".copo-nieve");
  coposNieve.forEach(function (copo) {
    var posy = parseFloat(copo.style.top);
    posy += nieve_velocidad;

    if (posy >= window.innerHeight) {
      posy = -parseFloat(copo.style.fontSize);
      copo.style.left = aleatorio(window.innerWidth) + "px";
    }

    copo.style.top = posy + "px";
  });

  requestAnimationFrame(movenieve);
}

window.addEventListener("DOMContentLoaded", initnieve);
window.addEventListener("resize", function () {
  var coposNieve = document.querySelectorAll(".copo-nieve");
  coposNieve.forEach(function (copo) {
    copo.style.left = aleatorio(window.innerWidth) + "px";
  });
});

window.addEventListener("load", movenieve);



document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.card');

  cards.forEach(function (card) {
    card.addEventListener('click', function () {
      // Cierra todos los cards abiertos
      cards.forEach(function (c) {
        if (c !== card) {
          const reveal = c.querySelector('.card-reveal');
          if (reveal) {
            reveal.style.transform = 'translateY(0)';
          }
        }
      });

      // Abre o cierra el card actual
      const reveal = card.querySelector('.card-reveal');
      if (reveal) {
        if (reveal.style.transform === 'translateY(0px)') {
          reveal.style.transform = 'translateY(-100%)';
        } else {
          reveal.style.transform = 'translateY(0)';
        }
      }
    });
  });
});