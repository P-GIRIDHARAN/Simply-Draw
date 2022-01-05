window.addEventListener("load", () => {
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");

  //Resizing the canvas
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  let painting = false;

  function startpos(e) {
    painting = true;
    draw(e);
  }
  function finishpos() {
    painting = false;
    ctx.beginPath();
  }
  function draw(e) {
    if (!painting) return;
    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
  }
  canvas.addEventListener("mousedown", startpos);
  canvas.addEventListener("mouseup", finishpos);
  canvas.addEventListener("mousemove", draw);
});

window.addEventListener("resize", () => {
  //Resizing the canvas
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
});
