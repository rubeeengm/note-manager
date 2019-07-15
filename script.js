var newListItem = document.createElement('li');

var firstParragraph = document.createElement('p');

var secondParragraph = document.createElement('p');

var edit = document.createElement('i');
edit.className = 'fa fa-pencil-square-o';

var del = document.createElement('i');
del.className = 'fa fa-times';

var input = document.createElement('input');
input.className = 'edit-note';
input.setAttribute('type', 'text');

secondParragraph.appendChild(edit);
secondParragraph.appendChild(del);

newListItem.appendChild(firstParragraph);
newListItem.appendChild(secondParragraph);
newListItem.appendChild(input);

var list = document.getElementById('list');
var btn = document.getElementById('add-btn');
var inputText = document.getElementById('add-input');

//add notes
btn.addEventListener('click', function(e) {
    e.preventDefault();

    if(inputText.value !== '') {
        firstParragraph.textContent = inputText.value;
        list.appendChild(newListItem);
        inputText.value = '';
    }
});

//edit notes
list.addEventListener('click', function(e) {
    if(e.target.classList[1] === 'fa-pencil-square-o') {
        //<p><i class="fa fa-pencil-square-o"></i><i class="fa fa-times"></i></p>
        var parentPar = e.target.parentNode;
        parentPar.style.display = 'none';

        var note = parentPar.previousElementSibling;
        var input = parentPar.nextElementSibling;
        
        //show input
        input.style.display = 'block';
        input.value = note.textContent;
    }
});