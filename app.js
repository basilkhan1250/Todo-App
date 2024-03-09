
// const fruit = ['apple' , 'banana' , 'orange' , 'watermelon' , 'strawberry' , 'melon' , 'grapes' , 'pineapple' , 'guava'];
// const select = document.querySelector('select');

// for (let i = 0; i < fruit.length; i++) {
//     select.innerHTML += `<option>${fruit[i]}</option>`
// }



// let ask = +prompt("enter your number for table")

// for (i = 1; i <= 10; i++){
//     console.log(`${ask} x ${i} = ${ask*i}`)
// }



























// TODO APP






const input = document.querySelector("input")
const ol = document.querySelector("ol")
const todo = []

function renderTodo() {
    ol.innerHTML = " "
    for (i = 0; i < todo.length; i++) {
        ol.innerHTML += `<li>${todo[i]} <br/>
        <button class="insidebuttons" onclick="deleteTodo (${i})">delete</button>
        <button class="insidebuttons" onclick="editTodo (${i})">edit</button>
        </li>`
    }
}

function addTodo() {
    todo.push(input.value)
    input.value = " "
    renderTodo()

}

function deleteAll (deleted){
    todo.splice(deleted)
    renderTodo()
}

function deleteTodo(index) {
    todo.splice(index, 1)
    renderTodo()

}
function editTodo(index) {
    let ask = prompt("enter your value" )
    todo.splice(index, 1, ask)
    renderTodo()
}


