$(()=>{
let ulTasks = $('#ulTasks')
let btnAdd = $('#btnAdd')
let btnClear = $('#btnClear')
let inpNewTask  = $('#inpNewTask')

$('#btnAdd').click(()=>{
    let listitem = $('<li>', {
        'class':'list-group-item',
        text:inpNewTask.val()
    })
    ulTasks.append(listitem)
    console.log(inpNewTask.val())
    inpNewTask.val("")
})
})

