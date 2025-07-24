let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.container')
let items = container.querySelectorAll('.list .item')
let indicator = document.querySelector('.indicators')
let dots = indicator.querySelectorAll('ul li')

let active = 0
let lastPosition = items.length - 1

nextButton.onclick = () => {
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    active = active + 1 > lastPosition ? 0 : active + 1
    items[active].classList.add('active')

    updateIndicator()
}

prevButton.onclick = () => {
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    active = active - 1 < 0 ? lastPosition : active - 1
    items[active].classList.add('active')

    updateIndicator()
}

function updateIndicator() {
    document.querySelector('.indicators .number').innerText = `0${active + 1}`

    dots.forEach(dot => dot.classList.remove('active'))
    if (dots[active]) {
        dots[active].classList.add('active')
    }
}

