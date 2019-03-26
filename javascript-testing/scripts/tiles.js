
var par = document.createElement('h2');
par.align = 'center';
par.textContent = 'Click below to find the tiles!'
document.body.appendChild(par);

function randNum(value) {
    return Math.floor(Math.random() * value);
}

function randColor() {
    return 'rgb(' + randNum(255) + ',' + randNum(255) + ',' + randNum(255) + ')';
}

for (let i = 0; i < 25; i++) {
    var div = document.createElement('div');
    document.body.appendChild(div);
    div.onclick = function (e) {
        e.target.style.backgroundColor = randColor();
    }
}
