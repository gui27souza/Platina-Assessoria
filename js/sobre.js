const sobre_text = document.getElementById('sobre-text')

is_sobre_text_visible = 0

function sobre() {

    if (window.innerWidth >= 900) return

    if (is_sobre_text_visible) {

        sobre_text.style.display = 'none'
         document.documentElement.style.setProperty('--rotate', '-90deg')

        is_sobre_text_visible = 0
    } else {

        sobre_text.style.display = 'flex'
         document.documentElement.style.setProperty('--rotate', '0')

        is_sobre_text_visible = 1
    }
}