const fruits = {
    apple: () => {
        console.log("Æbler");
    },
    banana:() => {
        console.log("Bananer");
    },
    orange:() => {
        console.log("Appelsiner");
    },
    pear: () => {
        console.log("Pærer");
    },
    peach:() => {
        console.log("Ferskener");
    },
    grape:() => {
        console.log("Druer");
    },
    default:() => {
        console.log("Klik på en af frugterne");
    }
}

function fruit(fruit){
    (fruits[fruit] || fruits.default)();
}