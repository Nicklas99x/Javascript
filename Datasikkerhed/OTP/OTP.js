// Funktion til at generere en nøgle af en given længde
function generateKey(length) {
    var key = '';
    for (var i = 0; i < length; i++) {
        key += String.fromCharCode(Math.floor(Math.random() * 256));
    }
    return key;
}
// Funktion til at kryptere en besked med en given nøgle
function encrypt(message, key) {
    var encryptedMessage = '';
    for (var i = 0; i < message.length; i++) {
        encryptedMessage += String.fromCharCode(message.charCodeAt(i) ^ key.charCodeAt(i));
    }
    return encryptedMessage;
}
// Funktion til at dekryptere en besked med den samme nøgle
function decrypt(encryptedMessage, key) {
    var decryptedMessage = '';
    for (var i = 0; i < encryptedMessage.length; i++) {
        decryptedMessage += String.fromCharCode(encryptedMessage.charCodeAt(i) ^ key.charCodeAt(i));
    }
    return decryptedMessage;
}
// Funktion til at håndtere kryptering af besked indtastet af brugeren
function encryptMessage() {
    var message = document.getElementById("message").value;
    var key = generateKey(message.length); // Generer nøgle
    var encryptedMessage = encrypt(message, key);
    document.getElementById("output").innerText = "Krypteret besked: " + encryptedMessage;

    // Gem nøglen i et skjult felt for senere brug
    document.getElementById("key").value = key;
}
// Funktion til at håndtere dekryptering af den krypterede besked
function decryptMessage() {
    var encryptedMessage = document.getElementById("output").innerText.split(": ")[1];
    var key = document.getElementById("key").value; // Hent nøglen
    var decryptedMessage = decrypt(encryptedMessage, key);
    document.getElementById("output").innerText += "\nDekrypteret besked: " + decryptedMessage;
}
