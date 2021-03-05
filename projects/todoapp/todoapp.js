var ul = document.getElementById('list');

var li;

var addButton = document.getElementById('add');
addButton.addEventListener('click', addItem);

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click', removeItem);

var removeallButton = document.getElementById('removeall');
removeallButton.addEventListener('click', removeallIteam);

function addItem() {
	var input = document.getElementById('input');
	var item = input.value;
	ul = document.getElementById('list');
	var textnode = document.createTextNode(item);

	if (item === '') {
		const myNewElemnts = document.createElement('p');
		myNewElemnts.textContent = 'FILL THE TODO';
		document.querySelector('span').appendChild(myNewElemnts);
		return false;
	} else {
		//create li
		li = document.createElement('li');

		//create chckbox
		var checkbox = document.createElement('input');
		checkbox.type = 'checkbox';
		checkbox.setAttribute('id', 'check');
		//create lable
		var lable = document.createElement('label');

		//add these on web page

		ul.appendChild(lable);
		li.appendChild(checkbox);
		lable.appendChild(textnode);
		li.appendChild(lable);
		ul.insertBefore(li, ul.childNodes[0]);

		// for fade
		setTimeout(() => {
			li.className = 'visual';
		}, 2.5);

		//for clear input
		input.value = '';
	}
}

function removeItem() {
	li = ul.children;
	for (let index = 0; index < li.length; index++) {
		while (li[index] && li[index].children[0].checked) {
			ul.removeChild(li[index]);
		}
	}
}

//remove all iteam
function removeallIteam() {
	ul.removeChild(li);
	// 	for (let index = 0; index < li.length; index--) {
	// 	ul.removeChild(li]);
	// 		}
	//
}
