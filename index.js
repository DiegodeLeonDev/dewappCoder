const alertCotizacion = () => { 
Swal.fire({
    title: "Gracias por cotizar el servicio de " + servicioUser,
    text: "El precio total es de: " + result.innerText,
    icon: "success",
    confirmButtonText: "Completar formulario para asesorarte",
});
}

const alertFormEnviado = () => {
    Swal.fire({
        title: "Gracias " + nombreU.toUpperCase(),
        text: "El formulario fue enviado, y nos comunicaremos a la brevedad",
        icon: "success",
        confirmButtonText: "Cerrar",
    });
}

function Servicio(id, nombre, precioBase, horaValue) {
    this.id = id;
    this.nombre = nombre;
    this.precioBase = precioBase
    this.horaValue = horaValue
}

const DesarrolloWeb = new Servicio(1, "Desarrollo Web", 100, 30);
const DesarrolloApp = new Servicio(2, "Desarrollo App", 200, 50);
const SEO = new Servicio(3, "SEO", 150, 40);
const ServicioWordpress = new Servicio(4, "Servicio Wordpress", 50, 25)

const serviciosOfrecidos = [DesarrolloWeb, DesarrolloApp, SEO, ServicioWordpress]

function Solicitante(nombre, email, mensaje, Servicio, horasEstimadas, fecha) {
    this.nombre = nombre;
    this.email = email;
    this.mensaje = mensaje;
    this.Servicio = Servicio;
    this.horasEstimadas = horasEstimadas;
    this.fecha = fecha;

}

const solicitantes = []

/* document.getElementById('horasCotizadas').value */
const btnCalculo = document.getElementById('btnCalculo')
const input = document.getElementById('horasCotizadas')
const result = document.getElementById('resultadoSimulador')
btnCalculo.addEventListener('click', valorTotal)

function valorTotal() {
    let valorHora = ("")
    if (document.getElementById('dWeb').checked) {
        valorHora = 5;
    } else if (document.getElementById('dSEO').checked) {
        valorHora = 10;
    } else if (document.getElementById("dApp").checked) {
        valorHora = 10;
    } else if (document.getElementById("dWordpress").checked)
        valorHora = 3;
    let valorBase = ("")
    if (document.getElementById('dWeb').checked) {
        valorBase = DesarrolloWeb.precioBase
    } else if (document.getElementById('dSEO').checked) {
        valorBase = SEO.precioBase
    } else if (document.getElementById("dApp").checked) {
        valorBase = DesarrolloApp.precioBase
    } else if (document.getElementById("dWordpress").checked)
        valorBase = ServicioWordpress.precioBase;
    let servicioU = ("")
    if (document.getElementById('dWeb').checked) {
        servicioU = DesarrolloWeb;
    } else if (document.getElementById('dSEO').checked) {
        servicioU = SEO;
    } else if (document.getElementById("dApp").checked) {
        servicioU = DesarrolloApp;
    } else if (document.getElementById("dWordpress").checked)
        servicioU = ServicioWordpress;
    const presupuesto = input.value * valorHora + valorBase
    result.innerText = "$" + presupuesto;
    result.className = "parrafoSimulador"
    servicioUser = servicioU.nombre
    alertCotizacion()
}

const nombreForma = document.getElementById('nombreForm')
nombreForma.addEventListener("change", getValue)
function getValue() {
    const value = nombreForm.value
    nombreU = value
}


const emailForm = document.getElementById('emailForm')
emailForm.addEventListener("change", getEmail)
function getEmail() {
    const getValue = emailForm.value
    emailU = getValue
}

const mensajeForm = document.getElementById('mensajeForm')
mensajeForm.addEventListener("change", getMensaje)
function getMensaje() {
    const getValor = mensajeForm.value
    mensajeU = getValor
}

btnEnviarForm.addEventListener('click', obtenerDatos)
/* function obtenerDatos () {
    const solicitante = new Solicitante (nombreForm.input, emailForm.input, mensajeForm.input)
    solicitantes.push(Solicitante)
} */

fecha = Date ()

function obtenerDatos() {
    const lead = new Solicitante(nombreU, emailU, mensajeU, servicioUser, input.value, fecha)
    console.log(lead);
    solicitantes.push(lead)
    arrepentir = document.getElementById("arrepentimiento")
arrepentir.innerHTML = "<button id= 'meArrepenti' type='button'>Me arrepentí, quiero eliminar mis datos</button>"
const borrarDatos = document.getElementById("meArrepenti")
borrarDatos.addEventListener ("click", borrarData);
const enJSON = JSON.stringify(lead)
localStorage.setItem("lead", enJSON)
localStorage.setItem("nombreLead", lead.nombre)
nombreUser()
alertFormEnviado ()
}

const nombreUser = () => {
const lead2 = JSON.parse(localStorage.getItem("lead"))
/* mostrarName = sessionStorage.getItem("nombreLead") */
mostrarUser = ("Hola " + lead2.nombre)
mostrarUsuario = document.getElementById("usuarioNombre")
mostrarUsuario.innerHTML = mostrarUser;
}

