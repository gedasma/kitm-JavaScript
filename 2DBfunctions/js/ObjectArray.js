let students = [
    {   id:1,
        firstName: "Tadas",
        lastName: "Tadaauskas",
        email: "tadauskas@email.com",
        group: "students",
        marks:[
        {
            subject:'programing',
            mark: 8
        },
        {
            subject:'math',
            mark: 7
        },
        {
            subject:'programing',
            mark: 9
        },
        {
            subject:'programing',
            mark: 6
        }
        ]
    },
    {
        id:3,
        firstName: "Ieva",
        lastName: "Ievaite",
        email: "ievaite@stud.lt",
        group: "students",
        marks:[
            {
                subject:'programing',
                mark: 8
            },
            {
                subject:'math',
                mark: 7
            },
            {
                subject:'literature',
                mark: 10
            },
            {
                subject:'literature',
                mark: 10
            }
            ]
    },
    {
        id:4,
        firstName: "Rokas",
        lastName: "Rokauskas",
        email: "rokauskas@stud.lt",
        group: "students",
        marks:[
            {
                subject:'programing',
                mark: 8
            },
            {
                subject:'programing',
                mark: 8
            },
            {
                subject:'programing',
                mark: 8
            },
            {
                subject:'programing',
                mark: 9
            }
            ]
    },
    {
        id:3,
        firstName: "Aurelijus",
        lastName: "Aurelinaitis",
        email: "aurelinaitis@email.lt",
        group: "students",
        marks:[
            {
                subject:'math',
                mark: 5
            },
            {
                subject:'math',
                mark: 8
            },
            {
                subject:'literature',
                mark: 9
            },
            {
                subject:'programing',
                mark: 10
            }
            ]
    }
]

let userInput = prompt("Iveskite studento varda")

// console.log("Studentai")

for(student of students)
{
    if( student.firstName == userInput)
    {
        PrintStudent(student)
        break;
    }
}

function PrintStudent(student){
    console.log(`Studento ${student.firstName} informacija:`)
        for(studentProperty in student)
        {
            if(studentProperty == "id")
            {

            }
            else if(studentProperty == "group")
            {
                console.log(`Grupe: ${student[studentProperty]}`)
            }
            else if(studentProperty == "marks")
            {
                console.log("Pazymiai:")
                for(let i=0; i < student[studentProperty].length; i++)
                {
                    console.log(`   ${i+1}. ${student[studentProperty][i].subject}: ${student[studentProperty][i].mark}`);
                }
            }
            else
            {
                console.log(student[studentProperty])
            }
        }
}