//BOTONES DE AUDIO //
// selecciona boton a cliquear //
const cli = document.querySelector('.botondeaudio')
//* selecciona elemento que aparece o desaparece *//
const modificar = document.querySelector('.opaudio')
const ocultar1 = document.querySelector('.contenedordebotones')
//* ocultar elemento *//
modificar.style.display = 'none'

//* elemento inicial es el boton, ya que este se desplegara el evento cuando se, en este caso cliquea, para luego ejecutar la funcion, que en este caso muestra el elemento *//
cli.addEventListener ('click', ()=> {
    modificar.style.display ='flex'
    ocultar1.style.display ='none'
}
)


//Seleccionar//

const velselec = document.querySelector('.contenedordeVelocidad')
const copvelocidad = document.querySelector('.cajaopvelocidad')

// Ocultar opciones de velocidad//
copvelocidad.style.display = 'none'

//Clickear boton de velocidad que esta dentro de opciones generales de audio para que aparezca las opciones de velocidad//

velselec.addEventListener ('click', () => {
    copvelocidad.style.display = 'flex';
}
)

//ocultar el contenedor de opciones de audio general // 
velselec.addEventListener('click', () =>{
    modificar.style.display = 'none';
}
)






//OPCIONES DE AUDIO => TIPO DE VOZ//

//Seleccionar//
const btnvoz = document.querySelector('.contenedordeVoz')
const opvoz= document.querySelector('.cajaopvoz')

//ocultar opciones de Tipo de Voz//
opvoz.style.display = 'none'

//click en boton de Tipo de Voz y mostrar Opciones de Voz//
btnvoz.addEventListener('click', ()=>{
    opvoz.style.display = 'flex';
})

//Ocultar opciones anteriores//
btnvoz.addEventListener('click', ()=>{
    modificar.style.display = 'none'
})




// BOTON TEXTO HACIA MENU TEXTO //

//seleccionar boton//
const seltxtbtn = document.querySelector('.botondetexto')
//seleccionar menu texto //
 const seltxtop = document.querySelector('.cajaoptexto')

 //ocultar menu texto//
 seltxtop.style.display = 'none'

 // al hacer click en el boton, que se muestre las opciones //
seltxtbtn.addEventListener('click', ()=>{
    seltxtop.style.display = 'flex'
    ocultar1.style.display = 'none'
})



// BOTON DE MENU DE TEXTO HACIA OPCIONES DE CONTRASTE //

//Seleccionar boton//
const slcbtnoptxt = document.querySelector('.textoopcion1')
//Seleccionar opciones de contraste//
const slcopcont = document.querySelector ('.cajaopcontraste')

// ocultar opciones de contraste //
slcopcont.style.display = 'none'

//mostrar opciones de contraste al hacer click en boton de contraste //
slcbtnoptxt.addEventListener('click', ()=>{
    slcopcont.style.display= 'flex';
    seltxtop.style.display = 'none'
})


//BOTON DE MENU DE TEXTO HACIA OPCIONES DE VOZ //

//Seleccionar boton //
const slcbtnoptxt2 = document.querySelector('.textoopcion2')

//seleccionar opciones de tamaño//
const slcoptmn = document.querySelector('.cajaoptamano')

//Ocultar Opciones de tamano //
slcoptmn.style.display ='none';

//mostrar opciones de tamano al hacer click en boton de tamano //
slcbtnoptxt2.addEventListener('click', () =>{
    slcoptmn.style.display = 'flex'
})


//Reproducir Audio //
const audio = document.getElementById('#audio1')

function playaudio () {
    audio.play();
}

let audio2 = document.getElementById("Audio1"); 

function playaudio2() { 
  audio2.play(); 
} 
function pauseaudio2() { 
  audio2.pause(); 
} 

//Botones de Play y Pausa //
const play = document.querySelector('.play');
const pausa = document.querySelector('.pausar');

pausa.style.display = 'none';

play.addEventListener('click',()=>{
    pausa.style.display ='flex'
    play.style.display = 'none'
})

pausa.addEventListener('click',()=>{
    pausa.style.display ='none'
    play.style.display = 'flex'
})


//duracion//

const Progreso = document.querySelector('.progreso')
const tiempoActual = document.querySelector('.tiempoactual')
const Total = document.querySelector ('.tiempototal')

function updateProgress(value) {
    const tiempoActual = document.querySelector('.tiempoactual');
    tiempoActual.textContent = formatTime(value);
  }
function Musica (){ 
Progreso.value = 0;
tiempoActual.innerHTML = '00:00';
setTimeout(()=> {
    Progreso.max = audio2.duration;
    Total.innerHTML = formatTime(audio2.duration);
},300);
setInterval(() => {
    Progreso.value = audio2.currentTime;
    tiempoActual.innerHTML = formatTime(audio2.currentTime);

}, 500);
Progreso.addEventListener('change', () =>{
    audio2.currentTime = Progreso.value;
})

function updateProgress(value) {
    const tiempoActual = document.querySelector('.tiempoactual');
    tiempoActual.textContent = formatTime(value);
  }

// Tiempo en formato de Minutos y segundos//

const formatTime = (time) =>{
    let min = Math.floor (time / 60);
    if( min < 10 ){
        min = `0${min}`;
    }
    let sec = Math.floor(time % 60);
    if (sec<10){
        sec = `0${sec}`;
    }
    return `${min} : ${sec} `;
}
}
Musica();

var currentSlide = 0;
var slides = document.querySelectorAll('.carousel-item');

function changeSlide(direction) {
  slides[currentSlide].classList.remove('active');
  currentSlide += direction;
  
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  } else if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  
  slides[currentSlide].classList.add('active');
}