window.onload = function() {
    setInterval(getFrequency, 1000); // Fetch frequency every second
};

function getFrequency() {
    var url = 'https://netzfrequenzmessung.de:9081/frequenz02a.xml?c=' + Math.round(Math.random() * 100000) * 31;
    
    fetch(url)
        .then(response => response.text())
        .then(data => {
            var parser = new DOMParser();
            var xmlDoc = parser.parseFromString(data, "text/xml");
            console.log(xmlDoc); // Print the entire XML document to console
            
            var rTags = xmlDoc.getElementsByTagName("r");
            var frequency = null;

            for (var i = 0; i < rTags.length; i++) {
                var rTag = rTags[i];
                if (rTag.getElementsByTagName("f2").length > 0) {
                    frequency = rTag.getElementsByTagName("f2")[0].textContent;
                    break; // Break the loop once frequency is found
                }
            }

            if (frequency) {
                displayFrequency(frequency);
            } else {
                console.log('Error: Frequency element not found in XML');
            }
        })
        .catch(error => {
            console.log('Error fetching frequency:', error);
        });
}

function displayFrequency(frequency) {
    var canvas = document.getElementById("frequencyCanvas");
    var ctx = canvas.getContext("2d");

    // Clear previous drawings
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Define color based on frequency range
    var color = "#ff0000"; // Default to red
    if (frequency >= 49.98 && frequency <= 50.02) {
        color = "#00ff00"; // Green
    } else if ((frequency > 49.9 && frequency < 49.98) || (frequency >= 50.02 && frequency < 50.1)) {
        color = "#ffff00"; // Yellow
    }

    // Draw colored rectangle on canvas
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Display current frequency
    var frequencyElement = document.getElementById("frequency");
    frequencyElement.textContent = "Current Frequency: " + frequency + " Hz";
}
