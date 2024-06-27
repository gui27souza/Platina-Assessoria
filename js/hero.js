const header_element = document.getElementById('header')
const hero_element = document.getElementById('hero-banner')

function heroHeight() {

    if (window.innerWidth < 900) return

    let header_height = header_element.offsetHeight + 'px'

    hero_element.style.height = `calc(100vh - ${header_height})`
}

window.addEventListener('load', heroHeight())