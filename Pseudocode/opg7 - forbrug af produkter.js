//Starter data
let forbrugStr="Code,Product,Percentage,CAN,popcorn,90,CAN,potato,99,CAN,rice,80,CAN,quinoa,20,CAN,maple syrup,90,CAN,taco,30,USA,popcorn,99,USA,potato,99,USA,rice,80,USA,quinoa,40,USA,taco,50,USA,maple syrup,40,MEX,popcorn,60,MEX,potato,60,MEX,rice,90,MEX,quinoa,80,MEX,maple syrup,5,MEX,taco,96";
let landeStr="Code,Name,Population,CAN,Canada,37000000,USA,United States of America,330000000,MEX,Mexico,129000000";

//Behandel csv'erne
let consumerArray;
let countryArray;

//Gem data
let consumerTable = [];
let countryTable = [];
//Brug til print
let list = [];

//lav csv filerne om til 2 arrays så de kan bearbejdes
function dataProcessing() {
    consumerArray = Array.from(forbrugStr.split(","));
    countryArray = Array.from(landeStr.split(","));
}

//Der skal laves et array over forbrug af hver ting fra hvert land dette reulterer i 18 arrays
function conArrInit() {
    
    for (i = 0; i < consumerArray.length; i+=3) {
        let tempArr = [consumerArray[i], consumerArray[i+1], consumerArray[i+2]];
        consumerTable.push(tempArr);
    }
}

//Lav arrays for lande med landekoder (der der 3 forskellige lande. Mexico, Canada og USA)
function countryArrInit() {

for (i = 0; i < countryArray.length; i+=3) {
    let tempArray = [countryArray[i], countryArray[i+1], countryArray[i+2]];
    countryTable.push(tempArray);
}
}


//Beregn hvor meget mad der forbruges. Tager 2 parametre. 
//Først index i den første tabel og så hvilken mad der skal regnes forbrug på
function consumptionCounter(x, name) {
    //j is used to access data from the second table
    let j = 1;
    //initializing amount, which is to be used to sum up the three countries' consumption.
    let amount = 0;
    
    //Checks the three amounts of consumption in % within the first table, and calculates it based 
    //on their population.
    for (i = x; i < consumerTable.length; i+= 6) {
        //sums the different countries consumptions
        amount += (consumerTable[i][2]* countryTable[j][2])/100;
        //moves one row down in the second table
        j++;  
    }
    //saves this object in an array, so we can sort it descendigly later
    list.push({name, amount});
}

//Udskriv forbrug a mad i descneding order
function printConsumption() {
    consumptionCounter(1, "popcorn");
    consumptionCounter(2, "potato");
    consumptionCounter(3, "rice");
    consumptionCounter(4, "quinoa");
    consumptionCounter(5, "maple syrup");
    consumptionCounter(6, "taco");

    // Sorts the list to descending
    list.sort((a, b) => b.amount - a.amount);

    // Prints the sorted list
    list.forEach(item => {
        console.log(`${item.amount} people ate ${item.name} in all the countries combined`);
    });
}

//invoke de 4 functions lavet for at aktivere programmet
dataProcessing();
conArrInit();
countryArrInit();
printConsumption();


