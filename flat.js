document.addEventListener("DOMContentLoaded", function () {
    
    const products = [
        {
            name: "1BHK",
            price: 4803,
            image: "ibhk.webp",
            width : 20,
        },
        {
            name: "2BHK",
            price: 5280,
            image: "iibhk.jpg",
            width : 20,
        },
        {
            name: "3BHK",
            price: 5486,
            image: "iiibhk.jpg",
            width : 20,
        },
        
    ];

    const productsContainer = document.getElementById("products");

    // Render product cards
    products.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("product-card");

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>$${product.price.toFixed(2)}</p>
            <a href="#" class="button">Add to Cart</a>
        `;

        productsContainer.appendChild(card);
    });
    function addToCart() {
        alert("Flat added to cart!");
    }
});
