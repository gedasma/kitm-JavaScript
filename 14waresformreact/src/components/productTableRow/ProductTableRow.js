const ProductTableRow = (props)=> {
  return (
    <tr className="productTable__row">
        <th className="productTable__row__productId">{props.product.id}</th>
        <th className="productTable__row__productName">{props.product.productName}</th>
        <th className="productTable__row__productPrice">{props.product.productPrice}</th>
        <th className="productTable__row__productAmount">{props.product.productAmount}</th>
    </tr>

  );
}

export default ProductTableRow;
