const form = document.querySelector('form')
const input = document.querySelector('form input')
const eye = document.querySelector('.form-eye')

eye.addEventListener('click', (e) => {
	e.target.classList.toggle('show')

	input.type == 'password' ? (input.type = 'text') : (input.type = 'password')
})

input.addEventListener('input', (e) => {
	const value = e.target.value

	const lowercase = document.querySelector('.lowercase').classList
	const uppercase = document.querySelector('.uppercase').classList
	const number = document.querySelector('.number').classList
	const symbol = document.querySelector('.symbol').classList
	const characters = document.querySelector('.characters').classList

	// validator
	value.search(/[a-z]/) >= 0
		? lowercase.add('valid')
		: lowercase.remove('valid')

	value.search(/[A-Z]/) >= 0
		? uppercase.add('valid')
		: uppercase.remove('valid')

	value.search(/[0-9]/) >= 0 
        ? number.add('valid') 
        : number.remove('valid')

    value.search(/\W/) >= 0 
        ? symbol.add('valid')
        : symbol.remove('valid')

	value.length >= 8 
		? characters.add('valid') 
		: characters.remove('valid')
})
