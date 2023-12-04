const { User } = require("./User");

class Student extends User
{
    constructor(name, email, subject)
    {
        super(name, email)
        this.subject = subject
    }
    
}

module.exports = {
    Student
}