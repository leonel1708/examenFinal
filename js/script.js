//++++++++++++ PAGINA LOCALES ++++++++++++++++++++++++++++

function mapa(){}



//$elementoLista =("<ul></ul>");

//Recorre e imprime los datos del objeto
function recorrerObjeto(objeto){
	var listHTML = "<ul id='climg'>";
	for (var dato in objeto){
		
		if (dato==="imagen"){
			listHTML += "<li>" + "<a href='"+objeto[dato]+"'><img src=" + objeto[dato] +" heigth='25%' width='25%''>" + "</li></a>";	
		}else{
			listHTML += "<li>" + dato.toUpperCase() + ": "+ objeto[dato] + "</li>";	
		}
	}
	listHTML+="</ul><hr>";
	//mapa()
	return(listHTML);
	//print(listHTML);
}

//Recorre el arreglo
function printList(list){
	var listHTML = "";
	console.log(list.length);	
	for (var i = 0; i < list.length; i++) {
		listHTML+=recorrerObjeto(list[i]);
	}
	print(listHTML);
}

function print(HTML){
	var outputDiv=document.getElementById("section");
	//alert(HTML);
	outputDiv.innerHTML=HTML;
	//document.write(HTML);
}

//Matriz Locales
var matrizLocales=[
{
	nombre:"Cine Santa Elena",
	ciudad:"Santa Elena",
	numeroSalas:5,
	Direccion: "Calle Guayaquil y 9 de Octubre"
},

{
	nombre:"Cine La Libertad",
	ciudad:"La Libertad",
	numeroSalas:6,
	direccion: "Av. Eleodoro Solorzano cerca del Edificio del GAD Municipal"
},

{
	nombre:"Cine Salinas",
	ciudad:"Salinas",
	numeroSalas:10,
	direccion: "Malecon de Salinas edificio Riviera del Mar"
},

]

function locales(){
	printList(matrizLocales);	
}
//


//Matriz Locales
var matrizPeliculas=[
{
	nombre:"Civil War",
	actor:"Robert Downey",
	Director:"Hermanos Russo",
	Genero:"Accion",
	Sinopsis: "Capitán América: Civil War' sigue a Steve Rogers liderando al nuevo equipo de Vengadores en sus continúos esfuerzos para mantener a salvo a la humanidad. Pero después de los daños colaterales de otro incidente en el que el grupo de superhéroes está involucrado, la presión política instala un sistema de responsabilidad encabezado por el Gobierno para supervisar y dirigir al equipo.",
	imagen: "img/civilwar.jpg"
},

{
	nombre:"Avemgers: La Era de Ultron",
	actor:"Robert Downey",
	Director:"Joss Whedon",
	Genero:"Accion",
	Sinopsis: "En un país de Europa del Este llamado Sokovia, Los Vengadores conformados por Tony Stark, Steve Rogers, Thor, Bruce Banner, Natasha Romanoff y Clint Barton atacan una fortaleza de HYDRA, con la misión de recuperar el Cetro de Loki de manos del Barón Wolfgang Von Strucker, quien ha estado experimentando con humanos usando su poder. Pese a los esfuerzos de Strucker por ocultar a sus dos únicos éxitos (Lo gemelos Pietro Maximoff, que posee supervelocidad, y Wanda Maximoff, que puede manipular mentes y proyectar energía) – ambos terminan enfrentándose a los héroes y escapan, mientras Strucker es capturado.",
	imagen: "img/ultron.jpg"
},

{
	nombre:"Civil War",
	actor:"Robert Downey",
	Director:"Hermanos Russo",
	Genero:"Accion",
	Sinopsis: "Capitán América: Civil War' sigue a Steve Rogers liderando al nuevo equipo de Vengadores en sus continúos esfuerzos para mantener a salvo a la humanidad. Pero después de los daños colaterales de otro incidente en el que el grupo de superhéroes está involucrado, la presión política instala un sistema de responsabilidad encabezado por el Gobierno para supervisar y dirigir al equipo.",
	imagen: "img/ultron.jpg"
},

{
	nombre:"Civil War",
	actor:"Robert Downey",
	Director:"Hermanos Russo",
	Genero:"Accion",
	Sinopsis: "Capitán América: Civil War' sigue a Steve Rogers liderando al nuevo equipo de Vengadores en sus continúos esfuerzos para mantener a salvo a la humanidad. Pero después de los daños colaterales de otro incidente en el que el grupo de superhéroes está involucrado, la presión política instala un sistema de responsabilidad encabezado por el Gobierno para supervisar y dirigir al equipo.",
	imagen: "img/ultron.jpg"
},

{
	nombre:"Civil War",
	actor:"Robert Downey",
	Director:"Hermanos Russo",
	Genero:"Accion",
	Sinopsis: "Capitán América: Civil War' sigue a Steve Rogers liderando al nuevo equipo de Vengadores en sus continúos esfuerzos para mantener a salvo a la humanidad. Pero después de los daños colaterales de otro incidente en el que el grupo de superhéroes está involucrado, la presión política instala un sistema de responsabilidad encabezado por el Gobierno para supervisar y dirigir al equipo.",
	imagen: "img/ultron.jpg"
},

]

