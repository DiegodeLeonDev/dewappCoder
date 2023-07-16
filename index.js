console.log("Bienvenido a los servicios")

alert ("Hola, elige el servicio a cotizar")
let servicioElegido = prompt ("Escribe solo uno: Web, App, Wordpress, SEO")

while ((((servicioElegido != "Web") && (servicioElegido != "App") && (servicioElegido != "Wordpress") && (servicioElegido !="SEO")))) {
switch (servicioElegido) {
        case "Web":
            alert ("Has elegido cotizar el servicio de Desarrollo Web");            break;
        case "App":
            alert ("Has elegido cotizar el servicio de Desarrollo de Aplicaciones");
            break;
        case "Wordpress":
            alert ("Has elegido cotizar el servicio de Wordpress");
            break;
        case "SEO": 
            alert ("Has elegido el servicio de SEO");
            break;
        default: 
            alert ("No elegiste un servicio a cotizar");
            servicioElegido = prompt ("Elige el servicio. Escribe solo uno: Web, App, Wordpress, SEO")
            break;
}
}



function cotizacion () {
    alert ("Has elegido cotizar el servicio de " + servicioElegido);
    let horasC = parseInt(prompt ("Ingrese la cantidad de horas que estima llevaría el trabajo"))
   let suma =horasC*30 + 300;
   alert ("Su cotización estimada del servicio " + servicioElegido + " es de " + suma)
}

cotizacion ();

function deseaSeguir () {
    let email = prompt ("Deseas seguir con la cotización? Si es así dejanos tu correo electrónico aquí")
    alert ("Su correo electrónico es " + email + ". Muchas Gracias! Te contactaremos")
}

deseaSeguir ()