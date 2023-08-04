const pi = 3.1415;

const input = document.querySelector("#radio");
const boton = document.querySelector("#boton");

input.addEventListener('keypress', function(e) {
  // verificar si la tecla presionada es la tecla Enter
  const key = e.which || e.keyCode;
  if (key === 13) {
    // cancelar el comportamiento predeterminado del formulario
    e.preventDefault();
    // hacer clic en el botón submit
    boton.click();
  }
});

function mostrar(){
    let respuesta = Number(document.querySelector("#radio").value);
    let area = pi * Math.round(Math.pow(respuesta, 2));
    let perimetro = 2 * pi * respuesta;
    
    let elementos = [
        "El area de la circunferencia es: ",
        area,
        "img/radio.png",
        "El perimetro de la circunferencia es: ",
        perimetro,
        "img/seleccion.png"
    ]
    
    let contenedor = document.querySelector("#caja");

    contenedor.innerHTML =
    "<div id='cajita'>" + 
    "<div class='contenedor'>" +
    "<img src=" + elementos[2] + ">" +
    "<h4>" + elementos[0] + " " + elementos[1] + "</h4>" +
    "</div>" +
    "<div class='container'>" +
    "<img src=" + elementos[5] + ">" +
    "<h4>" + elementos[3] + " " + elementos[4] + "</h4>" +
    "</div>" +
    "</div>";
}

/*const pi = 3.1415;

var radio = prompt("Ingrese el radio de la circunferencia");

var area = pi * Math.round(Math.pow(radio, 2));

var perimetro = 2 * pi * radio;

var template = 
`El area de es: ${area}
El perimetro es: ${perimetro}`;

alert(template);*/