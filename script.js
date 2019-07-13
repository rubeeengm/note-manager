var newListItem = document.createElement('li');

var firstParragraph = document.createElement('p');
//firstParragraph.appendChild(document.createTextNode('hola'));

var secondParragraph = document.createElement('p');

var edit = document.createElement('i');
edit.setAttribute('class', 'fa fa-pencil-square-o');

var del = document.createElement('i');
del.setAttribute('class', 'fa fa-times');

var input = document.createElement('input');
input.setAttribute('class', 'edit-note');
input.setAttribute('type', 'text');

secondParragraph.appendChild(edit);
secondParragraph.appendChild(del);
secondParragraph.appendChild(input);

newListItem.appendChild(firstParragraph);
newListItem.appendChild(secondParragraph);

var list = document.getElementById('list');


var btn = document.getElementById('add-btn');
var inputText = document.getElementById('add-input');

btn.addEventListener('click', function(e) {
    e.preventDefault();
    firstParragraph.appendChild(document.createTextNode(inputText.value));
    list.appendChild(newListItem);
    inputText.value = '';
})