//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//oculto el menu una vez que selecciono una opción
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//Creo las barritas de una barra particular identificada por su id
function crearBarra(id_barra){
    for(i=0;i<=19;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

//selecciono todas las barras generales par aluego manipularlas
let liderazgo = document.getElementById("liderazgo");
crearBarra(liderazgo);
let adaptabilidad = document.getElementById("adaptabilidad");
crearBarra(adaptabilidad);
let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let python = document.getElementById("python");
crearBarra(python);
let photoshop = document.getElementById("photoshop");
crearBarra(photoshop);

//Guardar la cantidad de barritas que se van a ir pintando por cada barra
//para eso utilizo un arreglo, cada posiciòn pertenece a un elemento
//comienzan en -1 porque no tiene ninguna pintada al iniciarse
let contadores = [-1,-1,-1,-1,-1,-1];
//esta variable la voy a utilizar de bandera para saber si ya ejecuto la animación
let entro = false;

//función que aplica las animaciones de la habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalLiderazgo = setInterval(function(){
            pintarBarra(liderazgo, 18, 0, intervalLiderazgo);
        },100);
        const intervalAdaptabilidad = setInterval(function(){
            pintarBarra(adaptabilidad, 19, 1, intervalAdaptabilidad);
        },100);
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 14, 2, intervalHtml);
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 14, 3, intervalJavascript);
        },100);
        const intervalPython = setInterval(function(){
            pintarBarra(python, 14, 4, intervalPython);
        },100);
        const intervalPhotoshop = setInterval(function(){
            pintarBarra(photoshop, 16, 5, intervalPhotoshop);
        },100);
    }
}

//lleno una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#b0efea";
    }else{
        clearInterval(interval)
    }
}

//detecto el scrolling del mouse para aplicar la animación de la barra
window.onscroll = function(){
    efectoHabilidades();
}