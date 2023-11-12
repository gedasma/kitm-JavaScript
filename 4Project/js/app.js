createForm = document.querySelector(".createForm")
addButton = createForm.querySelector("button")
addButton.addEventListener('click', (event)=>{
    event.preventDefault();
    let rowType = createForm.elements.type.value 
    let rowSubject = createForm.elements.subject.value 
    let rowPriority = createForm.elements.priority.value
    let dueDate = createForm.elements.dueDate.value

    let copyRow = rowCreate(rowType, rowSubject, rowPriority, dueDate, 100)
    let tableBody = document.querySelector('.toDoTable__body')
    tableBody.appendChild(copyRow)
})

function rowSetType(row, iconLink)
{
    let setClass = "tableRow__type__content"
    let rowContent = row.querySelector("." + setClass)
    let image = rowContent.querySelector('img')
    image.setAttribute("src", iconLink)
}

function rowSetComplete(row)
{
    let setClass = "tableRow__subject__content"
    let rowContent = row.querySelector("." + setClass)
    rowContent.classList.add(setClass + "--completed")
}
function rowSetSubject(row, text)
{
    let setClass = "tableRow__subject__content"
    let rowContent = row.querySelector("." + setClass + '> span')
    rowContent.textContent = text
}

function rowSetPriority(row, priorityType)
{
    let setClass = "tableRow__priority__content"
    let rowContent = row.querySelector("." + setClass)
    rowContent.textContent = priorityType.charAt(0).toUpperCase() + priorityType.slice(1);
    rowContent.classList.add(setClass + `--${priorityType}`)
}

function rowSetDueDate(row, date)
{
    let setClass = "tableRow__dueDate__content"
    let rowContent = row.querySelector("." + setClass)
    rowContent.textContent = date
}

function rowSetStatusBar(row, percent)
{
    let setClass = "tableRow__percent__content"
    let rowContent = row.querySelector("." + setClass)
    rowContent.querySelector('span').textContent =`${percent}%`
    let progressbar = rowContent.querySelector('.progress-bar')
    progressbar.style.width = `${percent}%`

    if(percent == 0){
        rowSetStatus(row, "New")
    }
    else if(percent == 100){
        rowSetStatus(row, "Complete")
    }
    else{
        rowSetStatus(row, "In Progress")
    }
}

function rowSetStatus(row, text)
{
    let setClass = "tableRow__status__content"
    let rowContent = row.querySelector("." + setClass)
    rowContent.textContent = text
}

function rowSetNewModifiedDate(row)
{
    let setClass = "tableRow__modifiedDate__content"
    let rowContent = row.querySelector("." + setClass)
    
    let currentDate = new Date()
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;
    let day = currentDate.getDate();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    date = `${day}/${month}/${year} ${hours}:${minutes}`

    rowContent.textContent = date
}

function rowCreate(type, subject, priority, dueDate, percent)
{
    let originalRow = document.querySelector('.tableRow')
    let newRow = originalRow.cloneNode(true)
    newRow.style.display = 'table-row';

    if(type == 'checkmark'){
        rowSetType(newRow, "resources/check-mark-square.svg")
    }
    else if(type == 'diamond'){
        rowSetType(newRow, "resources/diamond.svg")
    }

    rowSetSubject(newRow, subject)
    rowSetPriority(newRow,priority)
    rowSetDueDate(newRow, dueDate)
    rowSetStatusBar(newRow, percent)
    rowSetNewModifiedDate(newRow)
    
    rowDeleteButton = newRow.querySelector('button')
    rowDeleteButton.addEventListener('click', ()=>{
        newRow.remove()
    })

    rowSubjectContent = newRow.querySelector(".tableRow__subject__content")
    rowSubjectContent.addEventListener('click', ()=>{
        rowSetComplete(newRow)
    })

    return newRow
}