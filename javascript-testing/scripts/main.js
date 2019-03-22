var myheading = document.querySelector('h1');
var mybotton = document.querySelector('button');

myheading.onmousedown = doStuff;
function doStuff(ev) {
    //alert("You pressed button: " + ev.button);
    if (ev.button === 0) { 
        myheading.align = 'center'; 
        myheading.textContent = 'I am at ' + myheading.align + ' now!';
    } else if (ev.button === 2) {
        myheading.align = 'right';
        myheading.textContent = 'I am at ' + myheading.align + ' now!';
    }
}

var myImage = document.querySelector('img');
myImage.onclick = function() {
    srcAtt = myImage.getAttribute('src');
    if (srcAtt.includes('1.jpg')) {
        srcAtt = srcAtt.replace('1', '2');
    } else if (srcAtt.includes('2.jpg')) {
        srcAtt = srcAtt.replace('2', '3');
    } else if (srcAtt.includes('3.jpg')) {
        srcAtt = srcAtt.replace('3', '1');
    }
    myImage.setAttribute('src', srcAtt);
}

function updateUserName() {
    var userName = sessionStorage.getItem('userName');
    if (userName !== null && userName !== '')
        myheading.textContent = 'Welcome ' + userName.trim() + '!';

}

function getUserName() {
    var userName = prompt('Give me your name:')
    sessionStorage.setItem('userName', userName);
}

mybotton.onclick = function() {
    getUserName();
    updateUserName();
}

if (!sessionStorage.getItem('userName')) {
    getUserName();
    updateUserName();
} else {
    updateUserName();
}

// myheading.onmousedown = function(ev) {
//     alert("You pressed button: " + ev.button)
// }

function multiply(num1, num2) {
    var result = num1 * num2;
    return result;
}




