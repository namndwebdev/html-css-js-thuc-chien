const counters = document.querySelectorAll('.counter h2')

counters.forEach((counter) => {
	counter.innerText = '0'
	const target = +counter.getAttribute('data-target')
	const increment = target / 200

	const updateCounter = () => {
		const from = +counter.innerText

		if (from < target) {
			counter.innerText = `${Math.ceil(from + increment)}`
			setTimeout(updateCounter, 1)
		} else {
			counter.innerText = target
		}
	}

	updateCounter()
})
