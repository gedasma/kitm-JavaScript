let tasks = rowGetLocalStorage()

for (let task of tasks)
{
    addTaskToDOM(task)
}

//create new task
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
    task.modDate = getCurrentDate()

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

function rowSetPercentBar(row, percent)
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

function rowSetNewModifiedDate(row, date)
{
    let setClass = "tableRow__modifiedDate__content"
    let rowContent = row.querySelector("." + setClass)
    rowContent.textContent = date
}

function getCurrentDate()
{
    let currentDate = new Date()
    let year = currentDate.getFullYear();
    let month = (currentDate.getMonth() + 1).toString().padStart(2, '0')
    let day = currentDate.getDate();
    let hours = currentDate.getHours().toString().padStart(2, '0')
    let minutes = currentDate.getMinutes().toString().padStart(2, '0')
    return `${day}/${month}/${year} ${hours}:${minutes}`
}

function rowUpdateModDate(row, rowIndex)
{
    let updatDate = getCurrentDate()
    tasks[rowIndex].modDate = updatDate
    rowSetNewModifiedDate(row, updatDate)
}

function rowCreate(type, subject, priority, dueDate, percent, modDate)
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
    rowSetPercentBar(newRow, percent)
    rowSetNewModifiedDate(newRow, modDate)

    return newRow
}

function addTaskToDOM(task)
{
    let row = rowCreate(task.type, task.subject, task.priority, task.dueDate, task.percent, task.modDate)
    rowAddClickEvents(row)

    let tableBody = document.querySelector('.toDoTable__body')
    tableBody.appendChild(row)
}

function askUserInput(promptMessage)
{
    let userInput = prompt(promptMessage); 
        if (userInput != null) { 
            return userInput
        }
        else{
            return askUserInput(promptMessage)
        }
}

function askProgressPercent(promptMessage)
{
    let userInput = askUserInput(promptMessage)
    if(parseInt(userInput) == userInput && userInput >= 0 && userInput <= 100){
        return userInput
    }
    return askProgressPercent("Incorrect input please enter a number between 1 and 100")
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
        rowUpdateModDate(row, rowIndex)
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
        rowUpdateModDate(row, rowIndex)
        rowSaveToLocalStorage(tasks)
        rowSetPriority(row, tasks[rowIndex].priority)
    })

    //progress bar update
    rowProgresButton = row.querySelector('.tableRow__percent__content')
    rowProgresButton.addEventListener('click', ()=>{
        let rowList = row.parentElement; //gets all rows
        let rowIndex = Array.from(rowList.children).indexOf(row) - 1; // gets index of row, -1 because of the base row
        let newPercent = askProgressPercent("Please enter new progress percent.")
        tasks[rowIndex].percent = newPercent
        rowUpdateModDate(row, rowIndex)
        rowSaveToLocalStorage(tasks)
        rowSetPercentBar(row, newPercent)
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
