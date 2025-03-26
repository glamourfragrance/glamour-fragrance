document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { name: "Dior Homme Intense", category: "Men", price: "$99", image: "assets/dior.jpg" },
        { name: "Lady Million", category: "Women", price: "$95", image: "assets/lady-million.jpg" },
        { name: "Ombre Leather", category: "Unisex", price: "$120", image: "assets/ombre.jpg" }
    ];

    let featuredHTML = "";
    products.forEach(product => {
        featuredHTML += `
            <div class="col-md-4">
                <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p>${product.category} Fragrance</p>
                        <p>${product.price}</p>
                        <a href="shop.html" class="btn btn-dark">View</a>
                    </div>
                </div>
            </div>`;
    });

    document.getElementById("featured-products").innerHTML = featuredHTML;
});
