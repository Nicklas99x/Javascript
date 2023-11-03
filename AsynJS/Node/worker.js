// worker.js
let simulationInterval = null;

self.addEventListener("message", (e) => {
    if (e.data === "start") {
        // Start simuleringen
        simulationInterval = setInterval(() => {
            const randomValue = Math.random() * 100;
            self.postMessage(`Modstanderens træk: ${randomValue}`);
        }, 1000);

        console.log(randomValue);
    } 
    else if (e.data === "stop") {
        clearInterval(simulationInterval);
        self.postMessage("Simulation stoppet.");
        self.close(); // Luk web workeren
    }
});
