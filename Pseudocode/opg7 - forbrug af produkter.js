// Starter data
const forbrugStr = "Code,Product,Percentage,CAN,popcorn,90,CAN,potato,99,CAN,rice,80,CAN,quinoa,20,CAN,maple syrup,90,CAN,taco,30,USA,popcorn,99,USA,potato,99,USA,rice,80,USA,quinoa,40,USA,taco,50,USA,maple syrup,40,MEX,popcorn,60,MEX,potato,60,MEX,rice,90,MEX,quinoa,80,MEX,maple syrup,5,MEX,taco,96,USA,burger,99";
const landeStr = "Code,Name,Population,CAN,Canada,37000000,USA,United States of America,330000000,MEX,Mexico,129000000";

// Gem data i objekter
const consumerData = {};
const countryData = {};

// Lav csv-filerne om til objekter
function dataProcessing() {
  const forbrugArray = forbrugStr.split(",");
  const landeArray = landeStr.split(",");

  for (let i = 0; i < forbrugArray.length; i += 3) {
    const code = forbrugArray[i];
    const product = forbrugArray[i + 1];
    const percentage = parseFloat(forbrugArray[i + 2]);

    if (!consumerData[code]) {
      consumerData[code] = [];
    }
    consumerData[code].push({ product, percentage });
  }
  for (let i = 0; i < landeArray.length; i += 3) {
    const code = landeArray[i];
    const name = landeArray[i + 1];
    const population = parseInt(landeArray[i + 2]);

    countryData[code] = { name, population };
  }
}

// Beregn forbrug af mad
function consumptionCounter() {
  const consumption = {};

  for (const countryCode in consumerData) {
    for (const { product, percentage } of consumerData[countryCode]) {
      //sæt consumption til 0 hvis der ikke er nogen consumption
      if (!isNaN(percentage)) {
        if (!consumption[product]) {
            consumption[product] = 0;
          }
          //dividere med 100 af matematiske årsager
          consumption[product] += (percentage * countryData[countryCode].population) / 100;
      }
    }
  }
  return consumption;
}

// Udskriv forbrug af mad i descending order
function printConsumption() {
    const consumption = consumptionCounter();

    //find entries i consumption og sorter dem i descending order
    const sortedConsumption = Object.entries(consumption)
      .sort((a, b) => b[1] - a[1]);
  
    sortedConsumption.forEach(([product, amount]) => {
      console.log(`${amount} mennesker spiste ${product} på tværs af alle lande`);
    });
}  

// Invoke de 2 funktioner lavet for at aktivere programmet
dataProcessing();
printConsumption();