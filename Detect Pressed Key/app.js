const box = document.querySelector('.box')

const eKey = document.querySelector('.card.key span:last-child')
const eLocation = document.querySelector('.card.location span:last-child')
const eWhich = document.querySelector('.card.which span:last-child')
const eCode = document.querySelector('.card.code span:last-child')

document.addEventListener('keydown', (e) => {
	let keyName = e.keyCode === 32 ? 'Space' : e.key

	document.querySelector('#key').innerText = e.which


	eKey.innerText = keyName
	eLocation.innerText = e.location
	eWhich.innerText = e.which
	eCode.innerText = e.code

	
	document.querySelector('.text').classList.add('hide')
	box.classList.add('active')
})
