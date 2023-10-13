class Lampe{
    constructor(lysstyrke, farve) {
        this.lysstyrke = lysstyrke;
        this.farve = farve;
    }

    tænd() {
        console.log("Lampen er tændt");
    }

    sluk() {
        console.log("Lampen er slukket");
    }
}

class Bordlampe extends Lampe {
    constructor(lysstyrke, farve, højde) {
        super(lysstyrke, farve);
        this.højde = højde;
    }

    justerHøjde(nyHøjde) {
        this.højde = nyHøjde;
        console.log(`Bordlampens højde er ${this.højde} cm`);
    }
}

//super class
class Person {
    constructor() {
        this._alder = 0;
        this._fornavn = "";
        this._efternavn = "";
    }

    //private function til at tjekke at navn kun uíndeholder bogstaver
    #setNavn(value)
    {
        const regex = /[^A-Za-z]/;

        if (typeof value === "string" && !regex.test(value)) {
            this._fornavn = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
        } else {
            throw new Error("Dette felt må kun indholde bogstaver");
        }
    }

    get alder() {
        return this._alder;
    }

    set alder(value) {
        if (typeof value === "number" && value >= 0 && value <= 100) {
            this._alder = value;
        } else {
            throw new Error("Alder skal være et tal mellem 0 og 100.");
        }
    }

    get fornavn() {
        return this._fornavn;
    }

    set fornavn(value) {
        setNavn(value);
    }

    get efternavn() {
        return this._efternavn;
    }

    set efternavn(value) {
        setNavn(value);
    }
}

// Eksempel på brug:
const person = new Person();
person.alder = parseInt(prompt("indtast alder"));
person.fornavn = prompt("indtast fornavn");
person.efternavn = prompt("indtast efternavn");
console.log(person.fornavn); // Peter
console.log(person.efternavn); // Parker
console.log(person.alder); // 30


// const minLampe = new Bordlampe(100, "Hvid", 50);
// console.log(`Min lampe har en lysstyrke på ${minLampe.lysstyrke} og er ${minLampe.farve}.`);
// minLampe.tænd();
// minLampe.justerHøjde(60);
// minLampe.sluk();