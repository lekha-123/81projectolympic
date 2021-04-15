 canvas =document.getElementById("canvas1");
 ctx=canvas.getContext("2d");

 ctx.beginPath();
    ctx.strokeStyle="blue";
    ctx.lineWidth=2;
    ctx.rect(120,143,300,180);
    ctx.stroke();

ctx.beginPath();
    ctx.strokeStyle="blue";
    ctx.lineWidth=2;
    ctx.arc(200,200,40,0,2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle="black";
    ctx.lineWidth=2;
    ctx.arc(260,200,40,0,2*Math.PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.strokeStyle="red";
    ctx.lineWidth=2;
    ctx.arc(320,200,40,0,2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle="yellow";
    ctx.lineWidth=2;
    ctx.arc(230,250,40,0,2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle="green";
    ctx.lineWidth=2;
    ctx.arc(290,250,40,0,2*Math.PI);
    ctx.stroke();

