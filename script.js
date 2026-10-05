
// ================================
// VEGETABLE SHOP - CART SYSTEM
// ================================

console.log("Vegetable Shop website loaded successfully.");


// Get existing cart
function getCart() {
    return JSON.parse(localStorage.getItem("vegetableCart")) || [];
}


// Save cart
function saveCart(cart) {
    localStorage.setItem("vegetableCart", JSON.stringify(cart));
}


// Add product to cart
function addToCart(id, name, price) {

    let cart = getCart();

    // Check whether product already exists
    let existingProduct = cart.find(item => item.id == id);

    if (existingProduct) {

        existingProduct.quantity += 1;

    } else {

        cart.push({
            id: id,
            name: name,
            price: Number(price),
            quantity: 1
        });

    }

    saveCart(cart);

    alert(name + " added to cart!");

    console.log("Cart:", cart);
}


// Remove product
function removeFromCart(id) {

    let cart = getCart();

    cart = cart.filter(item => item.id != id);

    saveCart(cart);

    location.reload();
}


// Change quantity
function changeQuantity(id, change) {

    let cart = getCart();

    let product = cart.find(item => item.id == id);

    if (product) {

        product.quantity += change;

        if (product.quantity <= 0) {
            cart = cart.filter(item => item.id != id);
        }

    }

    saveCart(cart);

    location.reload();
}


// Get cart count
function getCartCount() {

    let cart = getCart();

    return cart.reduce(
        (total, item) => total + item.quantity,
        0
    );
}


// Show cart count
function updateCartCount() {

    let countElement = document.getElementById("cartCount");

    if (countElement) {
        countElement.textContent = getCartCount();
    }
}


// Run when page loads
document.addEventListener("DOMContentLoaded", function () {

    updateCartCount();

});