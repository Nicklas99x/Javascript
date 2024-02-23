document.addEventListener("DOMContentLoaded", function() {
    let encryptedText = ""; // Global variabel til at gemme den krypterede tekst

    document.getElementById("encryptBtn").addEventListener("click", function() {
        let inputText = document.getElementById("inputText").value;
        let key = parseInt(document.getElementById("key").value);

        if (!inputText || isNaN(key)) {
            alert("Indtast venligst gyldig tekst og nøgle.");
            return;
        }

        encryptedText = caesarAlgoritm(inputText, key);
        document.getElementById("encryptedText").textContent = "Krypteret tekst: " + encryptedText;
    });

    document.getElementById("decryptBtn").addEventListener("click", function() {
        let key = parseInt(document.getElementById("key").value);

        if (!encryptedText || isNaN(key)) {
            alert("Indtast venligst gyldig krypteret tekst og nøgle.");
            return;
        }

        let decryptedText = caesarAlgoritm(encryptedText, -key);
        document.getElementById("result").textContent = "Dekrypteret tekst: " + decryptedText;
    });
});