localStorage.length && nombreUser ()


function borrarData () {
    solicitantes.pop()
    arrepentir.innerHTML = "<button type='button'>Listo ¡Ya no tenemos tus datos!</button>"
    localStorage.removeItem("lead")
}


const resetear = document.getElementById("resetearCache")
resetear.addEventListener("click", borrarMemoria)
function borrarMemoria () {
    sessionStorage.clear();
    localStorage.clear();
    const eliminarUsuario = document.getElementById("usuarioNombre")
    eliminarUsuario.innerHTML = ""
}

/* alert("Hola, elige el servicio a cotizar")
let servicioElegido = prompt("Escribe solo uno: Web, App, Wordpress, SEO") */
/* while ((((servicioElegido != "Web") && (servicioElegido != "App") && (servicioElegido != "Wordpress") && (servicioElegido != "SEO")))) {
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
} */
/* cotizacion();
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
 */
/* if (aprobacion == "Yes") { 
alert ("Gracias " + nombrePresupuesto + ". Nos estaremos comunicando a la brevedad. Que tengas un buen día"); 
} else if ((aprobacion == "No") || (aprobacion == "NO")) {
    alert ("Que pena " + nombrePresupuesto +" . Esperemos volverte a ver pronto por aquí");
} else ((aprobacion != "Yes") && (aprobacion != "No")) ;{
    prompt ("Indica 'Yes' or 'No' para finalizar tu consulta")
} */
/* const arrayNombrePresupuesto = ['Mabel', 'Ana']
const arrayPersonas = [arrayNombrePresupuesto, servicioElegido, suma]
arrayNombrePresupuesto.push (Persona1)
console.log(arrayNombrePresupuesto)
console.log(arrayPersonas)
const usuario = arrayNombrePresupuesto.find ((el) => el.nombrePresupuesto === "Diego")
console.log (usuario) */
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
/* console.log ("fin del servicio") */
/* botonCalcular = (document.getElementById ("btnCalculo"))
 *//* botonCalcular.addEventListener("click", respuestaClick)
function respuestaClick() { 
   console.log("respuestaEvento")
} */
/* desarrolloWeb = document.getElementById("dWeb")
desarrolloWeb.addEventListener ("click", WebSeleccion)
function WebSeleccion () {
    let parrafo = document.getElementById ("parrafoConfirmacion")
    parrafo.innerText = "Has elegido presupuestar el servicio de Desarrollo Web"
    parrafo.className = "parrafoSimulador"
} */
/* const calcular = () => {
    const calculo = horasEstimadas.value
    calculan ()
} */
/* 
let horasEstimadas = document.querySelector("#horasCotizadas")
botonCalcular.addEventListener("click", calcular)    */
/* 
horasEstimadas.addEventListener("input", () => dAppsimulacion) */
/* function dAppsimulacion () {
    let presupuesto = 25+100;
    return console.log(presupuesto)
} */
/* let simulacro = parseInt(document.getElementById("horasCotizadas").value)
const calculote= (horas) => {
    console.log(parseInt(horas) + 1234)
} */
/* let desarrolloApp = document.getElementById ("dApp")
desarrolloApp.addEventListener ("click", AppSeleccion)
function AppSeleccion () {
    let parrafo = document.getElementById ("parrafoConfirmacion")
    parrafo.innerText = "Has elegido presupuestar el servicio de Desarrollo App";
    let dAppService = document.querySelector("#dApp");
    dAppService.innerText = "<input:checked>"
    console.log(dApp.innerHTML);
    let simulacro = document.getElementById("horasCotizadas").value
    calculote(simulacro)
} */
/* let desarrolloApp = document.getElementById ("dApp")
desarrolloApp.addEventListener ("click", AppSeleccion)
function AppSeleccion () {
    let parrafo = document.getElementById ("parrafoConfirmacion")
    parrafo.innerText = "Has elegido presupuestar el servicio de Desarrollo App";
    let dAppService = document.querySelector("#dApp");
    dAppService.innerText = "<input:checked>"
    console.log(dApp.innerHTML);
} */
/* let seo = document.getElementById ("dSEO")
seo.addEventListener ("click", SEOSeleccion)
function SEOSeleccion () {
    let parrafo = document.getElementById ("parrafoConfirmacion")
    parrafo.innerText = "Has elegido presupuestar el servicio de SEO"
}
let Wordpress = document.getElementById ("dWordpress")
Wordpress.addEventListener ("click", WordpressSeleccion)
function WordpressSeleccion () {
    let parrafo = document.getElementById ("parrafoConfirmacion")
    parrafo.innerText = "Has elegido presupuestar el servicio de Wordpress"
}
 */






/* function servicioElegido (servicio) {
switch (servicio) {
    case desarrolloWeb:
        return desarrolloWeb;
        break;
    default:
        console.log ("no elegiste nada")
}
} */