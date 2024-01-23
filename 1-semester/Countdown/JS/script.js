function countDown(){
    let n = prompt("indtast et tal du vil tælle ned fra");

    if(n === 0)
    {
        console.log("gå");
    }
}

function faculty(n){
    if(n < 2)
    {
        return 1;
    }
    else
    {
        return n * faculty(n - 1);
    }
}

const n = prompt("indtast et tal");
const result = faculty(n);

console.log(result);

function facultyButIterative(){
    const n = prompt("indtast tal");

    let result = 0;

    for(i = 0; i <= n; i++){
        result *= i;
    }

    console.log(result);
}

function cubeFunction(n){ 
    let dicethrows = [];

    for(i = 0; i < n; i++){
        let throwDice = Math.floor(Math.random()* 6) + 1;
        dicethrows[throwDice - 1]++;
    }

    return dicethrows;
}
let m = prompt("throw the cube");
const results = cubeFunction(m);

console.log(`Results after ${m} throws:`);
for (let i = 0; i < results.length; i++) {
  console.log(`Side ${i + 1}: ${results[i]} times`);
}