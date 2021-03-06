$(()=>{
let ulTasks = $('#ulTasks')
let btnAdd = $('#btnAdd')
let btnReset = $('#btnReset')
let inpNewTask  = $('#inpNewTask')
let btnCleanup = $('#btnCleanup')
let btnSort = $('#btnSort')

function addItem(){
    let listitem = $('<li>', {
        'class':'list-group-item',
        text:inpNewTask.val()
    })
    ulTasks.append(listitem)
    inpNewTask.val('')
    listitem.click((event) => {
        //console.log("clicked", $(event.target))--->just for debugging!!
        $(event.target).toggleClass('done')
        //toggleClass()-->changes the class of any element
    })
}

function toggleAddResetBtn(){
    btnReset.prop('disabled',inpNewTask.val != '')
    btnAdd.prop('disabled',inpNewTask.val != '')
    btnSort.prop('disabled',ulTasks.children.length()<1)
    btnCleanup.prop('disabled',ulTasks.children.length()<1)
}

function clearDone(){
    $('#ulTasks li.done').remove()
    //$('#ulTasks  .done').remove()
}

function sortDone(){
    $('#ulTasks .done').appendTo(ulTasks)
}

inpNewTask.keypress((e) =>{
    if(e.which==13){
       addItem()
    }
    //console.log(e.which)
    /**
     * for debugging
     * go into the output on console
     * search for original event
     * then inside it, search for keycode
     * and we get the keycode
     * alternate way is :--
     * e.which --->gives keycode
     */
})
btnAdd.click(()=>{
    addItem()
})
btnReset.click(()=>{
    inpNewTask.val("")
    toggleAddResetBtn()
})

btnCleanup.click(clearDone)
btnSort.click(sortDone)
inpNewTask.on('input', ()=>{
    toggleAddResetBtn() 
})
})

