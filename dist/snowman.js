// Size of a single snowflake
const flakeSize = 8;

window.addEventListener("DOMContentLoaded", function() {
   let canvas = document.querySelector("canvas");

   drawGround(canvas);
   drawSnowText(canvas);
   drawSnowman(canvas);
   drawSnowflakes(canvas);
});


function drawGround(canvas) {
   let context = canvas.getContext("2d");
   context.fillStyle = "red";
   context.fillRect(0, 0, 50, 50);
   // Background
   context.fillStyle = "#bbb";
   context.fillRect(0, 0, canvas.width, canvas.height);

   // Ground
   context.fillStyle = "brown";
   context.fillRect(0, canvas.height - 80, canvas.width, canvas.height);
}

function drawSnowflakes(canvas) {
   for (let c = 0; c < 100; c++) {
      let x = Math.floor(Math.random() * canvas.width);
      let y = Math.floor(Math.random() * canvas.height);
      drawSingleFlake(canvas, x, y);
   }
}

function drawSnowText(canvas) {
   const ctx = canvas.getContext("2d");
   ctx.font = "80px Verdana";
   ctx.textAlign = "center";
   ctx.textBaseline = "top";
   ctx.fillStyle = "blue";
   ctx.fillText("SNOW", canvas.width / 2, 10);
   console.log("three runnin")
}

function drawSnowman(canvas) {
   const ctx = canvas.getContext("2d");
   
   // Bottom circle
   ctx.beginPath();
   ctx.arc(150, 200, 50, 0, Math.PI * 2);
   ctx.fillStyle = "white";
   ctx.fill();
   
   // Middle circle
   ctx.beginPath();
   ctx.arc(150, 120, 40, 0, Math.PI * 2);
   ctx.fill();
   
   // Top circle
   ctx.beginPath();
   ctx.arc(150, 60, 25, 0, Math.PI * 2);
   ctx.fill();

   // Carrot nose
   ctx.beginPath();
   ctx.moveTo(150, 55);      
   ctx.lineTo(190, 55);        
   ctx.lineTo(150, 65);        
   ctx.closePath();
   ctx.fillStyle = "#ed9121 ";
   ctx.fill();

   //eyes
   ctx.beginPath();
   ctx.arc(140, 50, 3, 0, Math.PI * 2);
   ctx.fillStyle = "black";
   ctx.fill();
   
   ctx.beginPath();
   ctx.arc(160, 50, 3, 0, Math.PI * 2);
   ctx.fill();

   //buttons
   ctx.beginPath();
   ctx.arc(150, 100, 3, 0, Math.PI * 2);
   ctx.fill();

   ctx.beginPath();
   ctx.arc(150, 120, 3, 0, Math.PI * 2);
   ctx.fill();

   ctx.beginPath();
   ctx.arc(150, 140, 3, 0, Math.PI * 2);
   ctx.fill();

   //pipe
   ctx.beginPath();
   ctx.moveTo(140, 68);
   ctx.lineTo(120, 68);
   ctx.strokeStyle = "black";
   ctx.lineWidth = 3;
   ctx.stroke();
   ctx.fillRect(115, 60, 8, 10);

   //hat
   ctx.beginPath();
   ctx.moveTo(170, 38);
   ctx.lineTo(130, 38);
   ctx.stroke();
   ctx.fillRect(135, 38, 30, -40);

   //arms
   ctx.beginPath();
   ctx.moveTo(120, 100);
   ctx.lineTo(60, 120);
   ctx.stroke();

   ctx.beginPath();
   ctx.moveTo(180, 100);
   ctx.lineTo(240, 120);
   ctx.stroke();
}

function drawSingleFlake(canvas, x, y) {
   const ctx = canvas.getContext("2d");
   const flakeSize = 10;
   
   ctx.beginPath();
   ctx.moveTo(x, y);
   ctx.lineTo(x + flakeSize / 2, y + flakeSize / 2);
   ctx.lineTo(x, y + flakeSize);
   ctx.lineTo(x - flakeSize / 2, y + flakeSize / 2);
   ctx.closePath();
   ctx.fillStyle = "#ffffff";
   ctx.fill();
}