var stringArray = [];
function addStringToArray(x, y) {
    var sum = x + y;
    var newString = "".concat(x, " + ").concat(y, " = ").concat(sum);
    stringArray.push(newString);
    updateResultDiv();
    console.log("\"".concat(newString, "\" er blevet tilf\u00F8jet til arrayet."));
    console.log("Arrayet indeholder nu følgende strenge:");
    console.log(stringArray);
}
function updateResultDiv() {
    var resultDiv = document.getElementById("resultDiv");
    resultDiv.innerHTML = stringArray.join("<br>");
}
function askForInput() {
    var input1 = prompt('Indtast det første tal:');
    var input2 = prompt('Indtast det andet tal:');
    if (input1 !== null && input2 !== null) {
        var t1 = parseInt(input1);
        var t2 = parseInt(input2);
        if (!isNaN(t1) && !isNaN(t2)) {
            addStringToArray(t1, t2);
        }
        else {
            console.log('Ugyldige input. Indtast venligst numeriske værdier.');
        }
        askForInput();
    }
    else {
        console.log("error");
    }
}
askForInput();
