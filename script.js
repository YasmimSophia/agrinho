function atualizarTempo() {
    const display = document.querySelector(".display");
    const relogio = new Date();
    const horario = `${corrigirHorario(relogio.getHours())}:${corrigirHorario(relogio.getMinutes())}:${corrigirHorario(relogio.getSeconds())}`;
    display.textContent = horario;
}

function corrigirHorario(numero) {
    return numero < 10 ? `0${numero}` : numero;
}

atualizarTempo();
setInterval(atualizarTempo, 1000);

