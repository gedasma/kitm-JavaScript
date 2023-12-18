import ProductTableRow from "../productTableRow/ProductTableRow";

const ProductTable = (props)=> {
    console.log(props.productList)
    return (
        <div>
            <h3>Product List</h3>
            <table className="productTable table table-success table-striped-columns">
                <thead>
                    <tr className="productTable__header">
                        <th className="productTable__header__productId">Id</th>
                        <th className="productTable__header__productName">Name</th>
                        <th className="productTable__header__productPrice">Price</th>
                        <th className="productTable__header__productAmount">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.productList.map((product) =>
                            <ProductTableRow key={product.id} product={product}/>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}
export default ProductTable