// Elementos

    // Header é usada para calcular a altura do hero-banner em telas maiores
    const header_element = document.getElementById('header')

// 



// Função que calcula/define uma altura para o hero-banner

    function heroHeight(id) {

        // Hero-banner específico
        const hero_element = document.getElementById(id)

        // Telas grandes
        if (window.innerWidth < 900) { hero_element.style.height = '45rem'
        // Telas médias
        if (window.innerWidth < 600) { hero_element.style.height = '30rem'
        // Telas pequenas
        if (window.innerWidth < 400) { hero_element.style.height = '25rem'
        }}return}

        // Desktop
        hero_element.style.height = `calc(100vh - ${header_element.offsetHeight + 'px'})`
    }

// 



// Função que define o background-image do hero-banner de acordo com seu id e tamanho da tela

    function applyBackground() {

        // Pega o hero-banner específico da página
        let hero_id = document.getElementsByClassName('hero-banner')[0].id

        // Define o tamanho necessário para o hero-banner
        let size
        if (window.innerWidth < 600) size = 'sm'
        if (window.innerWidth >= 600) size = 'm'
        if (window.innerWidth >= 1500) size = 'xl'

        // Para o caso específico de ser no index.html
        let not_index = ''
        if (hero_id != 'hero-banner-home') not_index = '../'

        // Atribuição da imagem de acordo com o banner específico e tamanho
        document.getElementById(hero_id).style.backgroundImage = 
        `url(${not_index}media/images/hero_banner/${hero_id}/${hero_id}_${size}.jpg)`

        // Ajuste de altura da seção
        heroHeight(hero_id)
    }

// 



// Chamada dinâmica da função de ajuste do hero-banner
    
    window.addEventListener('load', applyBackground)
    window.addEventListener('resize', applyBackground)

// 