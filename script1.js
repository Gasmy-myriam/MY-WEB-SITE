const products = [
    {
        name: "Produit 1",
        category: "Électronique",
        reference: "P001",
        description: "Ce produit est un appareil électronique innovant, conçu pour faciliter votre quotidien.",
        image: "https://assets.onecompiler.app/42rfs5nk9/42zgjkupq/OIP%20(2).jpeg"
    },
    {
        name: "Produit 2",
        category: "Mode",
        reference: "P002",
        description: "Un vêtement élégant et confortable, parfait pour toutes les occasions.",
        image: "https://th.bing.com/th/id/OIP.m-PFFdEpfLHLa5xhSfRkJQHaDt?rs=1&pid=ImgDetMain"
    },
    {
        name: "Produit 3",
        category: "Maison",
        reference: "P003",
        description: "Ce produit est un accessoire indispensable pour embellir votre maison.",
        image: "https://assets.onecompiler.app/42rfs5nk9/42zgjkupq/maison.jpg"
    },
    {
        name: "Produit 4",
        category: "Beauté",
        reference: "P004",
        description: "Un soin de beauté haute qualité pour prendre soin de votre peau.",
        image: "https://assets.onecompiler.app/42rfs5nk9/42zgjkupq/beaut%C3%A9.jpeg"
    },
    {
        name: "Produit 5",
        category: "Sport",
        reference: "P005",
        description: "Un équipement de sport de haute performance, idéal pour vos entraînements.",
        image: "https://assets.onecompiler.app/42rfs5nk9/42zgjkupq/sport.jpeg"
    },
    {
        name: "Produit 6",
        category: "Alimentation",
        reference: "P006",
        description: "Un aliment bio et naturel, parfait pour vos recettes saines.",
        image: "https://assets.onecompiler.app/42rfs5nk9/42zgjkupq/aliment.jpeg"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    displayProducts(products);
});


function searchProducts(event) {
    if (event) event.preventDefault(); 

    const searchName = document.getElementById("search-name").value.toLowerCase();
    const searchCategory = document.getElementById("search-category").value.toLowerCase();
    const searchReference = document.getElementById("search-reference").value.toLowerCase();

    const filteredProducts = products.filter(product => {
        const nameMatch = product.name.toLowerCase().includes(searchName);
        const categoryMatch = product.category.toLowerCase().includes(searchCategory);
        const referenceMatch = product.reference.toLowerCase().includes(searchReference);

        return nameMatch && categoryMatch && referenceMatch;
    });

    displayProducts(filteredProducts);
}


function displayProducts(products) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = '';

    if (products.length === 0) {
        productList.innerHTML = '<p>Aucun produit trouvé.</p>';
        return;
    }

    products.forEach(product => {
        const productItem = document.createElement("div");
        productItem.classList.add("product-item");

        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Catégorie: ${product.category}</p>
            <p>Référence: ${product.reference}</p>
            <p>Description: ${product.description}</p>
            <button onclick="window.location.href='page_de_confirmation.html'" >Ajouter au panier</button>
        `;

        productList.appendChild(productItem);
    });
}


function submitContactForm(event) {
    event.preventDefault();

    const name = document.getElementById("contact-name").value.trim();
    const email = document.getElementById("contact-email").value.trim();
    const message = document.getElementById("contact-message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Tous les champs sont obligatoires.");
    } else {
        alert("Votre message a été envoyé au service client.");
    }
}
