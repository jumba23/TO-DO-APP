const form     = document.querySelector('#addForm');
const input    = document.querySelector('input');
const ul       = document.querySelector('#toDoList');
const clearBtn = document.querySelector('#clearList');

// Create -> li
function createLi() {
    //declare variable and create elements for list, inpput value, and remove button
    const li   = document.createElement('li');
    const span = document.createElement('span');
    const removeBtn = document.createElement('button');
    //Get the input value to li item
    span.textContent = input.value;
    //set remove button text and ID value
    removeBtn.textContent = 'X';
    //append the two elements to the list
    li.appendChild(span);
    li.appendChild(removeBtn);
    // Show CLEAR ALL button on main page - on initial load display is set to NONE
    clearBtn.setAttribute('style', 'display: show');
   return li;
}
// on SUBMIT/ADD action call the function 
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const li = createLi();
    //if the input is NOT empty execute
    if (input.value !== ''){
            //add li with all of its values and items to ul
            ul.appendChild(li);
                //Clear the input field
                document.getElementById("addItem").value=""
    }
});
//Delete individual items from UL - to do list
ul.addEventListener('click', (e) => {
    if(e.target.textContent === 'X' ){
        const button = e.target;
        const li = button.parentNode;
        const ul = li.parentNode;
        ul.removeChild(li);
        } 
    });
//Line through toggle on selected item    
ul.addEventListener('mousedown', (e) => {
     if(e.target.textContent !== '' ){
        const line = e.target; 
        line.onclick = () => {
            line.classList.toggle('line')
        }
    }
});
 //Clear ALL button - clear ul
function clearList(){
    ul.innerHTML ="";
    clearBtn.setAttribute('style', 'display: none');
}