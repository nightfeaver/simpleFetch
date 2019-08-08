const ul = document.getElementById('authors');
const url = 'https://randomuser.me/api/?results=10';

let createNode = element => {
	return document.createElement(element);
}

let append = (parent, el) => {
	return parent.appendChild(el)
}

const butt = document.getElementById('button');

let deleteChild = () => {
	let child = ul.firstElementChild;
	while(child) {
		ul.removeChild(child);
		child=ul.firstElementChild;
	}
}

let fetchThem = () => {
	deleteChild();
	fetch(url)
	.then(resp => resp.json())
	.then(data => {
		let authored = data.results;
		return authored.map(author => {
			let li = createNode('li'),
				img = createNode('img'),
				span = createNode('span');
			img.src = author.picture.medium;
			span.innerHTML = `${author.name.first} ${author.name.last}`;
			append(li,img);
			append(li,span);
			append(ul,li);
			})
		}
	)
	.catch(error => {
		console.log('error');
	})
}

butt.addEventListener('click',fetchThem);

