function caesarAlgoritm(input, key) {
    var output = '';

    if (typeof input !== 'string') {
        throw new Error('Input skal være en streng');
    }

    for (let i = 0; i < input.length; i++) {
        let char = input[i];

        // Krypter eller dekrypter kun bogstaver (store og små)
        if (/[a-zA-Z]/.test(char)) {
            // Få tegnets unicode-værdi
            let charCode = input.charCodeAt(i);
            // Store bogstaver
            if (charCode >= 65 && charCode <= 90) {
                output += String.fromCharCode(((charCode - 65 + key + 26) % 26) + 65);
            }
            // Små bogstaver
            else {
                output += String.fromCharCode(((charCode - 97 + key + 26) % 26) + 97);
            }
        } else {
            // Behold mellemrum uændret
            output += char;
        }
    }

    return output;
}
