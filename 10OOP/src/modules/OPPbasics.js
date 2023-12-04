export function OPPbasics()
{
        // function Person(name,email,role) 
    // {
    //     this.name = name;
    //     this.email = email;
    //     this.role = role;
    //     this.greeting = function()
    //     {
    //         alert(`HI! my name is ${name}, i have an email that is ${email}, my role is ${role}`)
    //     }
    // }

    // //you can add stuff like this:
    // Person.prototype.yo = function(){
    //     console.log("yo")
    // }

    // let person1 = new Person("Gediminas", "ged@ged.com", "human")
    // person1.greeting()
    // person1.yo()


    // you can declare an object and then define it like this:
    // const userOne = new Object();
    // userOne.name = "Jonas"
    // userOne.sayHi = function(){
    //     console.log(this.name)
    // }
    // console.log(userOne)
    // userOne.sayHi()

    class User
    {
        constructor(name, email)
        {
            this.name = name
            this.email = email
        }

        setRole(role) //setter
        {
            this.role = role
        }

        setDepartment(department) //setter
        {
            this.department = department
        }

        getUserProfile() //getter
        {
            return [
                this.email,
                this.email
            ]
        }

        getFullUserData() //getter
        {
            return[
                this.name,
                this.email,
                this.role,
                this.department
            ]
        }

        displayUI(dataList)
        {
            // display user data in html list
            let list = document.createElement("ul")
            for(let item in dataList)
            {
                let listItem = document.createElement("li")
                listItem.textContent = dataList[item]
                list.appendChild(listItem)
            }
            document.querySelector("body").appendChild(list)
        }
    }

    let userOne = new User('Jonas', "jonas@jonas.com")
    userOne.setRole("admin")
    userOne.setDepartment("IT")
    userOne.displayUI(userOne.getFullUserData())
}
