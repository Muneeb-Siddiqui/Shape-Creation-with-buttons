var c,s,t,r;
c=document.getElementById("circle")
s=document.getElementById("square")
t=document.getElementById("triangle")
r=document.getElementById("rectangle")

var cB,sB,tB,rB;
cB=document.getElementById("circleBtn")
sB=document.getElementById("squareBtn")
tB=document.getElementById("triangleBtn")
rB=document.getElementById("rectangleBtn")

cB.addEventListener("click",function(){

    c.style.display = "block"
    s.style.display = "none"
    t.style.display = "none"
    r.style.display = "none"

    var ctx = c.getContext('2d'); 
    var X = c.width / 2;
    var Y = c.height / 2;
    var R = 45;
    ctx.beginPath();
    ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
    ctx.lineWidth = 90;
    ctx.strokeStyle = '#FF0000';
    ctx.stroke();
})
sB.addEventListener("click",function(){

    c.style.display = "none"
    s.style.display = "block"
    t.style.display = "none"
    r.style.display = "none"

    var context = s.getContext('2d');
    context.beginPath();
    context.fillStyle="yellow"
    context.fillRect(25,25,150,150); 
    context.fill();
})
tB.addEventListener("click",function(){

    c.style.display = "none"
    s.style.display = "none"
    t.style.display = "block"
    r.style.display = "none"

    var con = t.getContext("2d")
    con.lineTo(100,25)
    con.lineTo(175,175)
    con.lineTo(25,175)
    con.fill()
})
rB.addEventListener("click",function(){

    c.style.display = "none"
    s.style.display = "none"
    t.style.display = "none"
    r.style.display = "block"

    const ctx = r.getContext("2d");
    ctx.fillStyle = "green";
    ctx.fillRect(20, 10, 150, 100);
    ctx.fill()
})
