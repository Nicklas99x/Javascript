function multiplyTwoNumbers(x:number, y: number){
    let hex1 = x.toString(16);
    let hex2 = y.toString(16);

    return [hex1, hex2];
}

const input1: string | null = prompt("Give us a number");
const input2: string | null = prompt("Give us another number");

if (input1 !== null && input2 !== null) {
  const a: number = parseInt(input1);
  const b: number = parseInt(input2);
  // Now you can safely use 'a' and 'b' as numbers

  console.log(multiplyTwoNumbers(a, b));
} else {
  console.log("error");
}