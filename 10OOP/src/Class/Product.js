class Product
{
    constructor(productName, productPrice, productYear)
    {
        this.productName = productName
        this.productPrice = productPrice
        this.productYear = productYear
    }

    setProductName(productName)
    {
        this.productName = productName
    }
    
    setProductName(productPrice)
    {
        this.productPrice = productPrice
    }

    setProductName(productYear)
    {
        this.productYear = productYear
    }

    getProductData()
    {
        return [
            this.productName,
            this.productPrice,
            this.productYear
        ]
    }

    addProductToDom()
    {
        let productCard = document.createElement("div")
        productCard.classList.add("card", "products__product")
        productCard.innerHTML=`
            <div class="products__product__title">Product:</div>
            <div class="products__product__info">${this.productName}</div>
            <div class="products__product__title">Product Price:</div>
            <div class="products__product__info">${this.productPrice}</div>
            <div class="products__product__title">Product Year:</div>
            <div class="products__product__info">${this.productYear}</div>
        `
        document.querySelector(".products").appendChild(productCard)
    }

    checkIfDataIsvalid()
    {
        return this.isNotEmpty(this.productName) &&
            (this.isNotEmpty(this.productPrice) && this.isNumberWithTwoDecimalPlaces(this.productPrice)) &&
            (this.isNotEmpty(this.productYear) && this.isStringValidYear(this.productYear))

    }
    
    isNotEmpty(input) {
        return input.replace(/\s/g, '').length > 0;
    }

    isNumberWithTwoDecimalPlaces(input) {
        const regex = /^\d+(\.\d{1,2})?$/;
        return regex.test(input);
    }

    isStringValidYear(input) {
        return (Number.isInteger(Number(input)) && Number(input) > 0);
    }
}

module.exports = {
    Product
}