
function sortear() {
  const sorteio = parseInt(Math.random() * 89);
  document.getElementById("sorteio").innerHTML = `<p class="p">Número: ${String(sorteio)}</p>`; 
}

