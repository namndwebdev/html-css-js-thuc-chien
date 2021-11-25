const box = document.querySelector('.box')

const eKey = document.querySelector('.card.key p:last-child')
const eLocation = document.querySelector('.card.location p:last-child')
const eWhich = document.querySelector('.card.which p:last-child')
const eCode = document.querySelector('.card.code p:last-child')

document.addEventListener('keydown', (e) => {
	let keyName = e.keyCode === 32 ? 'Space' : e.key

	document.querySelector('.result').innerText = e.which


	eKey.innerText = keyName
	eLocation.innerText = e.location
	eWhich.innerText = e.which
	eCode.innerText = e.code

	
	document.querySelector('.alert').classList.add('hide')
	box.classList.remove('hide')
})
