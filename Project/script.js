$(()=>{
let ulTasks = $('#ulTasks')
let btnAdd = $('#btnAdd')
let btnReset = $('#btnReset')
let inpNewTask  = $('#inpNewTask')
let btnCleanup = $('#btnCleanup')
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
})
})

