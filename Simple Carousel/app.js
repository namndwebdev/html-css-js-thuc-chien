const wrapper = document.querySelector('.wrapper')
let isMouseDown = false
let startX, scrollLeft

wrapper.addEventListener('mousedown', (e) => {
	isMouseDown = true
	startX = e.pageX - wrapper.offsetLeft
	scrollLeft = wrapper.scrollLeft
})

wrapper.addEventListener('mouseleave', () => {
	isMouseDown = false
})

wrapper.addEventListener('mouseup', () => {
	isMouseDown = false
})

wrapper.addEventListener('mousemove', (e) => {
	if (!isMouseDown) return

	const x = e.pageX - wrapper.offsetLeft
	// 3 là tốc độ scroll
	const walk = (x - startX) * 3
	wrapper.scrollLeft = scrollLeft - walk
})
