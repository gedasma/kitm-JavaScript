const pictureList = document.querySelector('ul')
const form = document.querySelector('form')
const showBtn = document.querySelector('.show')
const mixBtn = document.querySelector('.mix')

form.addEventListener('submit', (event)=>{
    event.preventDefault();
})

showBtn.addEventListener('click', ()=>{
    fillListElement()
    showBtn.setAttribute("disabled", "true")
})

mixBtn.addEventListener('click', ()=>{
    mixListElementSources()
})

//functions-------------------------------------

function fillListElement(){
    for(let index = 0; index < 12; index++){
        pictureList.appendChild(createPicture())
    }
}

function mixListElementSources(){
    for(let div2 of pictureList.querySelectorAll('li'))
    {
        div2.querySelector('img').setAttribute("src", randomPicturePath())
    }
}

function createPicture(){
    let pictureListItem = document.createElement("li")

    let picture = document.createElement("img")
    picture.setAttribute("src", randomPicturePath())

    pictureListItem.appendChild(picture)

    pictureListItem.addEventListener('dblclick',()=>{
        picture.setAttribute("src", randomPicturePath())
    })
    return pictureListItem
}

function randomPicturePath(){
    return picturePath = `resources/picture${Math.floor(Math.random() * 12) + 1}.jpeg`
}