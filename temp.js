const agregarTiempo = document.getElementById('boton-ingresar');
const hiddenup = document.getElementsByClassName('botones-up')[0];
const hiddend = document.getElementsByClassName('botones-up')[1];


const up = document.getElementsByClassName('up')[2];
const down = document.getElementsByClassName('down')[2];
const mins = document.getElementsByClassName('up')[1];
const minsd = document.getElementsByClassName('down')[1];
const hr = document.getElementsByClassName('up')[0];
const hrd = document.getElementsByClassName('down')[0];

down.addEventListener('click', reducirCronometro)
up.addEventListener('click', actualizarCronometro)

agregarTiempo.addEventListener('click', () => {
  hiddenup.classList.toggle('hidden');
  hiddend.classList.toggle('hidden');
})

mins.addEventListener('click', () => {
  minutos++;
  if (minutos >= 60) {
    minutos = 0;
  }
  const SegFormat = asignarFormato(segundos);
  const MinFormat = asignarFormato(minutos);
  const HrFormat = asignarFormato(horas);
  
  cronometro.innerText = `${HrFormat}:${MinFormat}:${SegFormat}`;
})
minsd.addEventListener('click', () => {
  minutos--;
  if (minutos < 0) {
    minutos = 59;
  }
  const SegFormat = asignarFormato(segundos);
  const MinFormat = asignarFormato(minutos);
  const HrFormat = asignarFormato(horas);

  cronometro.innerText = `${HrFormat}:${MinFormat}:${SegFormat}`;
})


hr.addEventListener('click', () => {
  horas++;
  if (horas >= 1000) {
    horas = 0;
  }
  const SegFormat = asignarFormato(segundos);
  const MinFormat = asignarFormato(minutos);
  const HrFormat = asignarFormato(horas);

  cronometro.innerText = `${HrFormat}:${MinFormat}:${SegFormat}`;
})
hrd.addEventListener('click', () => {
  horas--;
  if (horas < 0) {
    horas = 999;
  }
  const SegFormat = asignarFormato(segundos);
  const MinFormat = asignarFormato(minutos);
  const HrFormat = asignarFormato(horas);

  cronometro.innerText = `${HrFormat}:${MinFormat}:${SegFormat}`;
})



function reducirCronometro() {

 segundos--;
  
 if (segundos < 0) {
  segundos = 59;
  minutos--;

  if (minutos < 0) {
    minutos = 59;
    horas--;

    if (horas < 0) {
      // Cronómetro terminado, puedes realizar alguna acción aquí
      segundos = 0;
      minutos = 0;
      horas = 0;
      
      window.clearInterval(intervTiempo)
      botonIniPau.innerHTML = '<i class="fa-solid fa-play"></i>'
      botonIniPau.classList.remove('pausar');
      botonIniPau.classList.add('iniciar')
      estadoCronometro = 'pausado'
    }
  }
  
}
const SegFormat = asignarFormato(segundos);
const MinFormat = asignarFormato(minutos);
const HrFormat = asignarFormato(horas);

cronometro.innerText = `${HrFormat}:${MinFormat}:${SegFormat}`;

}

const cronometro = document.getElementById('cronometro');
const botonIniPau = document.getElementById('boton-inicio-pausa');
const btnReiniciar = document.getElementById('boton-reiniciar');

let [horas, minutos, segundos] = [0, 0, 0];

let intervTiempo;
let estadoCronometro = 'pausado';

function actualizarCronometro() {
 
  segundos++;

  if (segundos / 60 === 1) {
      segundos = 0;
      minutos++;

      if (minutos / 60 === 1) {
        minutos = 0
        horas++;
      }
  }

  const SegFormat = asignarFormato(segundos);
  const MinFormat = asignarFormato(minutos);
  const HrFormat = asignarFormato(horas);

  cronometro.innerText = `${HrFormat}:${MinFormat}:${SegFormat}`;

}

function asignarFormato (unidadTiempo) {
  return unidadTiempo < 10 ? '0' + unidadTiempo : unidadTiempo;
}

botonIniPau.addEventListener('click', function() {
  if (estadoCronometro === 'pausado') {
    intervTiempo = window.setInterval(reducirCronometro, 1000);
    botonIniPau.innerHTML = '<i class="fa-solid fa-pause"></i>';
    botonIniPau.classList.remove('iniciar') 
    botonIniPau.classList.add('pausar')
    estadoCronometro = 'activo' 
  } else {
    window.clearInterval(intervTiempo)
    botonIniPau.innerHTML = '<i class="fa-solid fa-play"></i>'
    botonIniPau.classList.remove('pausar');
    botonIniPau.classList.add('iniciar')
    estadoCronometro = 'pausado'
  }
})

btnReiniciar.addEventListener('click', function(){
  window.clearInterval(intervTiempo);
  
  horas = 0;
  minutos = 0;
  segundos = 0;
  
  cronometro.innerText = '00:00:00'
   if (estadoCronometro === 'activo') {
    window.clearInterval(intervTiempo)
    botonIniPau.innerHTML = '<i class="fa-solid fa-play"></i>'
    botonIniPau.classList.remove('pausar');
    botonIniPau.classList.add('iniciar')
    estadoCronometro = 'pausado'
   }

})