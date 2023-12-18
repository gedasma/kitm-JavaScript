import { useState } from "react";
import './form.scss'
let productid = 0

function Form(props) {
    const [formData, setFormData] = useState({
        id:'',
        productName:'',
        productPrice:'',
        productAmount:'',
    })

    const handleInputChange = (event) => {
        
        setFormData(
            {
                ...formData,
                [event.target.name]:event.target.value
            }
        )
        console.log(formData)
    }

    const submitHandler = (event) =>{
        console.log("isaugota su id: " + productid)
        formData.id = productid;
        productid += 1
        
        event.preventDefault();
        console.log(formData)
        props.addProductToProductList(formData)
    }

  return (
    <form className="productForm card" onSubmit={submitHandler}>
        <h3>Add Product</h3>
        {/* <div className="productForm__id">
            <input type="text" name="id" id="id" placeholder="Id" onChange={handleInputChange} value={formData.id}/>
        </div> */}
        <div className="productForm__productName">
            <input className="form-control" type="text" name="productName" id="productName" placeholder="Product Name" onChange={handleInputChange} value={formData.productName}/>
        </div>
        <div className="productForm__productPrice">
            <input className="form-control" type="number" name="productPrice" id="productPrice" placeholder="Price" onChange={handleInputChange} value={formData.productPrice}/>
        </div>
        <div className="productForm__productAmount">
            <input className="form-control" type="number" name="productAmount" id="productAmount" placeholder="Amount" onChange={handleInputChange} value={formData.productAmount}/>
        </div>
        <div className="productForm__productOrder">
            <button className="btn btn-success" type="submit">Save</button>
        </div>
    </form>
  );
}

export default Form;
