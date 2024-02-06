const fs = require('fs');
const xmlbuilder = require('xmlbuilder');

var csvFile = "Deutsche_Bahn.csv";
var xmlFile = "deutschebahn.xml";

function verifyAttributeNameValidity(name){
    return name.replace(/[^a-zA-Z0-9_]/g, '_');
}

function convertCsvToXml(csvFilePath, xmlFilePath){
    //Opret xml rod
    let root = xmlbuilder.create('deutschebahn');
    //læs hver linje af csv filen ved readFileAsync
    let lines = fs.readFileSync(csvFilePath, 'utf-8').split('\n');
    //fjern blanke linjer fra enden af filen
    if(lines[lines.length - 1].trim() === ''){
        lines.pop();
    }
    //hent overskrifter
    let headers = lines.shift().trim().split(';').map(header => verifyAttributeNameValidity(header));
    //opret xml element for hver række i csv filen
    lines.forEach(line => {
        let values = line.trim().split(";");
        let item = root.ele('station');
        headers.forEach((header, index) => {
            let element = item.ele(header);
            element.text(values[index]);
        });
    });
    //skriv xml til filen
    fs.writeFileSync(xmlFilePath, root.end({ pretty: true}));
}

convertCsvToXml(csvFile, xmlFile);