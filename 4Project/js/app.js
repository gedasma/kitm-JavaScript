let tasks = rowGetLocalStorage()

for (let task of tasks)
{
    addTaskToDOM(task)
}

createForm = document.querySelector(".createForm")
addButton = createForm.querySelector("button")
addButton.addEventListener('click', (event)=>{
    event.preventDefault();
    
    let rowType = createForm.elements.type.value 
    let rowSubjectText = createForm.elements.subject.value 
    let rowPriority = createForm.elements.priority.value
    let rowDueDate = createForm.elements.dueDate.value

    let task = new Object()
    task.type = rowType
    task.subject = {
        text: rowSubjectText,
        isComplete: false
    }
    task.priority = rowPriority
    task.dueDate = rowDueDate
    task.percent = 0

    tasks.push(task)
    taskId = tasks.length-1
    rowSaveToLocalStorage(tasks)
    addTaskToDOM(task)
})

function rowGetLocalStorage()
{
    if(localStorage.getItem('toDoTasks') != null){
        return JSON.parse(localStorage.getItem('toDoTasks'))
    }
    else{
        return []
    }
}
function rowSaveToLocalStorage(tasks)
{
    localStorage.setItem('toDoTasks', JSON.stringify(tasks)) 
}

function rowSetType(row, iconLink)
{
    let setClass = "tableRow__type__content"
    let rowContent = row.querySelector("." + setClass)
    let image = rowContent.querySelector('img')
    image.setAttribute("src", iconLink)
}

function rowSetTaskComplete(row, boolValue)
{
    let setClass = "tableRow__subject__content"
    let rowContent = row.querySelector("." + setClass)
    let subjectCompleteClass = setClass + "--completed"
    if(boolValue){
        rowContent.classList.add(subjectCompleteClass)
    }
    else if(element.classList.contains(subjectCompleteClass)){
        rowContent.classList.remove(subjectCompleteClass)
    }
}

function rowSetTaskStatus(row, boolValue)
{
    let setClass = "tableRow__subject__content"
    let rowContent = row.querySelector("." + setClass)
    let subjectCompleteClass = "--completed"

    if(boolValue){
        rowContent.classList.add(setClass + subjectCompleteClass)
    }
    else if(rowContent.classList.contains(setClass + subjectCompleteClass)){
        rowContent.classList.remove(setClass + subjectCompleteClass)
    }

}

function rowSetSubject(row, subject)
{
    rowSetSubjectText(row, subject.text)
    rowSetTaskStatus(row, subject.isComplete)
}

function rowSetSubjectText(row, text)
{
    let rowSubjectText = row.querySelector(".tableRow__subject__content > span")
    rowSubjectText.textContent = text
}

function rowSetPriority(row, priorityType)
{
    let setClass = "tableRow__priority__content"
    let rowContent = row.querySelector("." + setClass)

    rowContent.classList.remove(setClass + `--${"low"}`)
    rowContent.classList.remove(setClass + `--${"normal"}`)
    rowContent.classList.remove(setClass + `--${"high"}`)

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
    tableRowClass = "tableRow"
    let originalRow = document.querySelector('.' + tableRowClass)
    let newRow = originalRow.cloneNode(true)
    newRow.classList.remove(tableRowClass + "--base")

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

    return newRow
}

function addTaskToDOM(task)
{
    let row = rowCreate(task.type, task.subject, task.priority, task.dueDate, task.percent)
    rowAddClickEvents(row)

    let tableBody = document.querySelector('.toDoTable__body')
    tableBody.appendChild(row)
}

function rowAddClickEvents(row)
{
    //type button
    rowSubjectContent = row.querySelector(".tableRow__type__content")
    rowSubjectContent.addEventListener('click', ()=>{
        let rowList = row.parentElement; //gets all rows
        let rowIndex = Array.from(rowList.children).indexOf(row) - 1; // gets index of row, -1 because of the base row
        if(tasks[rowIndex].subject.isComplete == false){
            tasks[rowIndex].subject.isComplete = true
        }
        else{
            tasks[rowIndex].subject.isComplete = false
        }
        rowSaveToLocalStorage(tasks)
        rowSetSubject(row, tasks[rowIndex].subject)
    })

    //priority button
    priorityContentClass = 'tableRow__priority__content'
    rowPriorityButton = row.querySelector("." + priorityContentClass)
    rowPriorityButton.addEventListener('click', ()=>{
        let rowList = row.parentElement; //gets all rows
        let rowIndex = Array.from(rowList.children).indexOf(row) - 1; // gets index of row, -1 because of the base row
        if(tasks[rowIndex].priority == "low"){
            tasks[rowIndex].priority = "normal"
        }
        else if(tasks[rowIndex].priority == "normal"){
            tasks[rowIndex].priority = "high"
        }
        else if(tasks[rowIndex].priority == "high"){
            tasks[rowIndex].priority = "low"
        }
        rowSaveToLocalStorage(tasks)
        rowSetPriority(row, tasks[rowIndex].priority)
    })

    //delete button
    rowDeleteButton = row.querySelector('.tableRow__delete__content')
    rowDeleteButton.addEventListener('click', ()=>{
        let rowList = row.parentElement; //gets all rows
        let rowIndex = Array.from(rowList.children).indexOf(row) - 1; // gets index of row, -1 because of the base row
        tasks.splice(rowIndex, 1);
        rowSaveToLocalStorage(tasks)
        row.remove()
    })
}
