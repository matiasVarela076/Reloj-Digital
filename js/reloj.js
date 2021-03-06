const mostrarReloj= ()=>{

 let fecha = new Date();

 let hr = formatoHora(fecha.getHours());
 let min= formatoHora(fecha.getMinutes());
 let seg = formatoHora(fecha.getSeconds()); //Asignamos hr, min, seg a distintas variables
 document.getElementById('hora').innerHTML = `${hr}: ${min}: ${seg}`; //Traemos el id hora y les asignamos las variables

const meses = ['ene', 'feb', 'mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];
const dias = ['dom','lun','mar','mie','jue','vie','sab'];

let diaSemana = dias[fecha.getDay()];
let dia = fecha.getDay();
let mes =  meses[fecha.getMonth()];

let fechaTexto = `${diaSemana}, ${dia} ${mes}`;

//traemos el id fecha del html y lo sobrescribimos

    document.getElementById('fecha').innerHTML = fechaTexto; 
    document.getElementById('contenedor').classList.toggle('animar'); //Para que parpadee a cada segundo gracias a setInterval  y toogle
}



const formatoHora=(hora)=>{

    if(hora <10){
        hora = '0' + hora ; //Si es menor a 10 se le agrega el digito 0
    }
            return hora;
    }

setInterval(mostrarReloj, 1000);// traemos la funcion arrow y le decimos que itere cada segundo

