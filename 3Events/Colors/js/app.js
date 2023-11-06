const pictureList = document.querySelector('body')
pictureList.style.display = "flex"
pictureList.style.flexWrap = "wrap"
pictureList.style.gap = "5px"
pictureList.style.justifyContent = "center"

for(let index = 0; index < 12; index++)
{
    addBlock();
}

function addBlock()
{
    let block = document.createElement('div')
    block.style.flexBasis = '24.5%'
    block.style.height = '200px'
    block.style.backgroundColor = getRandomColorString()
    pictureList.appendChild(block);

    block.addEventListener('click', ()=>{
        block.style.backgroundColor = getRandomColorString();
    })
}

function getRandomColorString(){
    return `rgb(${randRGBValue()}, ${randRGBValue()}, ${randRGBValue()})`
    // return randomColor = "#" + String(Math.floor(Math.random()*16777215).toString(16));
}

function randRGBValue(){
    return Math.floor(Math.random() * 255)
}
