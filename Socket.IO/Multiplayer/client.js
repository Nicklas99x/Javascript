// Opret en WebSocket-forbindelse til serveren
const socket = io();

// Lyt efter beskeder fra serveren
socket.on('spilOpdatering', (data) => {
    // Opdater spiltilstand baseret på data fra serveren
    opdaterSpiltilstand(data);
});

// Lyt til knappen "Træk kort" og send anmodning til serveren
document.getElementById('trækKort').addEventListener('click', () => {
    socket.emit('trækKortAnmodning');
});

// Funktion til at opdatere spiltilstand på klienten
function opdaterSpiltilstand(data) {
    // Opdater spillerens og dealerens hænder på skærmen
    document.getElementById('spillerHånd').textContent = `Spillerens Hånd: ${data.spillerHånd}`;
    document.getElementById('dealerHånd').textContent = `Dealerens Hånd: ${data.dealerHånd}`;

    // Vis resultatet, hvis spillet er afsluttet
    if (data.spilAfgjort) {
        document.getElementById('resultat').textContent = `Resultat: ${data.resultat}`;
    } else {
        document.getElementById('resultat').textContent = '';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const trækKortKnap = document.getElementById('trækKort');
  
    trækKortKnap.addEventListener('click', function() {
      // Send en anmodning til serveren om at trække 2 kort
      socket.emit('træk-2-kort');
    });
  });
  