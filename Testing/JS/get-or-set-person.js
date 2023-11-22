class Person {
    constructor(fornavn, efternavn, fødselsdato, øjenfarve) {
        this._fornavn = null;
        this._efternavn = null;
        this._fødselsdato = null;
        this._øjenfarve = null;

        this.fornavn = fornavn;
        this.efternavn = efternavn;
        this.fødselsdato = fødselsdato;
        this.øjenfarve = øjenfarve;
    }

    // Getters
    get fornavn() {
        return this._fornavn;
    }

    get efternavn() {
        return this._efternavn;
    }

    get fødselsdato() {
        return this._fødselsdato;
    }

    get øjenfarve() {
        return this._øjenfarve;
    }

    // Setters
    set fornavn(value) {
        value = value.trim().toLowerCase();

        if (!/^[a-zA-Z]+(?:-[a-zA-Z]+)?$/.test(value)) {
        throw new Error('Ugyldigt fornavn');
        }

        const parts = value.split('-');
        this._fornavn = parts.map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('-');
    }

    set efternavn(value) {
        value = value.trim().toLowerCase();

        if (!/^[a-zA-Z]+(?:-[a-zA-Z]+)?$/.test(value)) {
            throw new Error('Ugyldigt efternavn');
        }

        const parts = value.split('-');
        this._efternavn = parts.map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('-');
    }

    set fødselsdato(value) {
        const parts = value.split('-');
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1;
        const year = parseInt(parts[2], 10);
        const date = new Date(year, month, day);
        const currentDate = new Date();
        const maxAgeDate = new Date(currentDate.getFullYear() - 120, currentDate.getMonth(), currentDate.getDate());

        if (
            parts.length !== 3 ||
            day !== date.getDate() ||
            month !== date.getMonth() ||
            year !== date.getFullYear() ||
            date > currentDate || date < maxAgeDate
        ) {
            throw new Error('Ugyldig fødselsdato');
        }

        this._fødselsdato = value;
    }

    set øjenfarve(value) {
        value = value.trim().toLowerCase();
        const gyldigeØjenfarver = ['blå', 'brun', 'grøn', 'grå']; // tilføj andre gyldige farver efter behov

        if (!gyldigeØjenfarver.includes(value)) {
            throw new Error('Ugyldig øjenfarve');
        }

        this._øjenfarve = value;
    }
}

module.exports = Person;