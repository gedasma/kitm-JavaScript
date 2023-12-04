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

module.exports ={
    User
}