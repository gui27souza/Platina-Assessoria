// Função que adiciona estilo personalizado à determinada classe

    function clipPath(class_name, min_window_width, max_window_width, side = 'both') {
        
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
                        ${item_height/3}px 0, 
                        100% 0, 
                        100% ${2*item_height/3}px, 
                        ${item_width - item_height/3}px 100%, 
                        0 100%, 
                        0 ${item_height/3}px
                    )`                        
                }
            break

            case 'up':
                for (let item of all_items) {                    
                    item.style.clipPath = `polygon(
                        ${item_height/3}px 0, 
                        100% 0, 
                        100% 100%, 
                        0 100%, 
                        0 ${item_height/3}px
                    )`                        
                }
            break

            case 'down':
                for (let item of all_items) {                    
                    item.style.clipPath = `polygon(
                        0 0, 
                        100% 0, 
                        100% ${2*item_height/3}px, 
                        ${item_width - item_height/3}px 100%, 
                        0 100%
                    )`                        
                }
            break
        }

    }

    function applyClipPaths() {
        
        clipPath('.nav__item__a', 600, Infinity)

        clipPath('.hero-content__title', 0, Infinity)

        clipPath('.sobre-cursos__item', 600, Infinity)
        clipPath('.sobre-cursos__item__background', 600, Infinity)
        clipPath('.sobre-cursos__item__img', 600, Infinity)
        clipPath('.r-side', 600, Infinity, 'down')
        clipPath('.l-side', 600, Infinity, 'up')
    }
    
    window.addEventListener('load', applyClipPaths)    
    window.addEventListener('resize', applyClipPaths)

// 