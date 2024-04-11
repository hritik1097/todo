const input=document.querySelector(".input")
const button2=document.createElement("button")
button2.classList.add("button2")
const alltask=document.querySelector(".alltask")
const button1=document.querySelector(".add");



button1.addEventListener("click",()=>{
    const task=document.createElement("li")
    const todo=input.value
    task.innerHTML=`
    <span>${todo}</span>
    <button onclick="remove(this)" class="button2">Remove</button>`
     alltask.appendChild(task);
     input.value="";
})

function remove(element){
element.parentNode.remove()
}