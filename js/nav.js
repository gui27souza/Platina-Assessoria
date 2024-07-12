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