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

    // Opdater spillerens og dealerens kort på skærmen
    opdaterKort('spillerKort', data.spillerKort);
    opdaterKort('dealerKort', data.dealerKort);
}

// Funktion til at opdatere kortene på skærmen
function opdaterKort(elementId, kortArray) {
    const kortElement = document.getElementById(elementId);
    kortElement.innerHTML = `${elementId === 'spillerKort' ? 'Spillerens' : 'Dealerens'} Kort: `;
    
    // Tilføj hvert kort til elementet
    kortArray.forEach((kort) => {
        const kortVisning = document.createElement('span');
        kortVisning.textContent = `${kort.type} ${kort.værdi}, `;
        kortElement.appendChild(kortVisning);
    });
}
