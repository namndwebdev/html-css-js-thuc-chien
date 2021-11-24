const buttons = document.querySelectorAll('button')

buttons.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		const audio = e.target.querySelector('audio')
		playSound(audio)
	})
})

const playSound = (audio) => {
	const clone = audio.cloneNode()
	clone.play()
	setTimeout(() => (clone.volume = 0.8), 400)
	setTimeout(() => (clone.volume = 0.6), 800)
	setTimeout(() => (clone.volume = 0.4), 1200)
	setTimeout(() => (clone.volume = 0.2), 1600)
	setTimeout(() => (clone.volume = 0), 2000)
}

document.addEventListener('keydown', (e) => {
    const btn = document.querySelector(`.key-${e.key}`)
    btn && btn.click()
})
