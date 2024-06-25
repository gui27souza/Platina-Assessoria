var nav_is_open = 0

const all_items = document.getElementsByClassName('nav__item')
const menu_decoration = document.getElementById('nav-menu__decoration')

function nav() {

    if (!nav_is_open) {

        menu_decoration.style.transform = 'rotate(0deg)'

        let top = 0

        for (let item of all_items) {
            item.style.display = 'flex'
            
            item.style.top = top + 'px'  
            
            top += 30
        }

        nav_is_open = 1

    } else {

        menu_decoration.style.transform = 'rotate(90deg)'

        for (let item of all_items) {
            item.style.display = 'none'            
        }
        
        document.getElementById('nav-menu').style.display = 'flex'

        nav_is_open = 0

    }

}