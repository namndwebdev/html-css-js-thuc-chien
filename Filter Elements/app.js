const foodBtns = document.querySelectorAll('.food-menu button')
const foodList = document.querySelectorAll('.food-item')

foodBtns.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		const type = e.target.getAttribute('type-food')

		// remove and set active fpr button
		document
			.querySelector('.food-menu button.active')
			.classList.remove('active')
		e.target.classList.add('active')

		// filter elements
		foodList.forEach((item) => {
			if (type == 'all' || item.getAttribute('type-food') == type)
				item.classList.remove('hide')
			else item.classList.add('hide')
		})
	})
})
