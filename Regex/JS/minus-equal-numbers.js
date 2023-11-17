function insertSigns(str){
    const evenRegex = /(\d)(?=\1)/g;
    // Regex for at finde ens ulige tal ved siden af hinanden
    const oddRegex = /([13579])(?=\1)/g;

    const result = str
    .replace(evenRegex, '-$1')
    .replace(oddRegex, '+$1');

  return result;
}

const inputString = "XXX015245968";
const modifiedString = insertSigns(inputString);
console.log(modifiedString);