window.addEventListener('load', (event) => {
    change();
});
function f(){
  let c=document.getElementById('my-clock');
  c.style.backgroundColor='lightgreen';
  setTimeout(f1,2000);
}
function f1(){
  let c=document.getElementById('my-clock');
  c.style.backgroundColor='white';
}
function sound(){
  var audio = new Audio('crank-2.mp3');
  audio.play();
}
function change(){
    let Clock=document.getElementById('my-clock');
    let date = new Date;
    let time="";
    if (date.getHours()<10) time+='0';
    time=date.getHours();
    time+=":";
    if (date.getMinutes()<10) time+='0';
    time+=date.getMinutes();
    time+=":";
    if (date.getSeconds()<10) time+='0';
    time+=date.getSeconds();
    Clock.innerText=time;
    if (date.getSeconds()==0){
      f();
    }
    if (date.getSeconds()==0){
      sound();
    }
    setTimeout(change,1000);
}
