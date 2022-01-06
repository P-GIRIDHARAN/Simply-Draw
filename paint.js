window.addEventListener("load", () => {
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");
  const ctx1 = canvas.getContext("2d");
  var erase = 0;
  let color = true;
  //Resizing the canvas
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  let painting = false;

  function startpos(e) {
    painting = true;
    draw(e);
  }
  function finishpos(e) {
    painting = false;
    ctx.beginPath();
    return;
  }
  function draw(e) {
    if (!painting) return;
    if (erase == 0) {
      ctx.lineWidth = 10;
      ctx.lineCap = "round";
      ctx.strokeStyle = "black";
      ctx.lineTo(e.clientX - 5, e.clientY - 25);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(e.clientX - 5, e.clientY - 25);
    } else {
      ctx.lineWidth = 10;
      ctx.lineCap = "round";
      ctx.strokeStyle = "white";
      ctx.lineTo(e.clientX - 5, e.clientY - 25);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(e.clientX - 5, e.clientY - 25);
    }
  }
  document.getElementById("pencil").onclick = function () {
    canvas.addEventListener("mousedown", startpos);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", finishpos);
    erase = 0;
  };
  document.getElementById("eraser").onclick = function () {
    canvas.addEventListener("mousedown", startpos);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", finishpos);
    erase = 1;
  };
});

window.addEventListener("resize", () => {
  //Resizing the canvas
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
});
