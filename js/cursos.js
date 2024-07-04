// window.addEventListener('load',_ => {
//     let cursos__item__height = document.getElementById('cursos__item').offsetHeight
//     console.log(cursos__item__height)

//     updateCursosHeight(cursos__item__height)
// })
// window.addEventListener('resize',_ => {
//     let cursos__item__height = document.getElementById('cursos__item').offsetHeight
//     console.log(cursos__item__height)

//     updateCursosHeight(cursos__item__height)
// })

// function updateCursosHeight(cursos__item__height) {

//     const cursos_wrapper = document.getElementById('cursos__wrapper')

//     console.log('opa: ' + cursos__item__height)

//     let values = checkCursosWrapperGrid()

//     cursos_wrapper.style.height = cursos_wrapper.offsetHeight
//     cursos_wrapper.style.height = cursos__item__height + 'px'

//     console.log(values)

// }

// function checkCursosWrapperGrid() {

//     let total_rows, first_row

//     if (window.innerWidth < 600) 
//     {total_rows = 19; first_row = 3}

//     if (window.innerWidth >= 600 && window.innerWidth < 1500) 
//     {total_rows = 10; first_row = 2}

//     if (window.innerWidth >= 1500) 
//     {total_rows = 7; first_row = 1}

//     let values = [total_rows, total_rows - 1, first_row, first_row - 1]

//     return values
// }

// let is_cursos_wrapper_open = false

// function mostrarTodos() {

//     const cursos_wrapper = document.getElementById('cursos__wrapper')

//     let cursos_wrapper_height_before = cursos_wrapper.offsetHeight
//     let cursos_wrapper_row_gap = parseFloat(window.getComputedStyle(cursos_wrapper).getPropertyValue('row-gap'))

//     let values = checkCursosWrapperGrid()

//     if (!is_cursos_wrapper_open) {
//         cursos_wrapper.style.height = values[0]*cursos_wrapper_height_before + values[1]*cursos_wrapper_row_gap + 'px'
//     }
// }






























































































// const cursos_wrapper = document.getElementById('cursos__wrapper')


// let cursos_item_height
// let cursos_wrapper_row_gap


// function updateCursosWrapper() {
    
//     const cursos_item = document.getElementById('cursos__item')

//     cursos_item_height = parseFloat(window.getComputedStyle(cursos_item).getPropertyValue('height'))
//     cursos_wrapper_row_gap = parseFloat(window.getComputedStyle(cursos_wrapper).getPropertyValue('row-gap'))
    
//     console.log(cursos_item_height, cursos_wrapper_row_gap)
    
//     let values = checkCursosWrapperGrid()
    
//     cursos_wrapper.style.height = (values[3]*cursos_item_height + values[1]*cursos_wrapper_row_gap)*1.75 + 'px'

//     for (let item of document.getElementsByClassName('cursos__item')) {
//         item.style.height = cursos_item_height + 'px'
//     }
// }


// let is_mostrar_todos_open = false

// function mostrarTodos() {

//     let values = checkCursosWrapperGrid()
    
//     console.log(values)

//     if (!is_mostrar_todos_open) {
        
//         cursos_wrapper.style.height = values[0]*cursos_item_height + values[2]*cursos_wrapper_row_gap + 'px'

//         cursos_wrapper.style.overflowY = 'unset'

//         is_mostrar_todos_open = true

//     } 
//     else {
        
//         cursos_wrapper.style.height = values[3]*cursos_item_height + values[1]*cursos_wrapper_row_gap + 'px'

//         cursos_wrapper.style.overflowY = 'scroll'

//         is_mostrar_todos_open = false
//     }
    
// }

// function checkCursosWrapperGrid() {

//     let total_rows, initial_gaps, gaps, first_row
//     let values = []

//     if (window.innerWidth < 600) {
//         total_rows = 19
//         gaps = 18
//         initial_gaps = 2
//         first_row = 3
//     }

//     if (window.innerWidth >= 600 && window.innerWidth < 1500) {
//         total_rows = 10
//         gaps = 9
//         initial_gaps = 1
//         first_row = 2
//     }

//     if (window.innerWidth >= 1500) {
//         total_rows = 7
//         gaps = 6
//         initial_gaps = 0
//         first_row = 1
//     }

//     values = [total_rows, initial_gaps, gaps, first_row]

//     return values
// }






// window.addEventListener('load', updateCursosWrapper)
// window.addEventListener('resize', updateCursosWrapper)

// function updateCursosWrapper() {

//     const cursos_wrapper = document.getElementById('cursos__wrapper')

//     let cursos_item_height = document.getElementById('cursos__item').offsetHeight
//     let cursos_wrapper_row_gap = parseFloat(window.getComputedStyle(cursos_wrapper).getPropertyValue('row-gap'))

//     let values = checkCursosWrapperGrid()

//     cursos_wrapper.style.height = (values[3]*cursos_item_height + values[1]*cursos_wrapper_row_gap)*1.75 + 'px'
// }

// function checkCursosWrapperGrid() {

//     let total_rows, first_row

//     if (window.innerWidth < 600) 
//     {total_rows = 19; first_row = 3}

//     if (window.innerWidth >= 600 && window.innerWidth < 1500) 
//     {total_rows = 10; first_row = 2}

//     if (window.innerWidth >= 1500) 
//     {total_rows = 7; first_row = 1}

//     let values = [total_rows, total_rows - 1, first_row, first_row - 1]

//     return values
// }