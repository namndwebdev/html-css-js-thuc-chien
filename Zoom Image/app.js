const zoomer = document.querySelector('.zoomer')
const img = document.querySelector('.zoomer img')
const result = document.querySelector('.zoomer .result')
const size = 4

zoomer.addEventListener('mousemove', function (e) {
	result.style.backgroundImage = `url(${img.src})`
	result.style.backgroundSize = `${img.width * size}px ${img.height * size}px`

	let x = (e.offsetX / this.offsetWidth) * 100
	let y = (e.offsetY / this.offsetHeight) * 100
	result.style.backgroundPosition = `${x}% ${y}%`
})

zoomer.addEventListener('mouseleave', function (e) {
	result.style = ``
})
