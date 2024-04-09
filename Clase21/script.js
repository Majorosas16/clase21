const render =() =>{

    //En formato Json separa las propiedad por comas
    const persona ={
        nombre: "Maria",
        edad: 19,
        esMayorDeEdad: true,
    };

    console.log(persona);
    console.log(persona.nombre,persona.edad,persona.esMayorDeEdad);

    persona.edad=20; //aquí se cambia el valor
    console.log(persona);

    persona.nombreMascota= "Lukas" //Aquí se agrega una propiedad
    console.log(persona);

    const personaDos = {
        nombre: "Silvana",
        edad: 18,
        esMayorDeEdad: true,
        nombreMascota: "Manchas",
    }

    console.log(personaDos);

    const familia =[persona,personaDos,{nombre:"Pedro",edad:"48",esMayorDeEdad:true,nombreMascota:"Woody"}];

    // familia[2].nombre="Andres"
    console.log(familia);

    for(const integrante of familia){
        console.log(integrante.nombre);
    }

};

document.addEventListener("DOMContentLoaded",render);