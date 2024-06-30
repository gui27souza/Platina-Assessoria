const header_element = document.getElementById('header')

function heroHeight(id) {

    const hero_element = document.getElementById(id)

    if (window.innerWidth < 900) return

    let header_height = header_element.offsetHeight + 'px'

    hero_element.style.height = `calc(100vh - ${header_height})`
}

if (document.getElementById('hero-banner')) {
    window.addEventListener('load', heroHeight('hero-banner'))
}

if (document.getElementById('hero-banner-cursos')) {
    window.addEventListener('load', heroHeight('hero-banner-cursos'))
}