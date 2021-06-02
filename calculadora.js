var display = 0;
var displayTop = 0;
var displayNum = 0;

const buttons = document.querySelector(".calculadora.calculadora_buttons")


function display_clear(){
	display=0;
	document.querySelector('div.calculadora_display').innerHTML = display;
}

function display_agregar(num){
	if(display===0){
		display=num;
	}
	else{
		display=display+num;
	}
	document.querySelector('div.calculadora_display').innerHTML = display;
}


function display_decimal(){
	if(display==parseInt(display)){
		display= display + ",";
		document.querySelector('div.calculadora_display').innerHTML = display;
	}
}


function display_sumar(){
	displayNum=display;
	display= display + "+";
		document.querySelector('div.calculadora_display').innerHTML = display;
}

function operar(){
	var num1="";
	var num2="";
	var operador=undefined;
	var negativo=false;
	var cad = document.querySelector('div.calculadora_display').innerHTML;
	console.log("entra a la funcion");
	for(var i=0;i<cad.length;i++){
		if(cad[i]!= "+" && cad[i]!= "-" && cad[i]!= "x" && cad[i]!= "÷"){
			console.log(cad[i]);
			if(!operador){
				num1=num1+cad[i];
			}
			else{
				num2=num2+cad[i];
			}
		}
		else{
			if(i==0 && cad[i]=="-"){
				negativo=true;
			}
			else{
				operador=cad[i];
			}
		}
	}
	if(negativo){
		num1=-parseInt(num1)
	}
	else{
		num1=parseInt(num1)
	}
	if(operador=="+"){
		display =num1 +parseInt(num2);
		document.querySelector('div.calculadora_display').innerHTML=display;
	}
	if(operador=="-"){
		display = num1-parseInt(num2);
		document.querySelector('div.calculadora_display').innerHTML=display;
	}
	if(operador=="x"){
		display = num1*parseInt(num2);
		document.querySelector('div.calculadora_display').innerHTML=display;
	}


	
}

/*OPERADORES*/
/*
document.addEventListener('DOMContentLoaded', function(){
	/*document.querySelector('button.key-operator').onclick=cambiar_display;
	document.querySelector("body > div > div > div.calculadora_buttons > button:nth-child(2)").onclick=display_mermar;
});


document.addEventListener('DOMContentLoaded', function(){
	document.querySelector("body > div > div > div.calculadora_buttons > button:nth-child(1)").onclick=display_aumentar;
});


/*NUMEROS*//*
document.addEventListener('DOMContentLoaded', function(){
	document.querySelector("body > div > div > div.calculadora_buttons > button:nth-child(11)").onclick=display_agregar1;
});


/*AC*/
document.addEventListener('DOMContentLoaded', function(){
	document.querySelector("body > div > div > div.calculadora_buttons > button.key-clear").onclick=display_clear;
});



document.addEventListener('DOMContentLoaded', function(){


	const calculadora = document.querySelector(".calculadora")
	const botones = calculadora.querySelector(".calculadora_buttons")
	const pantalla = calculadora.querySelector(".calculadora_display")


	botones.addEventListener('click', e => {
		if(e.target.matches('button')){		/*pregunto si el item q genero el evento es un boton*/
			const tecla = e.target	/*guardo el boton que se presiono*/
			const accion = tecla.dataset.accion		/*guardo la accion que se disparo del boton*/
			/*console.log(accion)*/
			if (!accion){	/*pregunto si la accion del boton presionado es undefined, en caso de serlo, es un boton numerico*/
				display_agregar(tecla.innerHTML);
			}
			/*Operaciones*/
			if(accion=='sumar'){
				display_sumar();
			}
			if(accion=='restar'){
				
				display= display + "-";
				document.querySelector('div.calculadora_display').innerHTML = display;
			}
			if(accion=='multiplicar'){
				display= display + "x";
				document.querySelector('div.calculadora_display').innerHTML = display;
			}
			if(accion=='dividir'){
				console.log("operacion")
			}
			if(accion=='decimal'){
				display_decimal();
			}
			if(accion=='borrar'){
				console.log("borrar")
			}
			if(accion=='calcular'){
				operar();
			}

		}
	})
})