function peliculas(){
	printList(matrizPeliculas);	
}




























//Usario da clic en un link q rodea a la imagen.
$("#section ul li a").click(function(event)
{
	event.preventDefault();
	var href = $(this).attr("href");
	console.log(href);

	$image.attr("src",href);

	var texto = $(this).children("img").attr("alt");
	$caption.text(texto);

	$overlay.show();
});


//Crear variables
var $overlay = $("<div id='overlay'></div>");
var $image = $("<img>");
var $caption = $("<p></p>");

//Insertamos una imagen
$overlay.append($image);

//Insertamos un texto
$overlay.append($caption);

//agregar overlay al body
$("body").append($overlay);


$overlay.click(function(){
	$overlay.hide();
});


/*************** PARA MOVILES ***********/
//CREAMOS MENU LATERAL Y AGREGAMOS AL MENU NAV

var $select = $("<select></select>");
$("#menu").append($select);

//recorrer el menu
$("#menu a").each(function(){
	var $anchor = $(this);
	//crea una opcion para el select por cada elemento del menu
	var $option = $("<option></option>");
	//obtener cada valor de la opcion del atributo href
	$option.val($anchor.attr("href"));
	//obtener el texto de cada opcion
	$option.text($anchor.text());
	//agregar la opcion al select
	$select.append($option);

	//obtener si el link es la pagina actual
	if($(this).hasClass("selected"))
	{
		$option.prop("selected",true);
	}
});

//boton para seleccionar
/*var $button = $("<button>GO</button>");
$("#menu").append($button);

$button.click(function(){
	//toma el valor de la opcion seleccionada
	window.location = $select.val();
});*/

$select.change(function(){
	window.location = $select.val();
})









//FORMULARIO

//Esconder ayudas
var $password = $("#password");
var $confirmPassword = $("#confirm_password");

$("form span").hide();

function esPassValido(){
	return ($password.val().length > 8);
}

function coincidePasswords(){
	return ($password.val() === $confirmPassword.val());
}


function eventoPassword(){
	//validar si la cadena es valida
	if (esPassValido()){
		//esconder ayuda si clave es valida
		$password.next().hide();
	}else{
		//caso contrario mostrar ayuda
		$password.next().show();
	}
}


function confirmarPassword(){
	if(coincidePasswords()){
		$confirmPassword.next().hide();
	}else{
		$confirmPassword.next().show();
	}
}

function validacionCompleta(){
	return esPassValido() && coincidePasswords && usuarioIngresado();
}

function puedeEnviar(){
	$("#submit").prop("disabled",!validacionCompleta());
}

//cuando usuario ingresa clave
$password.focus(eventoPassword).keyup(eventoPassword);

$confirmPassword.focus(confirmarPassword).keyup(confirmarPassword);

puedeEnviar();