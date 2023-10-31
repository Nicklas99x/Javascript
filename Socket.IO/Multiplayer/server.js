const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const publicPath = path.join(__dirname, '/');

// Server statiske filer fra rodmappen
app.use(express.static(publicPath));

// Rute for rodstien, der serverer din HTML-fil
app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html')); // Opdater til din filnavn
});

const players = [];

io.on('connection', (socket) => {
  console.log('A player connected');
  
  // Opret en ny spiller og tilføj den til listen
//   const player = { id: socket.id, x: canvas.width / 2, y: canvas.height - 30 };
//   players.push(player);

  // Send alle spillere til den nyligt tilsluttede spiller
  socket.emit('all-players', players);

  // Lyt til spilleropdateringer fra klienten
  socket.on('update', (data) => {
    // Find og opdater den korrekte spiller
    const updatedPlayer = players.find((p) => p.id === socket.id);
    if (updatedPlayer) {
      updatedPlayer.x = data.x;
      updatedPlayer.y = data.y;
    }
    
    // Broadcast opdateringer til alle spillere
    io.emit('update', players);
  });

  socket.on('disconnect', () => {
    console.log('A player disconnected');
    // Fjern den afbrudte spiller fra listen
    const index = players.findIndex((p) => p.id === socket.id);
    if (index !== -1) {
      players.splice(index, 1);
    }
  });
});

server.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});

// Opret en stak med kort (værdier 2-10 og billedkort)
function opretKortstok() {
    const kortstok = [];
    const korttyper = ['Hjerter', 'Ruder', 'Klør', 'Spar'];
    const kortværdier = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Knægt', 'Dame', 'Konge', 'Es'];

    for (let type of korttyper) {
        for (let værdi of kortværdier) {
            kortstok.push({ type, værdi });
        }
    }

    return kortstok;
}

// Træk et tilfældigt kort fra stakken
function trækKort(stak) {
    const tilfældigtIndex = Math.floor(Math.random() * stak.length);
    const trukketKort = stak.splice(tilfældigtIndex, 1)[0];
    return trukketKort;
}

// Beregn den samlede værdi af en hånd
function beregnHåndVærdi(hånd) {
    let værdi = 0;
    let antalEs = 0;

    for (let kort of hånd) {
        if (kort.værdi === 'Es') {
            værdi += 11;
            antalEs++;
        } else if (['Knægt', 'Dame', 'Konge'].includes(kort.værdi)) {
            værdi += 10;
        } else {
            værdi += parseInt(kort.værdi);
        }
    }

    // Justér for Es, hvis nødvendigt
    while (antalEs > 0 && værdi > 21) {
        værdi -= 10;
        antalEs--;
    }

    return værdi;
}

// Implementer spillogik og afgør resultatet
function spilBlackjack() {
    const kortstok = opretKortstok();
    const spillerHånd = [trækKort(kortstok), trækKort(kortstok)];
    const dealerHånd = [trækKort(kortstok), trækKort(kortstok)];

    // Beregn værdien af spillerens hånd
    const spillerVærdi = beregnHåndVærdi(spillerHånd);

    // Beregn værdien af dealerens hånd
    const dealerVærdi = beregnHåndVærdi(dealerHånd);
    
    // Din spillogik her...
    let resultat;
    if (spillerVærdi > 21) {
        resultat = 'dealer vandt';
    } else if (dealerVærdi > 21) {
        resultat = 'spiller vandt';
    } else if (spillerVærdi > dealerVærdi) {
        resultat = 'spiller vandt';
    } else if (spillerVærdi < dealerVærdi) {
        resultat = 'dealer vandt';
    } else {
        resultat = 'uafgjort';
    }

    return resultat; // Returnér resultatet af spillet (f.eks. "spiller vandt", "dealer vandt", "uafgjort")
}

// Eksempel på brug af funktionen
const resultat = spilBlackjack();
console.log(resultat);

