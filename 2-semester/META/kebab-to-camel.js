String.prototype.kebab2camel = function(){
    return this.replace(/-([a-z])/g, function(match, letter){
        return letter.toUpperCase();
    })
}

String.prototype.camel2kebab = function(){
    return this.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\B([A-Z])/g, '-$1').toLowerCase();
}

const kebabString = "this-is-a-sample-string";
const camelString = "thisIsASampleString";

console.log("camelcase", kebabString.kebab2camel());  // Output: thisIsASampleString
console.log("kebabcase", camelString.camel2kebab());  // Output: this-is-a-sample-string