M.AutoInit();

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
});

/*document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      direction: 'up',
      hoverEnabled: false
    });
  });*/

  const btn = document.getElementById("miBoton");
  const ventana = document.getElementById("report1");

  
  /*btn.onclick = () => {
    ventana.hidden = !ventana.hidden;
  }*/

  /*function solicitarContrasena() {
    const contrasena = prompt("Ingrese la contraseña:");
  
    if (contrasena === "A1w2e3r4t5.0") {
      alert("¡Contraseña correcta!");
    } else {
      alert("¡Contraseña incorrecta!");
    }
     
    if (contrasena === "A1w2e3r4t5.0") {
      ventana.hidden = !ventana.hidden;
    } else {
      ""
    }
    }*/

    function solicitarContrasena() {
      document.getElementById("formContrasena").style.display = "block";
    }
    
    function verificarContrasena() {
      var contrasena = document.getElementById("contrasena").value;
    
      if (contrasena === "Q1w2.0") {
        alert("¡Contraseña correcta!");
        document.getElementById("formContrasena").style.display = "none";
        ventana.hidden = !ventana.hidden;
      } else {
        alert("¡Contraseña incorrecta!");
      }
    }