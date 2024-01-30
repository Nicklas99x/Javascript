class Mængde{
    constructor(){
        this.elements = [];
    }
    add(x){
        let nullIndex = this.findIndex(null);

        if(nullIndex !== -1){
            this.elements[nullIndex] = x;
            this.size()++;
            return true;
        }
        else if(this.isValidElement(x) && !this.isElement(x)){
            this.elements[this.elements.length] = x;
            return true;
        }
        return false;
    }
    remove(x){
        const index = this.findIndex(x);
        if(index !== -1){
            this.elements[x] = null;
            this.size()--;
        }
    }
    isElement(x){
        return this.findIndex(x) !== -1;
    }
    element(pos){
        if(pos >= 0 && pos < this.elements.length){
            return this.elements[pos];
        }
        return null;
    }
    equals(m){
        if(!(m instanceof Mængde || this.size() !== m.size())){
            return false;
        }
        for(const element of this.elements){
            if(!m.isElement(element)){
                return false;
            }
        }
        return true;
    }
    size(){
        return this.elements.length + 1;
    }
    isValidElement(x){
        return typeof x === "number" || x === "string" || x === "boolean" 
    }
    findIndex(x){
        for(let i = 0; i < this.elements.length; i++){
            if(this.elements == x){
                return i;
            }
        }
        return -1; //return false hvis der ikke er noget match
    }
}
const sæt = new Mængde();
sæt.add(2);
sæt.add(24);
sæt.add("Richard");
sæt.add(true);

console.log(sæt.isElement("Richard")); //false
console.log(sæt.remove(0));
console.log(sæt.size()); //3 elementer
console.log(sæt.equals(new Mængde())); //false
console.log(sæt.element(0));