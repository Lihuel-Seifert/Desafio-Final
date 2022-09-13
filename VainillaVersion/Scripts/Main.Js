// Constants



// Main Code
console.log(Number(""));
main();


// Methods
function main (){
    console.log ("Main script is running");
}



function addHeader(){
    document.write(`
    <h1>
        <img src="Img/Logo.png" width=75px alt="Logo">
        <u><b>	Reinos de aurora 	</u></b>
        <img src="Img/Logo.png" width=75px alt="Logo">
    </h1>
    `)
    addNavBar();
    document.getElementById("addHeader").remove();
}

function addNavBar(){
    console.log("Navigation Bar added")
    document.write(
        `
            <nav>
                <a href=Index.html> Main </a> | 
                <a href=Arquetipos.html> Arquetipos </a> |
                <a href=Quintaesencias.html> Quintaesencias </a> |
                <a href=Gallery.html> Galeria </a> |
               
                
            </nav>
        
        `
    );    
}

function addFooter(){
    document.write(`
    <img src="Img/Sello.png" width=200 alt="Logo"><br>
   
   
    `)
    
    document.getElementById("addFooter").remove();
}

