// 

    function clipPath(class_name, min_window_width = 0) {
        
        const all_items = document.querySelectorAll(class_name)

        if (window.innerWidth < min_window_width) return

        let item_height = all_items[0].offsetHeight 
        let item_width = all_items[0].offsetWidth

        for (let item of all_items) {
            item.style.clipPath = `polygon(
                ${(item_height/3) + 'px'} 0, 
                100% 0, 
                100% ${(2*item_height/3) + 'px'}, 
                ${(item_width - item_height/3) + 'px'} 100%, 
                0 100%, 
                0 ${(item_height/3) + 'px'}
            )`
        }

        console.log(item_height, item_width)
    }

    window.addEventListener('load', clipPath('.nav__item__a', 600))
    window.addEventListener('load', clipPath('.hero-content__title'))

// 