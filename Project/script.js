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
    toggleAddResetBtn(false)
})

function clearDone(){
$('#ulTasks li.done').remove()
//$('#ulTasks  .done').remove()
}
btnCleanup.click(clearDone)

function sortDone(){
    $('#ulTasks .done').appendTo(ulTasks)
}
btnSort.click(sortDone)

function toggleAddResetBtn(enabled){
    if(enabled) {
        btnReset.prop('disabled',false)
        btnAdd.prop('disabled',false)
        btnSort.prop('disabled',false)
        btnCleanup.prop('disabled',false)
    }
    else {
        btnReset.prop('disabled',true)
        btnAdd.prop('disabled',true)
        btnSort.prop('disabled',true)
        btnCleanup.prop('disabled',true)
    }
}
inpNewTask.on('input', ()=>{
    toggleAddResetBtn(inpNewTask.val() != '') 
})
})

