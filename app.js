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
    intervTiempo = window.setInterval(actualizarCronometro, 1000);
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



// divisores

