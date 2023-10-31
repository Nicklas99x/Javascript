function SelvarkiverendeObjekt() {
    let arkiv = [];
  
    function GemVærdi(værdi) {
      const timestamp = new Date();
      arkiv.push({ værdi, timestamp });
    }
  
    this.Attribut = undefined; // Initialiser attributten til undefined
  
    this.Gem = function (nyVærdi) {
      this.Attribut = nyVærdi;
      GemVærdi(nyVærdi);
    };
  
    this.Aflæs = function () {
      if (arkiv.length > 0) {
        return arkiv[arkiv.length - 1].værdi;
      }
      return undefined;
    };
  
    this.HentArkiv = function () {
      return arkiv;
    };
  }

// Brug selvarkiverende objekt
const minSelvarkiverendeObjekt = new SelvarkiverendeObjekt();

minSelvarkiverendeObjekt.Gem(42);
minSelvarkiverendeObjekt.Gem(55);
console.log(minSelvarkiverendeObjekt.Aflæs()); // Output: 55
console.log(minSelvarkiverendeObjekt.HentArkiv()); // Output: [{ værdi: 42, timestamp: '2023-10-24T12:00:00' }, { værdi: 55, timestamp: '2023-10-24T12:01:00' }]
