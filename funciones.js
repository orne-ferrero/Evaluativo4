function calcular(){

  var opcion1=document.getElementById("38").checked;
  var opcion2=document.getElementById("39").checked;
  var opcion3=document.getElementById("40").checked;
  var envio=document.getElementById("envio").checked;
  var local=document.getElementById("local").checked;
  model=document.getElementById("modelo").value;
  var preciomodelo;
  var preciotalle;
  var precioenvio;
  var preciototal;

 if (model="1"){
  preciomodelo =1000;
 }
 else if (model="2"){
  preciomodelo=2000;
 }

 if (opcion1){
  preciotalle=100;
 }else if (opcion2){
  preciotalle=200;
 }
 if (opcion3){
  preciotalle=300;
 }

 if (envio){
  precioenvio=500;
 }else  if (local){
  precioenvio=0;
 }
 preciototal= preciomodelo+precioenvio+preciotalle;
 
document.getElementById("resultado").innerHTML="El Precio total es  : " +preciototal;
}

function borrar (){
  document.getElementById("38").value="";
  document.getElementById("39").value="";
  document.getElementById("40").value="";
  document.getElementById("envio").value="";
  document.getElementById("local").value="";
  document.getElementById("modelo").value="";
  document.getElementById("resultado").innerHTML="";
}
