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
//retroceso desde opciones de audio a Botones//
const retrocederr = document.querySelector('.rtraudio')

retrocederr.addEventListener('click', ()=>{
    modificar.style.display='none'
    ocultar1.style.display='flex'
})


//CAJA DE AUDIO GRAL A OP VELOCIDAD//
//Seleccionar elementos a mostrar y ocultar//

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
//RETROCESO//   
const rtropvelocidad = document.querySelector('.rtropvelocidad')

rtropvelocidad.addEventListener('click', ()=>{
    copvelocidad.style.display='none';
    modificar.style.display='flex';
}
)



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
//Retroceso MENU TEXTO => BOTONES//
const rtrtexto = document.querySelector('.rtrtexto')
rtrtexto.addEventListener('click',()=>{
    ocultar1.style.display = 'flex'
    seltxtop.style.display = 'none'
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

//Retroceso OP CONTRASTE =>MENUTEXTO//
const rtrcontraste = document.querySelector('.rtrcontraste')

rtrcontraste.addEventListener('click', ()=> {
    seltxtop.style.display = 'flex';
    slcopcont.style.display = 'none'
    
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
    seltxtop.style.display = 'none'
})

//Retroceso OP TEXTO A MENU DE VOZ //
const rtrtamano = document.querySelector('.rtrtamano')
rtrtamano.addEventListener('click', ()=>{
    slcoptmn.style.display = 'none'
    seltxtop.style.display = 'flex'
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




const carouselTrack = document.querySelector('.carousel__track');
let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;

carouselTrack.addEventListener('mousedown', dragStart);
carouselTrack.addEventListener('touchstart', dragStart);
carouselTrack.addEventListener('mouseup', dragEnd);
carouselTrack.addEventListener('mouseleave', dragEnd);
carouselTrack.addEventListener('touchend', dragEnd);
carouselTrack.addEventListener('mousemove', drag);
carouselTrack.addEventListener('touchmove', drag);

function dragStart(event) {
  if (event.type === 'touchstart') {
    startPos = event.touches[0].clientX;
  } else {
    startPos = event.clientX;
    event.preventDefault();
  }
  isDragging = true;
}

function drag(event) {
  if (isDragging) {
    let currentPosition = 0;
    if (event.type === 'touchmove') {
      currentPosition = event.touches[0].clientX;
    } else {
      currentPosition = event.clientX;
    }
    const diff = currentPosition - startPos;
    currentTranslate = prevTranslate + diff;
  }
}

function dragEnd() {
  prevTranslate = currentTranslate;
  isDragging = false;
}

function updateCarouselPosition() {
  const carouselWidth = carouselTrack.offsetWidth;
  const cardsWidth = Array.from(carouselTrack.children).reduce(
    (totalWidth, card) => totalWidth + card.offsetWidth + 20, // 20px margin-right
    0
  );
  const maxTranslate = carouselWidth - cardsWidth;
  currentTranslate = Math.max(Math.min(currentTranslate, 0), maxTranslate);
  carouselTrack.style.transform = `translateX(${currentTranslate}px)`;
}

window.addEventListener('resize', updateCarouselPosition);
updateCarouselPosition();


// Audio Pausar y Play //
const spkbtn =document.querySelector('.audio1-0vol')
const pausebtn= document.querySelector('.audio1-0pause')
const playbtn = document.querySelector('.audio1-0play')

const audio10 = document.querySelector('.audio10')




playbtn.style.display='none'
pausebtn.style.display='none'

//Desde iCONO // 
spkbtn.addEventListener('click', ()=>{
    spkbtn.style.display = 'none';
    pausebtn.style.display='flex';
    audio10.play();
})
pausebtn.addEventListener('click', ()=>{
  audio10.pause();
  pausebtn.style.display= 'none'
  playbtn.style.display = 'flex'
})
playbtn.addEventListener('click', ()=>{
  audio10.play()
  playbtn.style.display='none'
  pausebtn.style.display = 'flex'
})

// desde 1.5//
const pausavelocidad = document.querySelector('.pausavelocidad')
const playvelocidad =document.querySelector('.playvelocidad')
playvelocidad.style.display ='none';
pausavelocidad.style.display ='none';
const slcaudio10 = document.querySelector('.velocidadopcion2')
const Audio20 = document.querySelector('.audio15')

slcaudio10.addEventListener('click', ()=>{
  Audio20.play();
  playbtn.style.display='none'
  pausebtn.style.display = 'none'
  spkbtn.style.display = 'none'

  pausavelocidad.style.display='flex'
})
pausavelocidad.addEventListener('click', ()=>{
  Audio20.pause();
  pausavelocidad.style.display='none'
  playvelocidad.style.display = 'flex'
})
playvelocidad.addEventListener('click', ()=>{
    Audio20.play();
})
//Audio 2.0//
const slcplay = document.querySelector('.playvelocidad2')
const slcvelocidad2 = document.querySelector('.pausavelocidad2')
const slcaudio30 = document.querySelector('.velocidadopcion3')
const slcaudio2 = document.querySelector('.audio20')

slcplay.style.display='none'
slcvelocidad2.style.display= 'none'

slcaudio30.addEventListener('click', ()=>{
    slcaudio2.play();
    playbtn.style.display='none'
    pausebtn.style.display = 'none'
    spkbtn.style.display = 'none'
    pausavelocidad.style.display='none'
    playvelocidad.style.display = 'none'
    slcvelocidad2.style.display='flex'
})

slcvelocidad2.addEventListener('click', ()=>{
  slcaudio2.pause();
  slcplay.style.display = 'flex'
  slcvelocidad2.style.display='none'
  playbtn.style.display='none'
  pausebtn.style.display = 'none'
  spkbtn.style.display = 'none'
  pausavelocidad.style.display='none'
  playvelocidad.style.display = 'none'
})
slcplay.addEventListener('click', ()=>{
  slcaudio2.play();
  slcplay.style.display = 'none'
  slcvelocidad2.style.display = 'flex'
})
//Audio 1.0//

const slcaudio100 = document.querySelector('.audio10')
const slcplay3 = document.querySelector('.playvelocidad3')
const slcvpausa3 = document.querySelector('.pausavelocidad3')
const slcvelocidad1 = document.querySelector('.velocidadopcion1')

slcplay3.style.display='none'
slcvpausa3.style.display='none'

slcvelocidad1.addEventListener('click',()=>{
  slcaudio100.play();
  slcvpausa3.style.display = 'flex'
  slcplay.style.display = 'none'
  slcvelocidad2.style.display='none'
  playbtn.style.display='none'
  pausebtn.style.display = 'none'
  spkbtn.style.display = 'none'
  pausavelocidad.style.display='none'
  playvelocidad.style.display = 'none'
})

slcvpausa3.addEventListener('click', ()=>{
  slcaudio100.pause();
    slcvpausa3.style.display='none'
  slcplay3.style.display='flex'
  slcplay.style.display = 'none'
  slcvelocidad2.style.display='none'
  playbtn.style.display='none'
  pausebtn.style.display = 'none'
  spkbtn.style.display = 'none'
  pausavelocidad.style.display='none'
  playvelocidad.style.display = 'none'
})
slcplay3.addEventListener('click', ()=>{
  slcaudio100.play();
  slcplay.style.display = 'none'
  slcvelocidad2.style.display='none'
  playbtn.style.display='none'
  pausebtn.style.display = 'none'
  spkbtn.style.display = 'none'
  pausavelocidad.style.display='none'
  playvelocidad.style.display = 'none'
})
