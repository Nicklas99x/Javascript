// Hent alle HTML-tags
var tags = document.getElementsByTagName("*");
// Iterer igennem tags og udskriv dem i storbogstaver
for (var i = 0; i < tags.length; i++) {
    console.log(tags[i].tagName.toUpperCase());
}

function beregnMoms(price, momsSats, danskMoms, danskTotalPrice) {
    var momsBelob = (price * momsSats) / 100;
    var totalPrice = price + momsBelob;

    document.getElementById(danskMoms).textContent = momsBelob.toFixed(2);
    document.getElementById(danskTotalPrice).textContent = totalPrice.toFixed(2);
}

console.log(document.getElementById("danskTotalPrice"));

// Opret en specifik dansk moms-beregning ved at binde momssatsen
var danskMomsBeregning = beregnMoms.bind(null, 25, "danskMoms", "danskTotalPrice"); // Danmark har en momssats på 25%

// Lyt efter klik på knappen og udfør generel moms-beregning
document.getElementById("calcBtn").addEventListener("click", function () {
    var varePris = parseFloat(document.getElementById("price").value);
    var momsSats = parseFloat(document.getElementById("momsSats").value);

    if (!isNaN(varePris) && !isNaN(momsSats)) {
        beregnMoms(varePris, momsSats, "andenMoms", "andenTotalPrice");
        danskMomsBeregning(varePris);
    }
});
