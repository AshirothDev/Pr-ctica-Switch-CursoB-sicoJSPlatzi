function resultado() 
{
    return Math.floor((Math.random() * 3) + 1);
}

var ganar = "ganaste!";
var perder = "perdiste!";
var pregunta = prompt("Escribe 'piedra', 'papel' o 'tijeras'");
var jugador = pregunta.toLowerCase();
var pc = resultado();
var go = eligió();jugar();

function eligió()
{   
    if(pc === 1)
    {
    pc = "piedra";
   document.write("La compu eligió piedra");
    }
    else if(pc === 2) {
    pc = "papel";
    document.write("La compu eligió papel");
    }
    else if(pc === 3) 
    {
    pc = "tijeras"
    document.write("La compu eligió tijeras");
    }
}

function jugar()
{
    switch (true) 
    {
    case jugador === "piedra" && pc === "tijeras":
        alert(ganar);
        break;
    case jugador === "piedra" && pc === "papel":
        alert(perder);
        break;
    case jugador === "papel" && pc === "tijeras":
        alert(perder);
        break;
    case jugador === "papel" && pc === "piedra":
        alert(ganar);
        break;
    case jugador === "tijeras" && pc === "piedra":
        alert(perder);
        break;
    case jugador === "tijeras" && pc === "papel":
        alert(ganar);
        break;
    default:
        alert("empate!");
    }
}