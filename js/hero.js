const header_element = document.getElementById('header')

function heroHeight(id) {

    const hero_element = document.getElementById(id)

    if (window.innerWidth < 900) { hero_element.style.height = '45rem'
    if (window.innerWidth < 600) { hero_element.style.height = '30rem'    
    if (window.innerWidth < 400) { hero_element.style.height = '25rem'
        }}
        return
    }

    let header_height = header_element.offsetHeight + 'px'

    hero_element.style.height = `calc(100vh - ${header_height})`
}

function applyHeroHeight() {

    if (document.getElementById('hero-banner')) {
        heroHeight('hero-banner')
    }

    if (document.getElementById('hero-banner-cursos')) {
        heroHeight('hero-banner-cursos')
    }

}


window.addEventListener('load', applyHeroHeight)

window.addEventListener('resize', applyHeroHeight)