import 'bootstrap/dist/css/bootstrap.min.css';
import './main.scss';
import { useState } from "react";
import Form from "../form/Form";
import ProductTable from "../productTable/ProductTable";

const Main = ()=> {
    const [productList, setProductList] = useState([])

    const addProductToProductList = (product) =>{
        setProductList((prevData) =>{
            return [product,...prevData]
        })
    }
    return (
        <main className="container">
            <Form addProductToProductList={addProductToProductList}/>
            <ProductTable productList={productList}/>
        </main>
    );
}
export default Main