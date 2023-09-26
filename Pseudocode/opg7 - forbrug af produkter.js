let forbrugStr = "Code,Product,Percentage,CAN,popcorn,90,CAN,potato,99,CAN,rice,80,CAN,quinoa,20,CAN,maple syrup,90,CAN,taco,30,USA,popcorn,99,USA,potato,99,USA,rice,80,USA,quinoa,40,USA,taco,50,USA,maple syrup,40,MEX,popcorn,60,MEX,potato,60,MEX,rice,90,MEX,quinoa,80,MEX,maple syrup,5,MEX,taco,96";
let landeStr = "Code,Name,Population,CAN,Canada,37000000,USA,United States of America,330000000,MEX,Mexico,129000000";

// Funktion for at konvertere CSV-strenge til tabeller
function csvToTable(csvStr) {
  const lines = csvStr.split('\n');
  const header = lines[0].split(',');
  const table = [];

  for (let i = 1; i < lines.length; i++) {
    const row = lines[i].split(',');
    const entry = {};

    for (let j = 0; j < header.length; j++) {
      entry[header[j]] = row[j];
    }

    table.push(entry);
  }

  console.log("1" + lines);
  console.log("2" + header);
  console.log("3" + table);

  return table;
}

// Konverter CSV-strengene til tabeller
const forbrugTable = csvToTable(forbrugStr);
const landeTable = csvToTable(landeStr);

// Funktion for at beregne forbrug pr. produkt og sortere det i faldende rækkefølge
// ...

// Funktion for at beregne forbrug pr. produkt og sortere det i faldende rækkefølge
function beregnForbrug(forbrugTable, landeTable) {
    const result = {};
  
    for (let i = 0; i < forbrugTable.length; i++) {
      const entry = forbrugTable[i];
      const produkt = entry.Product;
      const landekode = entry.Code.trim(); // Fjern eventuelle ekstra mellemrum
      const procentdel = parseInt(entry.Percentage);
  
      if (!result[produkt]) {
        result[produkt] = 0;
      }
  
      // Find befolkningstal for det pågældende land
      const land = landeTable.find(land => land.Code === landekode);
      const befolkning = parseInt(land.Population);
  
      // Beregn antallet af forbrugere for dette produkt i dette land
      const forbrugere = (befolkning * procentdel) / 100;
  
      // Tilføj antallet af forbrugere til resultatet
      result[produkt] += forbrugere;
    }
  
    // Sorter resultatet i faldende rækkefølge
    const sorteretResultat = Object.entries(result).sort((a, b) => b[1] - a[1]);
  
    return sorteretResultat;
  }

// Beregn forbrug og få resultatet
const resultat = beregnForbrug(forbrugTable, landeTable);

console.log("80" + resultat);

// Udskriv resultatet
console.log("Produkt\t\tAntal Forbrugere");
console.log("-----------------------------");
for (const [produkt, antal] of resultat) {
  console.log(`${produkt}\t\t${antal}`);
}
