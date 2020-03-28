console.log("Start");

function click(){
    let container= document.querySelector("#list");
    container.addEventListener("click", (event)=>{
        if(event.target.innerHTML == "Check"){
            let id = event.target.parentElement.parentElement.getAttribute('id');
            let sectionP = document.querySelector(`#${id}P`);
            if(sectionP.classList.contains("notChecked")){
                sectionP.classList.remove("notChecked");
                sectionP.classList.add("checked");
            }
            else if(sectionP.classList.contains("checked")){
                sectionP.classList.remove("checked");
                sectionP.classList.add("notChecked");
            }
        }
        else if(event.target.innerHTML == "Delete"){
            let id = event.target.parentElement.parentElement.getAttribute('id');
            let sectionP = document.querySelector(`#${id}Div`);
            sectionP.remove();
        }
    });
}

function addItem(){
    console.log("Add item function");
    let itemBtn = document.querySelector("#addItem");
    let item = document.querySelector("#item");
    let list = document.querySelector("#list");
    itemBtn.addEventListener("click", (event)=>{
        list.innerHTML += `
        <div id="${item.value}Div">
            <li class="listElement" id="${item.value}">
                <p id="${item.value}P" class="notChecked">
                    ${item.value}
                </p>
                <div>
                    <button class="check" id="${item.value}Check">Check</button>
                    <button class="delete" id="${item.value}Delete">Delete</button>
                </div>
            </li>
        </div>
        `;
        item.value = "";
        event.preventDefault();
    });
}


function init(){
    addItem();
    click();
}

init();
