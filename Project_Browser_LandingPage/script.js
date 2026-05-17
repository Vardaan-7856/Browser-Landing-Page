//Variables
//To store the element's as objects * 3
const inputEL = document.getElementById('taskInput')
const list = document.getElementById('toDo__list')
const listIMP = document.getElementById('toDo_imp__list')

//create function to populate both lists
inputEL.addEventListener('keydown',(event) =>{
    if(event.key === 'Enter')
    {

        const inputELValue = inputEL.value;
    
        //need to check if value is blank
        if(inputELValue === "")
            return;
        //return empty if so to prematurely leave
    
        const updateList = document.createElement('li');
        updateList.textContent = inputELValue;
    
        if(event.shiftKey)
            listIMP.appendChild(updateList);
        else
            list.appendChild(updateList);
    
        inputEL.value = '';
    }
    });



    

//Clear populated list on button action
const clearToDoBTN = document.getElementById('clearToDoBTN');
const clearToDoIMPBTN = document.getElementById('clearToDoIMPBTN');

clearToDoBTN.addEventListener('click', (deleteList) =>{

    list.innerHTML = "";
});
clearToDoIMPBTN.addEventListener('click', (deleteIMPlist) =>{
    listIMP.innerHTML = "";
});
