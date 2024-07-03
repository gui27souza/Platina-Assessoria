const cursos_wrapper = document.getElementById('cursos__wrapper')
const cursos_item = document.getElementById('cursos__item')

let cursos_item_height
let cursos_wrapper_row_gap


function updateCursosWrapper() {

    cursos_item_height = cursos_item.offsetHeight
    cursos_wrapper_row_gap = parseFloat(window.getComputedStyle(cursos_wrapper).getPropertyValue('row-gap'))

    let values = checkCursosWrapperGrid()

    cursos_wrapper.style.height = values[3]*cursos_item_height + values[1]*cursos_wrapper_row_gap + 'px'

    for (let item of document.getElementsByClassName('cursos__item')) {
        item.style.height = cursos_item_height + 'px'
    }
}


let is_mostrar_todos_open = false

function mostrarTodos() {

    let values = checkCursosWrapperGrid()
    
    console.log(values)

    if (!is_mostrar_todos_open) {
        
        cursos_wrapper.style.height = values[0]*cursos_item_height + values[2]*cursos_wrapper_row_gap + 'px'

        is_mostrar_todos_open = true

    } 
    else {
        
        cursos_wrapper.style.height = values[3]*cursos_item_height + values[1]*cursos_wrapper_row_gap + 'px'

        is_mostrar_todos_open = false
    }
    
}

function checkCursosWrapperGrid() {

    let total_rows, initial_gaps, gaps, first_row
    let values = []

    if (window.innerWidth < 600) {
        total_rows = 19
        gaps = 18
        initial_gaps = 2
        first_row = 3
    }

    if (window.innerWidth >= 600 && window.innerWidth < 1500) {
        total_rows = 10
        gaps = 9
        initial_gaps = 1
        first_row = 2
    }

    if (window.innerWidth >= 1500) {
        total_rows = 7
        gaps = 6
        initial_gaps = 0
        first_row = 1
    }

    values = [total_rows, initial_gaps, gaps, first_row]

    return values
}


window.addEventListener('load', updateCursosWrapper)
window.addEventListener('resize', updateCursosWrapper)