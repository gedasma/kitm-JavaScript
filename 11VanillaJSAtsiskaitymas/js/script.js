
let courses = [
    test = {
        id: 2,
        courseName: "Math",
        courseLength: 60,
        description: "course about Math",
        price: 200.3,
        promotion: true
    },
    {
        id: 2,
        courseName: "Math",
        courseLength: 60,
        description: "course about Math",
        price: 200.3,
        promotion: true
    },
    {
        id: 3,
        courseName: "English B2",
        courseLength: 45,
        description: "advanced level of English",
        price: 300.55,
        promotion: false
    },
    {
        id: 4,
        courseName: "English C1",
        courseLength: 45,
        description: "beginer level of English",
        price: 300.55,
        promotion: true
    },
    {
        id: 5,
        courseName: "Statistics1",
        courseLength: 60,
        description: "intro to statistics",
        price: 500.45,
        promotion: true
    }
    
]

console.log(courses)

function createCourseItem(courseItem)
{
    let coursesListItem = document.createElement("li")
    let courseItemList = document.createElement("ul")
    let coursesListItemLabel = document.createElement("h3")
    
    courseItems = Object.values(courseItem)
    itemAmount = courseItems.length
    coursesListItemLabel.textContent = courseItems[1]

    let courseLength = document.createElement("li")
    courseLength.textContent = courseItems[2] + " " + "menesiu"
    courseItemList.appendChild(courseLength)

    let courseDesc = document.createElement("li")
    courseDesc.textContent = "apie:" + " "  + courseItems[3] 
    courseItemList.appendChild(courseDesc)

    let coursePrice = document.createElement("li")
    coursePrice.textContent = "Kaina:" + " "  + courseItems[4] 
    courseItemList.appendChild(coursePrice)

    coursesListItem.appendChild(coursesListItemLabel)
    coursesListItem.appendChild(courseItemList)
    return coursesListItem
}

let coursesContainer = document.querySelector(".coursesList")

for(let i = 0; i < courses.length; i++)
{
    coursesContainer.appendChild(createCourseItem(courses[i]))
}

console.log(Object.keys({courses}))