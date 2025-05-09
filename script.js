var box=document.getElementById("box");
var d=new Date();
var start=d.getTime();
function move(){
    var top;
    var left;
    var wh;
    top=Math.random()*300;
    left=Math.random()*300;
    wh=((Math.random()*400)+100);
    document.getElementById("box").style.top=top+"px";
    document.getElementById("box").style.left=left+"px";
    document.getElementById("box").style.width=wh+"px";
    document.getElementById("box").style.height=wh+"px";
    document.getElementById("box").style.display="block";
    start=d.getTime();
}

  box.onclick=function(){
    box.style.display="none";
    var endtime=new Date().getTime();
    var rectiontime=(endtime-start)/1000;
    alert("reaction time : "+rectiontime+"seconds");
    move();
}