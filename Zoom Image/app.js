const zoomer = document.querySelector('.zoomer')
const wrapImg = document.querySelectorAll('.zoomer .image')
const result = document.querySelector('.zoomer .result')

const size = 4

wrapImg.forEach((item) => {
	item.addEventListener('mousemove', function (e) {
		result.classList.remove('hide')

		const img = item.querySelector('img')

		let x = (e.offsetX / this.offsetWidth) * 100
		let y = (e.offsetY / this.offsetHeight) * 100

		// move result
		let posX = e.pageX - zoomer.offsetLeft
		let posY = e.pageY - zoomer.offsetTop

		result.style.cssText = `
			background-image: url(${img.src});
			background-size: ${img.width * size}px ${img.height * size}px;
			background-position : ${x}% ${y}%;
			left: ${posX}px;
			top: ${posY}px;
		`
	})

	item.addEventListener('mouseleave', function (e) {
		result.style = ``
		result.classList.add('hide')
	})
})
