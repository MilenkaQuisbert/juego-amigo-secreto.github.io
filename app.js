/* Fucionalidades:
Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".

Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.

Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página. */

let listaAmigos=[];

 /* Funcion para agregar amigos */

 function agregarAmigo(){
    nombreAmigo=document.getElementById('amigo').value;
    if(nombreAmigo==''){
        alert('Por favor inserte un nombre valido');
    }else{
        listaAmigos.push(nombreAmigo);
        console.log(listaAmigos);
        listaHTML=document.getElementById('listaAmigos');
        listaHTML.innerHTML+=`<li>${listaAmigos[listaAmigos.length-1]}</li>`;
    }
 limpiarCajaTexto();

 }
 /* Funcion para sortear amigo */
  function sortearAmigo(){
    let numeroAleatorio=Math.floor(Math.random()*listaAmigos.length-1)+1;
    console.log(numeroAleatorio);
    resultadoHTML=document.getElementById('resultado');
    resultadoHTML.innerHTML=`El amigo secreto es: ${listaAmigos[numeroAleatorio]}`;
  }


  /* Funcion limpiar */
  function limpiarCajaTexto(){
    document.querySelector('#amigo').value = '';
  }