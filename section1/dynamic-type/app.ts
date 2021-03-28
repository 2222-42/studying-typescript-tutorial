let box;
console.log(typeof(box));
box = "hello";
console.log(typeof(box));
box = 100;
// undefined
// string
// number

interface Product{
    id: number,
    name: string,
    price: number
}

function getProduct(id: number) : Product{
    return {
        id: id,
        name: `Awesome Gadget ${id}`,
        price: 99.5
    }
}

const showProduct = (name: string, price: number) => {
    console.log(`the product ${name} costs $${price}`);
}

const product = getProduct(1);
showProduct(product.name, product.price);