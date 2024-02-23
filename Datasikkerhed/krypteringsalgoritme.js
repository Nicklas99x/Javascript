function caesarAlgoritm(input, key){
    var output = '';

    if (typeof input !== 'string') {
        throw new Error('Input skal være en streng');
    }

    for (let i = 0; i < input.length; i++) {
        // Få tegnets unicode-værdi
        let charCode = input.charCodeAt(i);

        // Krypter eller dekrypter kun bogstaver (store og små)
        if (charCode >= 65 && charCode <= 90) {
            // Store bogstaver
            output += String.fromCharCode(((charCode - 65 + key + 26) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            // Små bogstaver
            output += String.fromCharCode(((charCode - 97 + key + 26) % 26) + 97);
        } else {
            // Hvis det ikke er et bogstav, tilføj bare det samme tegn til output
            output += input.charAt(i);
        }
    }

    return output;
}