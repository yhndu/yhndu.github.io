
let rNoun = ['style', 'energy', 'aura', 'spirit']
let rAdj = ['enlightened', 'on point', 'eeny meeny miny moe', 'fire'];

function newQuote() {
    let one = rSelector(rNoun);
    let two = rSelector(rAdj);

    // console.log(one);
    console.log(one + " " + two + " ");
    let item = document.createElement("div");
    let itemQuote = document.createTextNode("your " + one + " looks " + two + " today ");
    item.appendChild(itemQuote);
    document.getElementById('fortune').innerHTML = '';
    document.getElementById("fortune").appendChild(item);
}

function rSelector(words) {
    let rIndex = Math.floor(Math.random(1) * words.length);
    word = words[rIndex];
    console.log(rIndex);
    return word;
}
