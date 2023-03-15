M.AutoInit();

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      direction: 'up',
      hoverEnabled: false
    });
  });

  const btn = document.getElementById("reporte");
  const ventana = document.getElementById("report1");
  
  btn.onclick = () => {
    ventana.hidden = !ventana.hidden;
  }

  /*if (ventana = !ventana.hidden){
    document.getElementById("prueba").innerHTML = "saludo";
  } else{
    document.getElementById("prueba").innerHTML = "Error";
  }
  
  
