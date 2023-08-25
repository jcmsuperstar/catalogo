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

  $(document).ready(function() {
    // Si el modo oscuro ya está activado, establece el interruptor en la posición correcta
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      $('#dark-mode-toggle').prop('checked', true);
      $('body').addClass('dark-mode');
    }
  
    // Escuchar el evento 'change' del interruptor de modo oscuro
    $('#dark-mode-toggle').change(function() {
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
    } else { ""}
    }

/*buscador*/
    document.addEventListener('DOMContentLoaded', function() {
  
 
      const searchInput = document.getElementById('search');
        
       
      const fileList = document.getElementById('fileList');
        
       
      const files = Array.from(fileList.getElementsByTagName('div'));
      
        searchInput.
      
       
      
      
      addEventListener('input', function() {
          
         
      const searchTerm = searchInput.value.toLowerCase();
          
          files.forEach(function(file) {
            const fileName = file.textContent.toLowerCase();
            
           
      if (fileName.includes(searchTerm)) {
              file.style.display = 'block';
            } else {
              file.style.display = 'none';
            }
          });
        });
      });