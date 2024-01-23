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

function wtf(){
    var arr = [1, 2, 1, 2, 1, 2];

    for(i = 0; i < arr.length - 1; i++)
    {
        if(arr[i] > arr[i] + 1)
        {
            return false;
        }
    }

    return true;
}

console.log(wtf());

function wtfPart2(array){
    const n = array.length;

    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
  
      // Find det mindste element i resten af arrayet
      for (let j = i + 1; j < n; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
  
      // Byt det mindste element med elementet i indeksvariablen
      if (minIndex !== i) {
        const temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
      }
    }

    console.log(array);
}

var array = [12, 100, 25, 10, 5, 67, 0];
wtfPart2(array);

function wtfPart3(A, v){
    let low = 0;
    let high = A.length-1;

    while (low <= high)
    {
        mid = (low + high)/2;
        Math.floor(mid);
        if(v == A[mid])
        {
            return mid;
        }
        else if (v > A[mid])
        {
            low = mid + 1
        }
        else
        {
            high = mid - 1
        }
    }
}

var A = array[2, 20, 25, 40, 50, 80, 100];
var v = 20;
wtfPart3(A, v);