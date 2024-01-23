//import fs og readline så jeg kan læse spørgsmål fil og kommunikere gennem terminalen
const fs = require('fs');
const readline = require('readline');

//gem fil stier
const questionsFile = 'Q&A.txt';
const answersFile = 'Q&A_Results.txt';

// Funktion til at læse spørgsmål fra filen
function læsSpørgsmålFraFil(filnavn) {
    const spørgsmål = fs.readFileSync(filnavn, 'utf8').split('\n');
    return spørgsmål.map(spørgsmål => spørgsmål.trim());
}

// Funktion til at gemme svar i en tekstfil
function gemSvar(svarListe, svarFilnavn) {
    const svarTekst = svarListe.map(item => `${item.spørgsmål}: ${item.svar}`).join('\n');
    fs.writeFileSync(svarFilnavn, svarTekst);
}

// Funktion til at udskrive spørgsmål og svar
function udskrivSvar(spørgsmålListe, svarListe) {
    console.log('Dine svar:');
    spørgsmålListe.forEach((spørgsmål, index) => {
        console.log(spørgsmål + ': ' + svarListe[index].svar);
    });
}

// Funktion til at stille spørgsmål til brugeren og gemme deres svar
function stilSpørgsmålOgGemSvar(spørgsmålListe, svarFilnavn) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    const svarListe = [];

    //stil brugeren de spørgsmål der står i filen
    function spørg(index) {
        if (index === spørgsmålListe.length) {
            gemSvar(svarListe, svarFilnavn);
            udskrivSvar(spørgsmålListe, svarListe);
            rl.close();
        } 
        else 
        {
            rl.question(spørgsmålListe[index] + ' ', (svar) => {
                svarListe.push({ spørgsmål: spørgsmålListe[index], svar });
                spørg(index + 1);
            });
        }
    }

    //spørg
    spørg(0);
}

//Kald på de 2 vitigste funktioner for at få programmet til at køre
const spørgsmålListe = læsSpørgsmålFraFil(questionsFile);
stilSpørgsmålOgGemSvar(spørgsmålListe, answersFile);
