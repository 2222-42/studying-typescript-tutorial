var box;
console.log(typeof (box));
box = "hello";
console.log(typeof (box));
box = 100;
function getProduct(id) {
    return {
        id: id,
        name: "Awesome Gadget " + id,
        price: 99.5
    };
}
var showProduct = function (name, price) {
    console.log("the product " + name + " costs $" + price);
};
var product = getProduct(1);
showProduct(product.name, product.price);
