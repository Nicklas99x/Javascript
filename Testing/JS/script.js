function executeScript(){
    const userScript = document.getElementById('userScript').value;
    const startTime = performance.now();

    try{
        eval(userScript);
    }
    catch(error){
        console.error('Fejl under udførelse af script:', error);
        alert('Der opstod en fejl under kørslen af scriptet. Tjek konsollen for flere detaljer.');
    }
    finally{
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        document.getElementById('executionTime').textContent = `Scriptet kørte i ${executionTime} millisekunder.`;
    }
}