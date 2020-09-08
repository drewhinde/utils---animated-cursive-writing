window.addEventListener("load", function () {
    var ctx = document.querySelector("canvas").getContext("2d");
   
    var brushWidth = 100;
    var brushOffset = brushWidth;
    var speed = 20;
    var txt = "Opportunities Multiply When Seized";
    var x = 30,
        i = 0;

    // ctx.font = "0.5cm cursive";
    ctx.font = "30px Arial";
    // ctx.lineWidth = 1;
    // ctx.fillStyle = "#000";


    (function draw() {

        ctx.clearRect(x, 0, 800, 150);

        ctx.setLineDash([brushWidth - brushOffset, brushOffset - speed]);
        brushOffset -= speed;
        ctx.strokeText(txt[i], x, 70);

        if (brushOffset > 0) {
            
            requestAnimationFrame(draw);
        } else {
            brushOffset = brushWidth;
            x += ctx.measureText(txt[i++]).width + ctx.lineWidth * Math.random();

            if (i < txt.length) {
                requestAnimationFrame(draw);
            }
        }
    })()
});