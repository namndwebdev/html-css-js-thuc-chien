const inputToggle = document.querySelector('#toggleMode')

inputToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark')
})