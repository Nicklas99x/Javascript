function generateBoxId(){
    var userInput = document.getElementById('symbolInput').value;
    var id = new Symbol(userInput);

    return id;
}

class packages{
    constructor(content){
        this.boxId = generateBoxId();
        this.content = content;
    }
}