const container = document.querySelector('.js-main-container')
const ratingButton = document.querySelectorAll('.rating')
const submitButton = document.querySelector('.js-button')
const errorMsg = document.querySelector('.error-msg')

let clicked

ratingButton.forEach(Element => {
    Element.addEventListener('click', () => {
        ratingButton.forEach(e => {
            e.classList.remove('clicked-button')
        })

        clicked = Element.dataset.id
        Element.classList.add('clicked-button')
    })
})

submitButton.addEventListener('click', () => {
    if(clicked){
            container.innerHTML = `
        <img src="/interactive-rating-component-main/images/illustration-thank-you.svg" alt="">
        <div class="label-container">            
            <p class="label">You selected ${clicked} out of 5</p>
        </div>
        <div class="text-container thanks">
            <h2 class="title thanks">Thank You</h2>
            <p class="text thanks">We appreciate you taking the time to give a rating. If you ever need more support, 
            don’t hesitate to get in touch!</p>
        </div>
    `
    }else {
        errorMsg.style.display = 'block'
    }
})
