window.onload = function () {
  let canvas = document.getElementById("tutorial");
  let ctx = canvas.getContext("2d");
  ctx.moveTo(0,0);
  ctx.lineTo(200,100);
  ctx.stroke();

  let canvas2 = document.getElementById("clock");
  let ctx2 = canvas2.getContext("2d");
  ctx2.beginPath();
  ctx2.arc(95,50,40,0,2*Math.PI);
  ctx2.stroke();

}
