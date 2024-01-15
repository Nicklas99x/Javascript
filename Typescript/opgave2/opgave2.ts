const stringArray: string[] = [];

function addStringToArray(x:number, y:number){
    let sum = x + y;
    let newString = `${x} + ${y} = ${sum}`

    stringArray.push(newString);
    updateResultDiv();
    console.log(`"${newString}" er blevet tilføjet til arrayet.`);
    console.log("Arrayet indeholder nu følgende strenge:");
    console.log(stringArray);
}

function updateResultDiv() {
    const resultDiv:any = document.getElementById("resultDiv");
    resultDiv.innerHTML = stringArray.join("<br>");
  }

function askForInput(){
    const input1:string | null = prompt('Indtast det første tal:');
    const input2:string | null = prompt('Indtast det andet tal:');

    if(input1 !== null && input2 !== null) {
        const t1: number = parseInt(input1);
        const t2: number = parseInt(input2);
      
        if(!isNaN(t1) && !isNaN(t2)) {
            addStringToArray(t1, t2);
          } 
        else{
            console.log('Ugyldige input. Indtast venligst numeriske værdier.');
        }
        askForInput();
      } 
    else{
        console.log("error");
    }
}

askForInput();