function createProduct(obj, callback) {
    const productId = generateUniqueId();
    const product = { id: productId, ...obj };
    callback(product);
    return product;
}

function logProduct(product) {
    console.log('Product:', product);
}

function logTotalPrice(product) {
    const totalPrice = product.price * product.quantity;
    console.log('Total Price:', totalPrice);
}

function generateUniqueId() {
    const timestamp = new Date().getTime().toString(36);
    const randomPart = Math.random().toString(36).substring(2, 5);
    return `${timestamp}-${randomPart}`;
}

const product_a = {
    name: 'Product A',
    price: 20,
    quantity: 3,
};

const productWithId = createProduct(product_a, logProduct);
createProduct(product_a, logProduct);
createProduct(product_a, logTotalPrice);
console.log(productWithId.id);
