// import { OPPbasics } from "./modules/OPPbasics";
// OPPbasics()


import { User } from "./Class/User";
import { Student } from "./Class/Student";

let userOne = new User('Jonas', "jonas@jonas.com")
userOne.setRole("admin")
userOne.setDepartment("IT")
userOne.displayUI(userOne.getFullUserData())

let student= new Student('karolis', 'karol@ka.com', 'JS')
student.setRole("admin")
student.setDepartment("IT")
console.log(student.getFullUserData())
    
//===============================

import { Product} from "./Class/Product"

let products = []

document.querySelector('.productFormContainer__form').addEventListener('submit', (e)=>{
    e.preventDefault()
    let productNameTextField = document.getElementById('productName')
    let productPriceTextField = document.getElementById('productPrice')
    let productNameTextYear = document.getElementById('productYear')
    let newProduct = new Product(productNameTextField.value, productPriceTextField.value, productNameTextYear.value)
    
    if(newProduct.checkIfDataIsvalid())
    {
        products.push(newProduct)
        newProduct.addProductToDom()
    }
    else
    {
        alert("Invalid Input")
    }
    
})