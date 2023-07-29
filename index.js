console.log("Bienvenido a los servicios")

alert("Hola, elige el servicio a cotizar")
let servicioElegido = prompt("Escribe solo uno: Web, App, Wordpress, SEO")

while ((((servicioElegido != "Web") && (servicioElegido != "App") && (servicioElegido != "Wordpress") && (servicioElegido != "SEO")))) {
    switch (servicioElegido) {
        case "Web":
            alert("Has elegido cotizar el servicio de Desarrollo Web"); break;
        case "App":
            alert("Has elegido cotizar el servicio de Desarrollo de Aplicaciones");
            break;
        case "Wordpress":
            alert("Has elegido cotizar el servicio de Wordpress");
            break;
        case "SEO":
            alert("Has elegido el servicio de SEO");
            break;
        default:
            alert("No elegiste un servicio a cotizar");
            servicioElegido = prompt("Elige el servicio. Escribe solo uno: Web, App, Wordpress, SEO")
            break;
    }
}

alert("Has elegido cotizar el servicio de " + servicioElegido);

function cotizacion() {
    switch (servicioElegido) {
        case "Web":
            let horasW = parseInt(prompt("Ingrese la cantidad de horas que estima llevaría el trabajo de Desarrollo Web"))
            suma = horasW * 30 + 500;
            alert("Su cotización estimada del servicio " + servicioElegido + " es de " + suma);
            break;
        case "Wordpress":
            let horasWordpress = parseInt(prompt("Ingrese la cantidad de horas que estima llevaría el trabajo de WordPress"))
            suma = horasWordpress * 30 + 100;
            alert("Su cotización estimada del servicio " + servicioElegido + " es de " + suma);
            break;
        default:
            let horasC = parseInt(prompt("Ingrese la cantidad de horas que estima llevaría el trabajo"))
            suma = horasC * 30 + 300;
            alert("Su cotización estimada del servicio " + servicioElegido + " es de " + suma)
            break;
    }
}

cotizacion();

alert("Si desea que nos comuniquemos para más información, por favor rellena los siguientes datos");

let nombrePresupuesto = prompt ("Indique su nombre completo");
let telefonoPresupuesto = prompt ("Indique su teléfono");
let ciudadPresupuesto = prompt ("Indique su ciudad")

const Persona1 = {nombrePresupuesto, telefonoPresupuesto, ciudadPresupuesto, servicioElegido, suma}

let aprobacion = prompt ("Confirme sus datos escribiendo 'Yes' or 'No' para volver a comenzar: " + nombrePresupuesto + ", " + telefonoPresupuesto + ", " + ciudadPresupuesto + ", " + servicioElegido + ", Cotización=" + suma);

if (aprobacion == "Yes") { 
    alert ("Gracias " + nombrePresupuesto + ". Nos estaremos comunicando a la brevedad. Que tengas un buen día"); 
    } else if (aprobacion == "No") {
    alert ("Que pena " + nombrePresupuesto +" . Esperemos volverte a ver pronto por aquí");
    } else {
        alert ("Actualice la página para comenzar nuevamente ")
    }

/* if (aprobacion == "Yes") { 
alert ("Gracias " + nombrePresupuesto + ". Nos estaremos comunicando a la brevedad. Que tengas un buen día"); 
} else if ((aprobacion == "No") || (aprobacion == "NO")) {
    alert ("Que pena " + nombrePresupuesto +" . Esperemos volverte a ver pronto por aquí");
} else ((aprobacion != "Yes") && (aprobacion != "No")) ;{
    prompt ("Indica 'Yes' or 'No' para finalizar tu consulta")
} */


const arrayNombrePresupuesto = ['Mabel', 'Ana']
const arrayPersonas = [arrayNombrePresupuesto, servicioElegido, suma]
arrayNombrePresupuesto.push (Persona1)
console.log(arrayNombrePresupuesto)
console.log(arrayPersonas)

const usuario = arrayNombrePresupuesto.find ((el) => el.nombrePresupuesto === "Diego")

console.log (usuario)


/* function cotizacion() {
    alert("Has elegido cotizar el servicio de " + servicioElegido);
    let horasC = parseInt(prompt("Ingrese la cantidad de horas que estima llevaría el trabajo"))
    let suma = horasC * 30 + 300;
    alert("Su cotización estimada del servicio " + servicioElegido + " es de " + suma)
}

cotizacion(); */


/* function deseaSeguir() {
    let email = prompt("Deseas seguir con la cotización? Si es así dejanos tu correo electrónico aquí")
    alert("Su correo electrónico es " + email + ". Muchas Gracias! Te contactaremos")
}

deseaSeguir() */


console.log ("fin del servicio")