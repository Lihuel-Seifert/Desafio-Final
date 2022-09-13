const magicElements = [
    ["Aire",    "A",    "01",   "Vendaval",     "Tifon", ],
    ["Muerte",  "M",    "02",   "Nigromancia",  "Nigromante"],
    ["Hielo",   "H",    "03",   "Torrente",     "Glaciar"],
    ["Rayo",    "R",    "04",   "Desborde",     "Tejetormentas"],
    ["Oscuridad","O",   "05",   "Ocultismo",    "Nocturnal"],
    ["Espacio", "E",    "06",   "Correspondencia","Vortice"],
    ["Sueños",  "I",    "07",   "Onírica",      "Telepata"],
    ["Hongos",  "C",    "08",   "Corrupcion",   "Paria"],
    ["Acero",   "U",    "09",   "Artificio",    "Artifice"],
    ["Vacio",   "Z",    "10",   "Velo",         "Quiebraconjuros"],
    ["Piedra",  "P",    "11",   "Runica",       "Titan"],
    ["Sangre",  "V",    "12",   "Viceromancia", "Martir"],
    ["Fuego",   "F",    "13",   "Infernalismo", "Arsonista"],
    ["Sonido",  "S",    "14",   "Resonancia",   "Heraldo"],
    ["Luz",     "L",    "15",   "Resplandor",   "Luminar"],
    ["Tiempo",  "T",    "16",   "Paradoja",     "Oraculo"],
    ["Bestias", "B",    "17",   "Chamanismo",   "Shaman"],
    ["Naturaleza","N",  "18",   "Druidrica",    "Druida"],
    ["Caos",    "K",    "19",   "Taumaturgia",  "Furia"],
    ["Arcana",  "Y",    "20",   "Arcana",       "Arcanistas"],
];

const otherMagicElements = [
    ["Aurora",  "W",    "21",   "El gran tarot","Auror",],
    ["Dualidad","Q",    "21",   "L'Hibris",     "Mestizo",],
    ["Demonios","D",    "21",   "Odio",         "Demonios",],
]


main();

function main(){

    createLogos(magicElements);
    //createTarotDeck(magicElements);
}

function createLogos(){
    document.write (`<center>`);
    document.write (`<br><a id="explicacion" href=Quintaesencias.html> Quintaesencias </a><br>`);
    document.write (`<span class="icono">`);
    for (var actualRow in magicElements) {
        
        document.write(
            `<span class="${magicElements[actualRow][0]}" `+            
            //Aca ingresar los valores
            
            `alt='Icono-${magicElements[actualRow][0]}'`+ // Icono-Elemento
            `onclick="cardSelected(${actualRow})"`+ // Posicion del array
            `>`+
            `${magicElements[actualRow][1]}`+// Letra
            //Cierra el span
            `</span>`);
    }
    document.write (`</span>`);
    document.write (`</center>`);
    
}

function createTarotDeck(){
    // Genera la linea de imagenes vinculadas a la info.
    document.write (`<center>`);
    for (const magicElement in magicElements) {
        document.write(
            `<img class="carta"`+
            `width="5%"`+
            `id="${magicElements[magicElement][0]}"`+
            `src='Img/Tarot/Carta00${magicElements[magicElement][2]}.png'`+
            `alt='Carta-${magicElements[magicElement][0]}'`+
            `onclick="cardSelected(${magicElements[magicElement][2]})"`+
            `/img>`)    
    }
    document.write (`</center>`);
}

function cardSelected(elementOrder){
    
    card       = magicElements[elementOrder]; // 1 a 20
    cardNumber = card[2]; // 1 a 20
    cardUser   = card[4]; 
    cardElement= card[0]; 
    cardDisipline = card[3];

    
    // DEBUG
    console.log(`The card ${cardNumber} has been clicked,`);
    //console.log (`order: ${elementOrder}`)


    // Nombre del Auror
    document.getElementById("aurorName").innerHTML =`${cardUser}`;

    // Informacion del personaje
    document.getElementById("mainInformation").innerHTML = `Los ${cardUser} son poderosos Aurores que utilizan el poder de ${cardElement}`;

    // Disciplina
    document.getElementById("discipline").innerHTML = `${cardDisipline}`;

    // Subtitulo
    document.getElementById("displineDescription").innerHTML = `La magia de ${cardElement}`;

    // Texto
    document.getElementById("displineDescription").innerHTML = `La magia de ${cardElement}`;


    // Carta
    document.getElementById("mainCard").src  = `Img/Tarot/Carta00${cardNumber}.png`;

    // Orbes
    document.getElementById("mainOrb1").src  = `Img/Orbes/Marca00${cardNumber}.png`;
    //document.getElementById("mainOrb2").src  = `Img/Orbes/Marca00${cardNumber}.png`;

    // Fondo del articulo
    document.getElementById("magicContainer").style  = `background-image:url(../Img/Auras/Aura00${cardNumber}.png);background-position: 125%;background-size: 55%; background-repeat: no-repeat ;`;

}




