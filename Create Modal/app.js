const modal = document.querySelector('.modal')
const openModal = document.querySelector('.open-modal')
const iconCloseModal = document.querySelector('.modal__header i')
const buttonCloseModal = document.querySelector('.modal__footer button')

function toggleModal() {
	modal.classList.toggle('hide')
}

openModal.addEventListener('click', toggleModal)
iconCloseModal.addEventListener('click', toggleModal)
buttonCloseModal.addEventListener('click', toggleModal)

modal.addEventListener('click', (e) => {
	if (e.target == e.currentTarget) toggleModal()
})
