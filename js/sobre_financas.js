function updateImgHeight() {

    const sobre_financas_img_1 = document.getElementsByClassName('sobre-financas__text__item__img')[0]
    const sobre_financas_img_2 = document.getElementsByClassName('sobre-financas__text__item__img')[1]

    const img1Height = window.getComputedStyle(sobre_financas_img_1).getPropertyValue('height')

    sobre_financas_img_2.style.height = img1Height
}

window.addEventListener('load', updateImgHeight)
window.addEventListener('resize', updateImgHeight)