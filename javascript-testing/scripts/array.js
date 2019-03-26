var list = document.querySelector('.output ul');
var totalBox = document.querySelector('.output p');
var total = 0;
list.innerHTML = '';
totalBox.textContent = '';

var products = ['Underpants:6.99',
    'Socks:5.99',
    'T-shirt:14.99',
    'Trousers:31.99',
    'Shoes:23.99'];

for (var i = 0; i < products.length; i++) {
    nameprice = products[i].split(':');
    total += Number(nameprice[1]);
    itemText = nameprice[0] + ' - $' + nameprice[1];
    var listItem = document.createElement('li');
    listItem.textContent = itemText;
    list.appendChild(listItem);
}

totalBox.textContent = 'Total: $' + total.toFixed(2);

//////////////////////////////

var list = document.querySelector('.output2 ul');
var searchInput = document.querySelector('.output2 input');
var searchBtn = document.querySelector('.output2 button');

list.innerHTML = '';

var myHistory = [];

searchBtn.onclick = function () {
    // we will only allow a term to be entered if the search input isn't empty
    if (searchInput.value !== '') {
        // number 1
        myHistory.push(searchInput.value);
        // empty the list so that we don't display duplicate entries
        // the display is regenerated every time a search term is entered.
        list.innerHTML = '';

        // loop through the array, and display all the search terms in the list
        for (var i = 0; i < myHistory.length; i++) {
            itemText = myHistory[i];
            var listItem = document.createElement('li');
            listItem.textContent = itemText;
            list.appendChild(listItem);
        }

        // If the array length is 5 or more, remove the oldest search term
        if (myHistory.length >= 5) {
            // number 2
            myHistory.shift();
        }

        // empty the search input and focus it, ready for the next term to be entered
        searchInput.value = '';
        searchInput.focus();
    }
}
