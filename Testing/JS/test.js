const { checkDanishPhoneNumber } = require('./danish-phonenumbers.js');
const { f } = require('./test-function.js');
const { isValidDate } = require('./valid-date.js');
const Person = require('./get-or-set-person.js');
const { iterativeQuickSort } = require('./iterative-quicksort.js');

// Jest-test
describe('check om et telefonnummer er et gyldigt Danish PhoneNumber', () => {
    it('should return true for valid Danish phone numbers', () => {
      // Test af gyldige danske telefonnumre
      expect(checkDanishPhoneNumber('12345678')).toBe(true);
      expect(checkDanishPhoneNumber('12 34 56 78')).toBe(true);
      expect(checkDanishPhoneNumber('1234 5678')).toBe(true);
    });
  
    it('should return false for invalid Danish phone numbers', () => {
      // Test af ugyldige danske telefonnumre
      expect(checkDanishPhoneNumber('123')).toBe(false);
      expect(checkDanishPhoneNumber('12 345 678')).toBe(false);
      expect(checkDanishPhoneNumber('12 34 56789')).toBe(false);
      expect(checkDanishPhoneNumber('123456789')).toBe(false);
      expect(checkDanishPhoneNumber('12 34 56 789')).toBe(false);
      expect(checkDanishPhoneNumber('02 34 56 78')).toBe(false);
    });
});

// describe('Look. Look. Wtf is this?', () => {
//     it('Idk', () => {
//         const x = 0.5; // Angiv et bestemt x-værdi for test

//         const iterations = 20; // Start med et antal iterationer, f.eks. 20

//         const expectedPrecision = 0.0001; // Definer en acceptabel præcisionsgrænse

//         const expectedValue = Math.exp(x); // Forventet værdi baseret på eksponentialfunktionen (til sammenligning)

//         const result = f(x, iterations);

//         expect(Math.abs(result - expectedValue)).toBeLessThanOrEqual(expectedPrecision);
//     });
// });

describe('er datoen gyldig', () => {
  test('should return true for valid dates within the range', () => {
    expect(isValidDate('01-01-1900')).toBe(true);
    expect(isValidDate('31-12-2099')).toBe(true);
    expect(isValidDate('29-02-2024')).toBe(true);
    // Tilføj flere gyldige datoer inden for intervallet
  });

  test('should return false for invalid dates', () => {
    expect(isValidDate('32-01-2022')).toBe(false); // Ugyldig dag
    expect(isValidDate('29-02-2021')).toBe(false); // Ikke skudår
    expect(isValidDate('30-02-2024')).toBe(false); // Ugyldig dag i skudår
    // Tilføj flere ugyldige datoer uden for intervallet
  });

//   // Tilføj flere tests efter behov for at dække forskellige scenarier
});

//Eksempel på brug:

describe('Person class', () => {
  let person;

  beforeEach(() => {
    person = new Person('Nicklas', 'Pedersen', '28-12-1999', 'blå');
  });

  test('Setter for fornavn', () => {
    expect(() => {
      person.fornavn = 'Invalid123';
    }).toThrow('Ugyldigt fornavn');

    expect(() => {
      person.fornavn = 'valid-name';
    }).not.toThrow();
    expect(person.fornavn).toBe('Valid-Name');
  });

  test('Setter for efternavn', () => {
    expect(() => {
      person.efternavn = 'Invalid!LastName';
    }).toThrow('Ugyldigt efternavn');

    expect(() => {
      person.efternavn = 'valid-lastName';
    }).not.toThrow();
    expect(person.efternavn).toBe('Valid-Lastname');
  });

  test('Setter for fødselsdato', () => {
    expect(() => {
      person.fødselsdato = '32-13-1990';
    }).toThrow('Ugyldig fødselsdato');

    expect(() => {
      person.fødselsdato = '01-01-2000';
    }).not.toThrow();
    expect(person.fødselsdato).toBe('01-01-2000');
  });

  test('Setter for øjenfarve', () => {
    expect(() => {
      person.øjenfarve = 'purple';
    }).toThrow('Ugyldig øjenfarve');

    expect(() => {
      person.øjenfarve = 'grøn';
    }).not.toThrow();
    expect(person.øjenfarve).toBe('grøn');
  });
});

describe('iterativeQuickSort', () => {
  it('Sorts an array of 1000 random numbers', () => {
    // Generer et stort tilfældigt array
    const largeArraySize = 1000; // Ændr størrelsen efter behov
    const largeRandomArray = Array.from({ length: largeArraySize }, () => Math.floor(Math.random() * 1000) + 1);
    const unsortedArray = [...largeRandomArray];
    // Sorter det tilfældige array ved hjælp af iterativeQuickSort-funktionen
    iterativeQuickSort(largeRandomArray);
    //function til at sortere for at lave forventet input
    function sortArrayInAscendingOrder(array) {
      return array.slice().sort((a, b) => a - b);
    }
    // Forvent at det sorteret array er lig med det rigtige sorteret array
    function erSorteret(array) {
      for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
          return false; // Hvis et element er større end det næste, er arrayet ikke sorteret
        }
      }
      return true; // Hvis loopet gennemføres uden at returnere false, er arrayet sorteret
    }

    erSorteret(largeRandomArray);
    
    // Sorter det usorterede array før testen
    let sort = sortArrayInAscendingOrder(unsortedArray);
    // Sammenlign hvert element i de to arrays
    for (let i = 0; i < largeRandomArray.length; i++) {
      expect(largeRandomArray[i]).toBe(sort[i]);
    }
});

  test('Sorts an array of numbers', () => {
    const unsortedArray = [3, 1, 4, 2, 5];
    const sortedArray = [1, 2, 3, 4, 5];

    iterativeQuickSort(unsortedArray);
    expect(unsortedArray).toEqual(sortedArray);
  });

  test('Sorts an array with duplicate numbers', () => {
    const unsortedArray = [5, 3, 2, 5, 1, 2, 3];
    const sortedArray = [1, 2, 2, 3, 3, 5, 5];

    iterativeQuickSort(unsortedArray);
    expect(unsortedArray).toEqual(sortedArray);
  });

  //Add more testcases as needed
});