// Funktion til at behandle og vise data
function processData(csvData) {
    // Søjleindekser i arket
    const nameIndex = 0;
    const dateIndex = 1;
    const amountIndex = 2;

    // Gem data i et objekt med standardiserede datoer og navne
    const processedData = {};
    csvData.slice(1).forEach(row => { // Start ved anden række for at springe overskrifter over
        if (row[nameIndex] && row[dateIndex] && row[amountIndex]) { // Kontroller om alle felter er definerede
            const originalName = row[nameIndex].trim(); // Gem det originale navn
            const name = originalName.replace(/[^\w\s]/gi, '').split(' ')[0].toLowerCase(); // Fjern specialtegn og brug kun første navn
            const date = moment(row[dateIndex], ['YYYY-MM-DD', 'MM/DD/YYYY', 'DD/MM/YYYY'], true).format('YYYY.MM.DD'); // Standardiser datoer
            const amount = parseFloat(row[amountIndex]);

            if (!processedData[name]) {
                processedData[name] = [];
            }
            processedData[name].push({date, amount, originalName}); // Gem det originale navn
        }
    });

    // Tilføj alle unikke navne til balances objektet
    const balances = {};
    Object.keys(processedData).forEach(name => {
        balances[name] = 0; // Sæt standard skyld til 0 for alle navne
    });

    // Beregn total indbetaling og skyld for hver person
    Object.keys(processedData).forEach(name => {
        const transactions = processedData[name];
        const totalAmount = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
        balances[name] = totalAmount;
    });

    // Sortér personer efter skyld i faldende rækkefølge
    const sortedBalances = Object.entries(balances).sort((a, b) => b[1] - a[1]);

    // Vis resultater
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '<h2>Personer i faldende skyldsrækkefølge:</h2>';
    sortedBalances.forEach(([name, balance]) => {
        outputDiv.innerHTML += `<p>${name}: ${balance}</p>`;
    });
}

// Funktion til at læse CSV-fil
function readCSV(file) {
    const reader = new FileReader();

    reader.onload = function(event) {
        const csvData = event.target.result.split('\n').map(row => row.split(',')); // Split rækker og kolonner
        processData(csvData);
    };

    reader.readAsText(file);
}

// Lyt efter filvalg og udfør behandling
document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.csv';
    fileInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            readCSV(file);
        }
    });
    document.body.appendChild(fileInput);
});
