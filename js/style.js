// Função que adiciona estilo personalizado à determinada classe

    function clipPath(class_name, min_window_width, max_window_width, side = 'both', fraction = '3') {
        
        const all_items = document.querySelectorAll(class_name)

        if (all_items.length === 0) return

        if ( window.innerWidth < min_window_width || 
             window.innerWidth > max_window_width) {            
                for (let item of all_items) item.style.clipPath = 'unset'
                return
        }

        let item_height = all_items[0].offsetHeight 
        let item_width = all_items[0].offsetWidth

        switch (side) {

            case 'both':
                for (let item of all_items) {                    
                    item.style.clipPath = `polygon(
                        ${item_height / fraction}px 0, 
                        100% 0, 
                        100% ${(fraction-1)*item_height / fraction}px, 
                        ${item_width - item_height / fraction}px 100%, 
                        0 100%, 
                        0 ${item_height / fraction}px
                    )`                        
                }
            break

            case 'up':
                for (let item of all_items) {                    
                    item.style.clipPath = `polygon(
                        ${item_height / fraction}px 0, 
                        100% 0, 
                        100% 100%, 
                        0 100%, 
                        0 ${item_height / fraction}px
                    )`                        
                }
            break

            case 'down':
                for (let item of all_items) {                    
                    item.style.clipPath = `polygon(
                        0 0, 
                        100% 0, 
                        100% ${(fraction-1)*item_height / fraction}px, 
                        ${item_width - item_height / fraction}px 100%, 
                        0 100%
                    )`                        
                }
            break
        }

    }

    function applyClipPaths() {
        
        // General
            clipPath('.nav__item__a', 600, Infinity)

            clipPath('.hero-content__title', 0, Infinity)
            clipPath('.hero-content__link', 0, Infinity, 'both', 4)
        // 

        // Home
            clipPath('.sobre-assessoria__text__item__img', 0, 1500,'both', 6)
            clipPath('.sobre-assessoria__text__item', 1500, Infinity,'both', 10)
        // 

        // Cursos
            clipPath('.sobre-cursos__item', 600, Infinity)
            clipPath('.sobre-cursos__item__background', 600, Infinity)
            clipPath('.sobre-cursos__item__img', 0, Infinity)
            clipPath('.r-side', 600, Infinity, 'down')
            clipPath('.l-side', 600, Infinity, 'up')

            clipPath('.cursos__item', 0, Infinity, 'both', 8)

            clipPath('.details-cursos__item', 0, Infinity, 'both', 8)
            
            clipPath('.impacto-cursos__item', 0, Infinity, 'both', 8)
            clipPath('.impacto-cursos__item__span', 0, Infinity, 'both', 8)
        // 
        
        // Missao
            clipPath('.section-consequencias__item', 0, Infinity, 'both', 6)

            clipPath('.section-objetivo__clip-path', 0, Infinity, 'both', 10)
        // 
    }
    
    window.addEventListener('load', applyClipPaths)    
    window.addEventListener('resize', applyClipPaths)

// 