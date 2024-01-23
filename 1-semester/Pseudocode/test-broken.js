let output = document.getElementById('output');

let string = prompt("string");

const logCombo = (str) => {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
        const newLi = document.createElement('li');
        
        newLi.innerHTML = str[i] + str[j];
        output.append(newLi);
    }
  }
  console.log(output);
}

logCombo(string);

function removeReverseCombos(str) {
  let uniqueCombos = new Set();
  let result = [];

  // Remove spaces from the input string
  str = str.replace(/\s/g, "");

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      const combo = str[i] + str[j];
      const reverseCombo = str[j] + str[i]; // Create the reverse combination

      // Check if both the combination and its reverse are not in the set
      if (!uniqueCombos.has(combo) && !uniqueCombos.has(reverseCombo)) {
        result.push(combo);
        uniqueCombos.add(combo);
      }
    }
  }

  return result;
}

let uniqueCombos = removeReverseCombos(string);

for (const combo of uniqueCombos) {
  const newLi = document.createElement('li');
  newLi.innerHTML = combo;
  output.append(newLi);
}

console.log(uniqueCombos.length);

//input
//For I die Prinzessin der Verurteilung auch die Immernachtreich Fischl von Luftschloss Narfidort have hereby fixed thou and thus you should be grateful