// Função que adiciona estilo personalizado à determinada classe

    function clipPath(class_name, min_window_width, max_window_width) {
        
        const all_items = document.querySelectorAll(class_name)

        if (window.innerWidth < min_window_width) return
        if (window.innerWidth > max_window_width) return

        if (all_items.length === 0) return

        let item_height = all_items[0].offsetHeight 
        let item_width = all_items[0].offsetWidth

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

    }

    function applyClipPaths() {
        clipPath('.nav__item__a', 600, Infinity)
        clipPath('.hero-content__title', 0, Infinity)
    }
    
    window.addEventListener('load', applyClipPaths)    
    window.addEventListener('resize', applyClipPaths)

// 