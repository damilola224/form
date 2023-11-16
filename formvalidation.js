const form = document.getElementById('form');
const passwordOne = document.getElementById('password1');
const passwordTwo = document.getElementById('password2');
const errorMessage = document.querySelector('.errorMessage');
const message = document.querySelector('#message');

let formValid = false;
let passwordMatch = false;

function validatForm() {
	//using constraint API
	formValid = form.checkValidity();
	//console.log(formValid)
	if (!formValid) {
		message.textContent = 'Please fill the blank field';
		message.style.color = 'red';
		errorMessage.style.borderColor = 'red';
		return;
	}
	//  message.textContent = "Please fill the blank field";
	//message.style.color ="red";
	//errorMessage.style.borderColor = "red";
	if (passwordOne.value === passwordTwo.value) {
		passwordMatch = true;
		passwordOne.style.color = 'green';
		passwordTwo.style.color = 'green';
		passwordOne.style.borderColor = 'green';
		passwordTwo.style.borderColor = 'green';
	} else {
		passwordMatch = false;
		passwordOne.style.color = 'green';
		passwordTwo.style.color = 'green';
		passwordOne.style.borderColor = 'green';
		passwordTwo.style.borderColor = 'green';
		message.textContent = 'Password doesnot match';
		message.style.color = 'red';
		errorMessage.style.borderColor = 'red';
		return;
	}
	if (formValid && passwordMatch) {
		message.textContent = 'successful........';
		message.style.color = 'green';
		errorMessage.style.borderColor = 'green';
	}
}

function storeData() {
	const client = {
		fullname: form.fullname.value,
		phonenumber: form.phonenumber.value,
		email: form.email.value,
		website: form.website.value,
		password: form.password.value,
	};
}

function processFormData(event) {
	event.preventDefault();

	//method to validate the form...........
	validatForm();
	if (formValid && passwordMatch) {
		storeData();
	}
	console.log('hi');
}

//eventListener............
form.addEventListener('submit', processFormData);
