inicio = document.createElement("h1");
eldiv = document.createElement("div");
imagen = new Image();
leer_mas = document.createElement("button");
p = document.createElement("p");



imagen.style.width = "250px"
imagen.style.marginLeft = "30px";
imagen.style.marginRight = "30px";
imagen.style.marginTop = "40px";

eldiv.style.textAlign = "center"
eldiv.style.backgroundColor = "lightgray"
eldiv.style.width = "400px"
eldiv.style.height = "500px"
eldiv.style.margin = "0 auto"

p.style.textAlign = "left";
p.style.margin = "9px"


inicio.style.fontSize = "24px";
inicio.style.marginLeft="5px";
inicio.style.marginRight="5px";

leer_mas.style.marginTop="9px";
leer_mas.style.fontSize = "20px";
leer_mas.style.fontWeight = "bold"
leer_mas.style.color = "white"
leer_mas.style.border = "none"
leer_mas.style.padding = "10px 24px";
leer_mas.style.borderRadius= "8px";
leer_mas.style.backgroundColor = "red";


eldiv.appendChild(imagen);
eldiv.appendChild(inicio);
eldiv.appendChild(p);
eldiv.appendChild(leer_mas);

imagen.src = "imagen clipart.jpg";
inicio.innerHTML = "Como añadir un efecto a una imagen";
p.innerHTML = "Existen muchos plugins para insertar efectos especiales a las imagenes cuando se les pasa el curor por encima. todos esos plugins añaden un monton de codigo a la pagin, que terminan afectando a la velocidad de la web en si. Si quieres utilizar muy poco codigo para asi optimizar la carga de tu web, nuestro script para generar un efecto de zoom es perfecto para ti";
leer_mas.innerHTML = "Leer mas";
document.body.appendChild(eldiv);