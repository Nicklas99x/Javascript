//Konverter streng til binær
function stringToBinary(str) {
    let binary = '';
    for (let i = 0; i < str.length; i++) {
        // Konverter hvert tegn til dets ASCII-værdi og derefter til binær
        let charBinary = str.charCodeAt(i).toString(2);
        // Tilføj førende nuller, hvis nødvendigt, for at sikre en 8-bit binær værdi
        while (charBinary.length < 8) {
            charBinary = '0' + charBinary;
        }
        binary += charBinary;
    }
    return binary;
}
//XOR operation på 2 strings
function bitwiseXOR(str1, str2) {
    let result = '';
    //Sikre at de to strenge har samme længde
    const maxLength = Math.max(str1.length, str2.length);
    str1 = str1.padStart(maxLength, '0');
    str2 = str2.padStart(maxLength, '0');
    // Udfør bitvis XOR-operation
    for (let i = 0; i < maxLength; i++) {
        result += str1[i] ^ str2[i];
    }
    return result;
}
//Klartekst og nøgle
const plaintext = "Hello there";
const key = "GeneralKenobi";
//Konverter klartekst og nøgle til binær
const plaintextBinary = stringToBinary(plaintext);
const keyBinary = stringToBinary(key)
//Udfør bitvis XOR-operation mellem klartekst og nøgle
const ciphertextBinary = bitwiseXOR(plaintextBinary, keyBinary);
console.log("Klartekst: ", plaintext)
console.log("Klartekst (binær):", plaintextBinary);
console.log("Nøgle (binær):", keyBinary);
console.log("Chiffertekst (binær):", ciphertextBinary);