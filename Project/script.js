$(()=>{
let ulTasks = $('#ulTasks')
let btnAdd = $('#btnAdd')
let btnClear = $('#btnClear')
let inpNewTask  = $('#inpNewTask')

btnAdd.click(()=>{
    let listitem = $('<li>', {
        'class':'list-group-item',
        text:inpNewTask.val()
    })
    ulTasks.append(listitem)
    inpNewTask.val("")
    listitem.click((event) => {
        //console.log("clicked", $(event.target))--->just for debugging!!
        $(event.target).toggleClass('disabled')
    })
})

btnClear.click(()=>{
    inpNewTask.val("")
})

})

