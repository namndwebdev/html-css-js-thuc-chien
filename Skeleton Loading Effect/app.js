const cardImg = document.querySelector('.card__img')
const cardHeading = document.querySelector('.card__info h2')
const cardContent = document.querySelector('.card__info p')
const cardBtn = document.querySelector('.card__info button')

setTimeout(() => {
    cardImg.innerHTML = '<img src="https://images.unsplash.com/photo-1637420425895-97a239041d53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1148&q=80" alt="">'

    cardHeading.innerHTML = 'Nodemy'
    cardContent.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut soluta qui repudiandae, maxime optio voluptatem eius eveniet officiis'
    cardBtn.innerHTML = 'Read More'

    // remove loading
    document.querySelectorAll('.loading').forEach(item => {
        item.classList.remove('loading')
    })

}, 4000)