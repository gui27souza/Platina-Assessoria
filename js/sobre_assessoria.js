function updateImgHeight() {

    const sobre_assessoria_img_1 = document.getElementsByClassName('sobre-assessoria__text__item__img')[0]
    const sobre_assessoria_img_2 = document.getElementsByClassName('sobre-assessoria__text__item__img')[1]

    const img1Height = window.getComputedStyle(sobre_assessoria_img_1).getPropertyValue('height')

    sobre_assessoria_img_2.style.height = img1Height
}

window.addEventListener('load', updateImgHeight)
window.addEventListener('resize', updateImgHeight)