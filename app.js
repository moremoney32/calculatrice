
let date = new Date();
let heure =date.getHours();
let minute=date.getMinutes();
let seconde=date.getSeconds;
let decompte = function() {
if(seconde<59)
seconde++;
else
{minute++;seconde=00;}
if(minute>59)
{heure++;minute=0;}
document.getElementById("temps").textContent=heure+":"+minute+":"+seconde;
setTimeout(decompte, 1000);
}
setTimeout(decompte, 1000);
let result =document.querySelector(".ecran");
let calculate=function(Number){
    return result.textContent+=Number;
}
let Result=function(){
    try{
     result.textContent=eval(result.textContent);
    }
    catch{
        alert("erreur")
    }
}
function remove(){
    result.textContent="";
}
function toerase(){
    result.textContent=result.textContent.slice(0,-1);
}
function pi(){
    result.textContent+=22/7;
}

let p =document.querySelector(".element");
p.onclick=Mathsqrt;
function Mathsqrt(x){
    result.textContent=Math.sqrt(81)

}


