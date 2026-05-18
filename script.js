//Focus on searchbar
window.addEventListener('load', () => {
    setTimeout(() => {
        const searchInput = document.getElementById('search-input');
        searchInput.focus();
    }, 50); 
});

//Variables
//To store the element's as objects * 3
const inputEL = document.getElementById('taskInput')
const list = document.getElementById('toDo__list')
const listIMP = document.getElementById('toDo_imp__list')

//create function to populate both lists
inputEL.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const inputELValue = inputEL.value.trim(); // .trim() prevents adding blank spaces
    
        if (inputELValue === "") return;
    
        if (event.shiftKey) {
            // 1. Add text string to the important array
            listDataIMP.push(inputELValue);
            
            // 2. Save the updated array to localStorage
            localStorage.setItem('savedListIMPData', JSON.stringify(listDataIMP));
        } else {
            // 1. Add text string to the regular array
            listData.push(inputELValue);
            
            // 2. Save the updated array to localStorage
            localStorage.setItem('savedListData', JSON.stringify(listData));
        }
    
        // 3. Tell your render function to update the DOM tree based on the new arrays
        renderList();

        // 4. Reset the input field
        inputEL.value = '';
    }
});

//Feature: Persistent Lists

let listData = JSON.parse(localStorage.getItem('savedListData')) || []
let listDataIMP = JSON.parse(localStorage.getItem('savedListIMPData')) || []

function renderList() {
    list.innerHTML = "";
    listIMP.innerHTML = ""; //clear the slate at loading time

// FIX 2: Render regular tasks to the regular list ONLY
    listData.forEach(taskText => {
        const updateList = document.createElement('li');
        updateList.textContent = taskText;
        list.appendChild(updateList);
    });

    // FIX 3: Added the missing loop for important tasks
    listDataIMP.forEach(taskText => {
        const updateList = document.createElement('li');
        updateList.textContent = taskText;
        listIMP.appendChild(updateList);
    });
}

renderList();


//Clear populated list on button action
const clearToDoBTN = document.getElementById('clearToDoBTN');
const clearToDoIMPBTN = document.getElementById('clearToDoIMPBTN');

clearToDoBTN.addEventListener('click', () => {
    list.innerHTML = "";
    listData = []; // Clear array
    localStorage.removeItem('savedListData'); // Clear storage vault
});

clearToDoIMPBTN.addEventListener('click', () => {
    listIMP.innerHTML = "";
    listDataIMP = []; // Clear array
    localStorage.removeItem('savedListIMPData'); // Clear storage vault
});

