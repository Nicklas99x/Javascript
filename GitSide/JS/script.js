function addToList(){
    let ul = document.getElementById("ul");
    let li = document.createElement("li");
    let input = document.getElementById("input").value;

    li.appendChild(document.createTextNode(input));
    ul.append(li);
}