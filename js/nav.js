var nav_is_open = 0

const menu_decoration = document.getElementById('nav-menu__decoration')
const menu = document.getElementById('nav-container')

function nav() {

    if (window.innerWidth >= 600) return

    if (!nav_is_open) {

        menu_decoration.style.transform = 'rotate(0deg)'

        menu.style.display = 'flex'
        menu.style.top = menu_decoration.offsetHeight + "px"

        nav_is_open = 1

    } else {

        menu_decoration.style.transform = 'rotate(90deg)'

        menu.style.display = 'none'

        nav_is_open = 0

    }

}