function multiplyTwoNumbers(x, y) {
    let sum = x*y;
    let hex = sum.toString(16);
    return hex;
}
var input1 = prompt("Give us a number");
var input2 = prompt("Give us another number");
if (input1 !== null && input2 !== null) {
    var a = parseInt(input1);
    var b = parseInt(input2);
    // Now you can safely use 'a' and 'b' as numbers
    let result = multiplyTwoNumbers(a, b);
    console.log(result);
}
else {
    console.log("error");
}
