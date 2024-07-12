const cursos_wrapper = document.getElementById('cursos__wrapper')


let cursos_item_height
let cursos_wrapper_row_gap



function updateCursosWrapper() {
    
    const cursos_item = document.getElementById('cursos__item')

    cursos_item_height = parseFloat(window.getComputedStyle(cursos_item).getPropertyValue('height'))
    cursos_wrapper_row_gap = parseFloat(window.getComputedStyle(cursos_wrapper).getPropertyValue('row-gap'))
    
    let values = checkCursosWrapperGrid()
    
    cursos_wrapper.style.height = (values[1]*cursos_item_height + (values[1]-1)*cursos_wrapper_row_gap) + 'px'

    for (let item of document.getElementsByClassName('cursos__item')) {
        item.style.height = cursos_item_height + 'px'
    }
}



let is_mostrar_todos_open = false

function mostrarTodos() {

    let values = checkCursosWrapperGrid()

    if (!is_mostrar_todos_open) {
        
        cursos_wrapper.style.height = values[0]*cursos_item_height + values[1]*cursos_wrapper_row_gap + 'px'

        is_mostrar_todos_open = true

    } 
    else {
        
        cursos_wrapper.style.height = (values[1]*cursos_item_height + (values[1]-1)*cursos_wrapper_row_gap) + 'px'
        
        is_mostrar_todos_open = false
    }
    
}



function checkCursosWrapperGrid() {

    let total_rows, lines 

    if (window.innerWidth < 600) 
    {total_rows = 19; lines = 1.5}

    if (window.innerWidth >= 600 && window.innerWidth < 1500) 
    {total_rows = 10; lines = 2}

    if (window.innerWidth >= 1500) 
    {total_rows = 7; lines = 1.75}

    let values = [total_rows, lines]

    return values
}



window.addEventListener('load', updateCursosWrapper)
if (window.innerWidth > 600) {
    window.addEventListener('resize', updateCursosWrapper)
}