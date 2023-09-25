function checkWhichNumberIsLargest(){
    let num1 = document.getElementById("numberOne").value;
    let num2 = document.getElementById("numberTwo").value;
    let num3 = document.getElementById("numberThree").value;

    if(num1 > num2 && num1 > num3)
    {
        alert(num1 + " is the largest number");
    }
    else if(num2 > num1 && num2 > num3)
    {
        alert(num2 + " is the largest number");
    }
    else if(num3 > num1 && num3 > num2)
    {
        alert(num3 + " is the largest number");
    }
    else
    {
        alert("two or more numbers are equal");
    }
}