function applyDiscountAndId(products) {
    const discountRate = 0.2;
    
    const productsWithDiscount = products.map((product, index) => {
        const discountedPrice = product.price - (product.price * discountRate);
        return {
            id: index + 1,
            name: product.name,
            price: discountedPrice,
        };
    });

    return productsWithDiscount;
}

const fruits = [
    { name: "apple", price: 200 },
    { name: "orange", price: 300 },
    { name: "grapes", price: 750 },
];

const discountedFruits = applyDiscountAndId(fruits);

console.log(discountedFruits);
