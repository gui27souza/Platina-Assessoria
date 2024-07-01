// Elementos utilizados

    const sobre_text = document.getElementById('sobre-text')
    const sobre_section = document.getElementById('sobre')

// 

// Variáveis utilizadas

    let is_sobre_text_visible = 0

    let sobre_height_before
    let sobre_text_height
    let section_column_gap

// 

window.addEventListener('load', () => {

    // Apenas se a seção sobre_text for recolhível, ou seja, até telas médias
    if (window.innerWidth < 900) {

        // Altura da seção sobre_text, que está escondida
        sobre_text_height = sobre_text.offsetHeight
        // Altura total da seção sobre menos a altura de sobre_text
        sobre_height_before = sobre_section.offsetHeight - sobre_text_height

        // Valor real do gap da seção sobre
        const computed_style_sobre_section = window.getComputedStyle(sobre_section)
        section_column_gap = parseFloat(computed_style_sobre_section.getPropertyValue('row-gap'))

        // Define um valor inicial de altura para seção para que a transição possa ser aplicada
        sobre_section.style.height = sobre_height_before - section_column_gap + 'px'
        
    }

})

window.addEventListener('resize', () => {

    sobre_section.style.height = 'unset'

    // Apenas se a seção sobre_text for recolhível, ou seja, até telas médias
    if (window.innerWidth < 900) {

        // Altura da seção sobre_text, que está escondida
        sobre_text_height = sobre_text.offsetHeight
        // Altura total da seção sobre menos a altura de sobre_text
        sobre_height_before = sobre_section.offsetHeight - sobre_text_height

        // Valor real do gap da seção sobre
        const computed_style_sobre_section = window.getComputedStyle(sobre_section)
        section_column_gap = parseFloat(computed_style_sobre_section.getPropertyValue('row-gap'))

        // Define um valor inicial de altura para seção para que a transição possa ser aplicada
        sobre_section.style.height = sobre_height_before - section_column_gap + 'px'
        
    }

})

 

// Função que ativa a seção escondida, chamada ao clicar na seção 'open-sobre__text'
function sobre() {

    // Em telas maiores, não é necessária
    if (window.innerWidth >= 900) return 

    // Caso esteja ativo
    if (is_sobre_text_visible) {

        // Reset da altura para a inicial
        sobre_section.style.height = sobre_height_before - section_column_gap + 'px'

        // Efeito animado
        document.documentElement.style.setProperty('--rotate', '-90deg')

        is_sobre_text_visible = 0

    } else {

        // Soma a altura da seção com a da sobre__text e gap
        sobre_section.style.height = sobre_height_before + sobre_text_height + 'px'

        // Efeito animado
        document.documentElement.style.setProperty('--rotate', '0')

        is_sobre_text_visible = 1

    }
}