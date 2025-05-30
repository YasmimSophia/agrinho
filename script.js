function atualizartempo(){


var display = document.querySelector (".display");
var relogio = new Date();
var horario = corrigirHorario(relogio.getHours()) =":"
 + corrigirHorario(relogio.getMinutes()) +":" + corrigirHorario(relogio.getSeconds());
display.textContent = horario;
}

function corrigirHorario(numero){
if (numero< 10){
 numero = "0" + numero;

}
return numero;
}

atualizarTempo();
setInterval(atualizarTempo, 1000);   
   
console.log(horario);

