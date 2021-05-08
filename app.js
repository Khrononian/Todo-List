// Variables
const submitBtn = document.getElementById("submit-btn");
const inputValue = document.getElementById("user-insert");
const checkMark = document.querySelector(".fa-check-circle");
const timesMark = document.querySelector(".fa-times-circle");
const clearAll = document.querySelector(".clear-btn");

// Event Listeners
submitBtn.addEventListener("click", submitValue);
checkMark.addEventListener("click", checkBtn);
timesMark.addEventListener("click", removeBtn);
clearAll.addEventListener("click", clearBtn);

// Functions
function submitValue(event) {
    event.preventDefault();

    const divs = document.createElement("div");
    let p = document.createElement("p");
    let i = document.createElement("i");
    let divSelect = document.querySelector(".contain-list");
    
    divSelect.appendChild(divs); // Appends the div
    divs.className = "list";
    divs.appendChild(p); // Appends the p tag
    p.innerText = `${inputValue.value}`;
    let innerDiv = divs.appendChild(document.createElement("div"));
    innerDiv.style.width = "52px";
    innerDiv.appendChild(document.createElement("i")).className = "far fa-check-circle icon-auto" // Gives the class name 
    innerDiv.addEventListener("click", checkBtn); // Adds the event listener to the appended element
    innerDiv.appendChild(i).addEventListener("click", removeBtn);
    i.className = "far fa-times-circle";

    if (inputValue.value == "") {
        document.querySelector(".notification").style.display = "block";
        divs.remove();
        setTimeout(() => document.querySelector(".notification").style.display = "none", 2000);
    }
    inputValue.value = "";
}
function checkBtn(event) {
    let pSelect = event.target.parentElement.parentElement
    event.target.classList.toggle("clear-info")
    pSelect.querySelector("p").classList.toggle("clear-info");
}
function removeBtn(event) {
    event.target.parentElement.parentElement.remove();
}
function clearBtn() {
    const removeLists = document.querySelectorAll(".list");

    for(let i=0; i<removeLists.length; i++) {
        removeLists[i].remove();
    }
}


