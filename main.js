const CELL_AMOUNT = 64

let current_color = 'blue'

let button1 = "red"

let mesh = document.querySelector('.mesh')



for(let i = 0; i < CELL_AMOUNT; i += 1) {

    let newelement = document.createElement('div')
    newelement.classList.add('cellls')
    
    newelement.addEventListener('click', function(event) {
        event.target.style.backgroundColor = current_color
    })
    mesh.appendChild(newelement)
}


let redcolor = document.querySelector('.button1')

redcolor.addEventListener ('click',function()  {
    current_color = "red"
})

let clearcolor = document.querySelector('.clearb')

clearcolor.addEventListener ("click", function() {
    current_color = 'white'
})

let bluecolor = document.querySelector('.blueb')

bluecolor.addEventListener("click", function() {
    current_color = "blue"
})

let green = document.querySelector('.green')

green.addEventListener("click", function () {
    current_color = 'green'
})

let black = document.querySelector('.black')

black.addEventListener("click", function () {
    current_color = 'black'
})

let gray = document.querySelector('.gray')

gray.addEventListener("click", function () {
    current_color = 'gray'
})

let yellow = document.querySelector('.yellow')

yellow.addEventListener("click", function () {
    current_color = 'yellow'
})

let orange = document.querySelector('.orange')

orange.addEventListener("click", function () {
    current_color = 'orange'
})

let purple = document.querySelector('.purple')

purple.addEventListener("click", function () {
    current_color = 'purple'
})

let pink = document.querySelector('.pink')

pink.addEventListener("click", function () {
    current_color = 'pink'
})

let lightblue = document.querySelector('.lightblue')

lightblue.addEventListener("click", function () {
    current_color = 'lightblue'
})

function paint (event) {
    let element = event.target
    let isCell = element.classList.contains('cellls')

    if (isCell) 
    element.style.backgroundColor = current_color
}

mesh.addEventListener("mousedown", function() {
    mesh.addEventListener("mousemove", paint)
})

mesh.addEventListener('mouseup', function() {
    mesh.removeEventListener('mousemove', paint)
})
