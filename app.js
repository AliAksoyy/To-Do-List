// DOM Elements

const addBtn = document.querySelector("#add-btn")
const delBtn = document.querySelector("#del-btn")
const input  = document.querySelector("#input")
const tasks = document.querySelector(".tasks");


addBtn.addEventListener("click", () => {
    if(!input.value) {
        alert("bir şeyler yazınız")
    }else {
        let task = document.createElement("div")
        task.className ="task"
        tasks.appendChild(task)
        task.innerHTML = `<p>${input.value}</p>
                        <div>
                        <button class="checked"><i class="fa-solid fa-circle-check"></i></button>
                        <button class="unchecked"><i class="fa-solid fa-check-double"></i></button>
                        <button class="trash"><i class="fa-solid fa-trash-can"></i></button>
                        </div>`;

    input.value=""
    input.focus()
    const checked =document.querySelectorAll(".checked")
    const unchecked =document.querySelectorAll(".unchecked")
    const trash =document.querySelectorAll(".trash")

    checked.forEach((el) => {
        el.addEventListener("click", ()=> {
            el.parentElement.parentElement.firstElementChild.classList.add("linethrough")
        })
    })

    unchecked.forEach((el) => {
        el.addEventListener("click", ()=> {
            el.parentElement.parentElement.firstElementChild.className =""
        })
        
    })

    trash.forEach((el) => {
        el.addEventListener("click", ()=> {
                    el.parentElement.parentElement.remove();
            // if(el.parentElement.parentElement.classList.contains("task")) {
            //     el.parentElement.parentElement.remove()
            // }else {
        
            // }
        })
    })
    }
})
function insertAfter(newNode, existingNode) {
  existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

delBtn.addEventListener("click",function() {
    if(document.querySelector(".container").nextElementSibling.classList.contains("tasks")) {
        let tasks =document.querySelector(".tasks")
        tasks.remove()
    } else {
        alert("silinecek bir şey yok")
        let newTasks = document.createElement("div")
        newTasks.classList.add("tasks")
        insertAfter(newTasks,container)
        input.focus()
    }
})

window.addEventListener("load", function() {
    input.focus()
})