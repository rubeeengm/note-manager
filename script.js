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

        input.addEventListener('keypress', function(e) {
            //code enter key
            if(e.keyCode === 13) {
                if(input.value !== '') {
                    note.textContent = input.value;
                    parentPar.style.display = 'block';
                    input.style.display = 'none';
                } else {
                    var li = input.parentNode;
                    li.parentNode.removeChild(li);
                }
            }
        });
    } else if (e.target.classList[1] === 'fa-times') {
        var list = e.target.parentNode.parentNode;
        list.parentNode.removeChild(list);
    }
});

//Hide items
var hideItem = document.getElementById('hide');

hideItem.addEventListener('click', function() {
    var label = document.querySelector('label');

    if (hideItem.checked) {
        label.textContent = 'Unhide notes';
        list.style.display = 'none';
    } else {
        label.textContent = 'Hide notes';
        list.style.display = 'block';
    }
});