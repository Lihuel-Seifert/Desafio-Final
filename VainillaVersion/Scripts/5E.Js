let Stats = [];
main();

function main (){
    createRandomParty();
}

// Retorna un valor entero entre 1 y el valor de caras elegido (maximo)
function throwOneDie (side) {
    return Math.floor(Math.random()*side+1);
}

// Lanza "X" dados de "Y" caras y suma los "Z" mas altos/Bajos
function throwDiceAndKeepUpperOrLower (diceQuatity, diceSize, upperOrLower, keepQuantity) {
    let throwedValues = [];
    for (let i=0; i<diceQuatity; i++) {
        throwedValues.push(throwOneDie(diceSize));      // Lanzando 1 dado y agregandolo al array
    }
    if (upperOrLower = "Upper"){
        throwedValues.sort(function(a, b){return b-a}); // Esta linea los ordena de mayor a menor        
    } 
    if (upperOrLower = "Lower"){
        throwedValues.sort(function(a, b){return b-a}); // Esta linea los ordena de menor a mayor
    }
    //console.log(throwedValues);
    for (let i=0; i<(diceQuatity-keepQuantity);i++){    // Borra los no usados (los tirados menos los Requeridos)
        throwedValues.pop();
    }
    //console.log(throwedValues);
    return throwedValues;
}

function calculateOneStat (){
    statValue = 0;
    let myStatDiceArray = throwDiceAndKeepUpperOrLower(4,6,"Upper",3);
    //console.log(myStatDiceArray);
    for (let i=0; i<myStatDiceArray.length; i++){
        statValue=statValue+myStatDiceArray[i];
    }
    //console.log("Stat": statValue);
    return statValue;
}

function calculateStatArry (statsQuantity,inOrder=false,addFakeRacialBonus=true){
    let myStatsArray =[];
    for (let i=0; i<statsQuantity; i++){
        myStatsArray.push(calculateOneStat());
        //console.log("Stat:" + statValue);
    }
    console.log("Mis stats base son:  " + myStatsArray);
    
    // Si esta en true, ordena los stats de mayor a menor
    if (inOrder==true){
        myStatsArray.sort(function(a, b){return b-a});

        // Si esta en true, agrega +2 al stat primario y +1 al
        if (addFakeRacialBonus=true){
        myStatsArray[0]=myStatsArray[0] +2
        myStatsArray[1]=myStatsArray[1] +1
        console.log("(+2 al 1° Stat | +1 al 2° Stat)");
        };    
    };
    console.log("Mis stats con bonos son:  " + myStatsArray);
    return myStatsArray;
}

function setRandomClass(){
    characterClasses = [];
    characterClasses.push("Barbaro");
    characterClasses.push("Picaro");
    characterClasses.push("Clerigo");
    characterClasses.push("Bardo");
    //console.log("Clases disponibles: " + characterClasses);

    classesQuantity = characterClasses.length; // Calcula la cantidad de clases que hay
    //console.log("Clases totales: " + classesQuantity);

    myRandomlySelectedClassNumber = Math.floor(Math.random()*classesQuantity);  // Elije un numero al azar entre la cantidad de clases que hay
    //console.log("Mi numero es: " + myRandomlySelectedClassNumber);
    
    
    myClass = characterClasses[myRandomlySelectedClassNumber] // Setea mi clase de personaje
    console.log("Mi clase es: " + myClass);  
    return myClass;
}


function setRandomRace(){
    characterRaces = [];
    characterRaces.push("Humano");
    characterRaces.push("Enano");
    characterRaces.push("Elfo");
    characterRaces.push("Orco");
    //console.log("Clases disponibles: " + characterClasses);

    raceQuantity = characterRaces.length; // Calcula la cantidad de razas que hay
    //console.log("Razas totales: " + raceQuantity);

    myRandomlySelectedRaceNumber = Math.floor(Math.random()*raceQuantity);  // Elije un numero al azar entre la cantidad de Razas que hay
    //console.log("Mi numero es: " + myRandomlySelectedRaceNumber);
    
    myRace = characterRaces[myRandomlySelectedRaceNumber] // Setea mi Raza de personaje
    console.log("Mi Raza es: " + myRace);  
    return myRace;
}

function createRandomCharacter(){
    characterClass  = setRandomClass();
    characterRace   = setRandomRace();
    characterArrays = calculateStatArry(6,true);
    document.write(
        `<nav >
            <fieldset>
            <p>
            El personaje es un ${characterRace} ${characterClass} con estos stats ${characterArrays}
            <p>
            </fieldset>
        </nav>`
    );
}


function createRandomParty(){7
    document.write(
        `<nav >
            <h1>
            Este es tu party
            <h1>
        </nav>`
    );
    createRandomCharacter();
    createRandomCharacter();
    createRandomCharacter();
    createRandomCharacter();
    createRandomCharacter();
}

