// document.querySelector("#vip").addEventListener('click',()=>{
//     alert("paspaudziau")
// })

// document.querySelector(".adsss").onclick = ()=>{
//     alert("kitas")
// }


for(const article of document.querySelectorAll('article p')){
    article.addEventListener('click',()=>{
        // console.log((article.))
        article.style.fontSize="2em";
    })
}

document.querySelector('form').addEventListener('submit', (e)=>{
    e.preventDefault(); // pakeicia standartine formos elgsena
    console.log(e.target)
    const bgColor = document.querySelector('input').value
    document.querySelector('body').style.backgroundColor = bgColor
})

// sukurti todo list aplikacija
// vartotojas iveda i form input lauka darbo pavadinima
// paspaudzia mygtuka prideti
// ivestas darbas pridedamas i ul lista
// kai vartotojas paspaudzia mygtuka pasalinti  pasalinamas paskutinis darbas, su li elementu
// darbo skuriumo metu i ul sukuriamas li, o i li idedamas darba arsantis tekstas

const todoForm = document.querySelector('.todo > form')
const todoInputBtn = document.querySelector('.todo .add')
const todoInputField = document.querySelector('.todo input')
const todoRemoveBtn = document.querySelector('.todo .delete')
const todoList = document.querySelector('.todo ul')

todoForm.addEventListener('submit', (event)=>{
    event.preventDefault();
})

todoInputBtn.addEventListener('click', ()=>{
    todoAdd()
})

todoRemoveBtn.addEventListener('click', ()=>{
    todoRemove()
})


function todoAdd()
{
    if(todoInputField.value == ''){
        return
    }
    let listItem = document.createElement('li')
    listItem.textContent = todoInputField.value
    todoList.appendChild(listItem)
    
        
    listItem.addEventListener('click',()=>{
        console.log((listItem.textContent))
        listItem.style.backgroundColor ="red"
    })
    
}

function todoRemove()
{
    if(todoList.lastElementChild == null){
        return
    }
    todoList.removeChild(todoList.lastElementChild)
}



