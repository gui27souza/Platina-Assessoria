// Função que gerencia a abertura e fechamento do menu na nav em telas menores

    // Elementos
    const menu_decoration = document.getElementById('nav-menu__decoration')
    const menu = document.getElementById('nav-container')

    // Variáveis
    var nav_is_open = 0

    function nav() {

        // Caso de telas maiores
        if (window.innerWidth >= 600) return

        // Menu fechado
        if (!nav_is_open) {

            // Efeito animado
            menu_decoration.style.transform = 'rotate(0deg)'

            // Mostra o menu
            menu.style.display = 'flex'
            menu.style.top = menu_decoration.offsetHeight + "px"

            nav_is_open = 1

        } 

        // Menu aberto
        else {

            // Efeito animado
            menu_decoration.style.transform = 'rotate(90deg)'

            // Esconde o menu
            menu.style.display = 'none'

            nav_is_open = 0

        }

    }

// 



// Função que auxilia na organização dos botões da nav em telas maiores

    // Elementos
    const all_nav_items = document.querySelectorAll('.nav__item')    

    function navItemsContador() {
        
        // Variáveis
        let contador = 0

        // Conta quantos botões existem
        for (let i = 0; i < all_nav_items.length; i++) {
            contador++
        }
        
        // Ajusta aa grid de acordo com o número de botões
        if (window.innerWidth >= 600) {
            menu.style.gridTemplateColumns = `repeat(${contador}, 1fr)`
        }

    }

    // Ajuste dinâmico
    window.addEventListener('load', navItemsContador)
    window.addEventListener('resize', navItemsContador)

// 