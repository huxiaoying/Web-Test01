let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

/*
let myHTML = document.querySelector('html').onclick = function(){
	alert('Warning!');
}
*/

let myImage = document.querySelector('img');

myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/water.jpg') {
		myImage.setAttribute('src','images/firefox.png')
	} else {
		myImage.setAttribute('src','images/water.jpg')
	}
}

function setHeading(name) {
	let myheading = document.querySelector('h1');
	myHeading.textContent = 'Welcome ' + name;
}

function setUserName() {
	let myName = prompt('Input name: ');
	localStorage.setItem('name', myName);
	setHeading(myName);
}

let storedName = localStorage.getItem('name');
if(!storedName) {
	setUserName();
} else {
	setHeading(storedName);
}

let myButton = document.querySelector('button');
myButton.onclick = setUserName;