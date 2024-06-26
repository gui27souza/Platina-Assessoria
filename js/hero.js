const header_element = document.getElementById('header')
const hero_element = document.getElementById('hero')

function heroHeight() {

    let header_height = header_element.offsetHeight + 'px'

    hero.style.height = `calc(100vh - ${header_height})`
}

window.addEventListener('load', heroHeight())