//Proyecto para dibujar con flechas.
//Variables
  document.addEventListener("keydown",dibujarTeclado);
  var canv = document.getElementById("lienzo");
  var d = canv.getContext("2d");
  var x = 150;
  var y = 150;
  var movimiento = 1;
  var teclas = {
    LEFT:37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    };

    console.log(teclas);
    var co = "blue"
  function dibujarLinea(xi,yi,xf,yf,color){
    d.beginPath();
      d.strokeStyle = color;
      d.lineWidth = 3;
      d.moveTo(xi,yi);
      d.lineTo(xf,yf);
      d.stroke();
    d.closePath();
  }

  dibujarLinea(x-1,y-1,x+1,y+1,co);

function dibujarTeclado(evento){

  console.log(valor, nevalor);

console.log(evento.keyCode);
switch(evento.keyCode){
  case teclas.DOWN:
  dibujarLinea(x,y,x,y + movimiento,co);
  y = y + movimiento;
  break;
  case teclas.UP:
  dibujarLinea(x,y,x,y-movimiento,co);
  y = y - movimiento;
  break;
  case teclas.LEFT:
  dibujarLinea(x,y,x - movimiento,y,co);
  x = x - movimiento;
  break;
  case teclas.RIGHT:
  dibujarLinea(x,y,x + movimiento,y,co);
  x = x + movimiento;
  break;
  default:
  console.log("otra tecla");
  break;
}

}
