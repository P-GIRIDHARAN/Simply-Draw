window.addEventListener("load", () => {
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");
  let painting = false;
  let erase = false;
  let brushColor = "#000000";
  let brushSize = 10;
  const colorDisplay = document.getElementById("colorDisplay");

  // Resize canvas
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  function startPos(e) {
    painting = true;
    draw(e);
  }

  function endPos() {
    painting = false;
    ctx.beginPath();
  }

  function draw(e) {
    if (!painting) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.lineWidth = brushSize;
    ctx.lineCap = "round";
    ctx.strokeStyle = erase ? "#FFFFFF" : brushColor;
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  }

  canvas.addEventListener("mousedown", startPos);
  canvas.addEventListener("mouseup", endPos);
  canvas.addEventListener("mousemove", draw);

  document.getElementById("pencil").onclick = () => (erase = false);
  document.getElementById("eraser").onclick = () => (erase = true);
  document.getElementById("colorPicker").oninput = (e) => {
    brushColor = e.target.value;
    colorDisplay.style.backgroundColor = brushColor;
  };
  document.getElementById("brushSize").oninput = (e) =>
    (brushSize = e.target.value);

  // Initialize color display
  colorDisplay.style.width = "30px";
  colorDisplay.style.height = "30px";
  colorDisplay.style.border = "2px solid black";
  colorDisplay.style.display = "inline-block";
  colorDisplay.style.backgroundColor = brushColor;

  window.addEventListener("resize", () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
  });
});
