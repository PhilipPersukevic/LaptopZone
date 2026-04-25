// LaptopZone - Products Database

const products = [
    // ==================== GAMING ====================
    {
        id: 1,
        name: "Lenovo Legion 5i Gen 9",
        brand: "Lenovo",
        category: "gaming",
        price: 1199,
        image: "💻",
        specs: "Intel Core i7-13650HX, RTX 4060, 15.6\" 165Hz, 16GB RAM, 512GB SSD",
        description: "Excellent gaming laptop for mid to high-level gaming. Features Intel's latest processor with RTX 4060 graphics."
    },
    {
        id: 2,
        name: "Lenovo Legion 5 Pro Gen 9",
        brand: "Lenovo",
        category: "gaming",
        price: 1549,
        image: "💻",
        specs: "AMD Ryzen 7 7745HX, RTX 4070, 16\" 165Hz, 16GB RAM, 512GB SSD",
        description: "Premium gaming laptop with powerful AMD processor and RTX 4070. Perfect for enthusiasts."
    },
    {
        id: 3,
        name: "Lenovo Legion Pro 7i",
        brand: "Lenovo",
        category: "gaming",
        price: 2549,
        image: "💻",
        specs: "Intel Core i9-13900HX, RTX 4080, 16\" 240Hz MiniLED, 32GB RAM, 1TB SSD",
        description: "Top-tier gaming beast. The ultimate gaming laptop for hardcore players and professionals."
    },
    {
        id: 4,
        name: "ASUS TUF Gaming A15",
        brand: "ASUS",
        category: "gaming",
        price: 949,
        image: "💻",
        specs: "AMD Ryzen 7 7435HS, RTX 4060, 15.6\" 144Hz FHD, 8GB RAM, 512GB SSD",
        description: "Best value gaming laptop for beginners. Great performance at a budget-friendly price."
    },
    {
        id: 5,
        name: "ASUS ROG Strix G16",
        brand: "ASUS",
        category: "gaming",
        price: 1699,
        image: "💻",
        specs: "Intel Core i7-13650HX, RTX 4070, 16\" 165Hz QHD, 16GB RAM, 512GB SSD",
        description: "High-performance gaming laptop. Excellent balance of power and portability."
    },
    {
        id: 6,
        name: "ASUS ROG Zephyrus G14",
        brand: "ASUS",
        category: "gaming",
        price: 1799,
        image: "💻",
        specs: "AMD Ryzen 9 7940HS, RTX 4060, 14\" 165Hz OLED, 16GB RAM, 512GB SSD",
        description: "Ultra-portable gaming machine. Compact yet powerful for gaming on the go."
    },

    // ==================== WORK / PROFESSIONAL ====================
    {
        id: 7,
        name: "Lenovo ThinkPad X1 Carbon Gen 11",
        brand: "Lenovo",
        category: "work",
        price: 1999,
        image: "💻",
        specs: "Intel Core i7, 16\" OLED, IR Camera, 16GB RAM, 512GB SSD, 15h battery",
        description: "Premium business laptop. Ultra-secure with military-grade certification."
    },
    {
        id: 8,
        name: "Lenovo ThinkPad T14s Gen 4",
        brand: "Lenovo",
        category: "work",
        price: 1249,
        image: "💻",
        specs: "AMD Ryzen Pro, TPM 2.0, 14\" FHD, 16GB RAM, 512GB SSD, 13h battery",
        description: "Reliable business partner. Perfect for professionals and corporations."
    },
    {
        id: 9,
        name: "Lenovo ThinkBook 14 Gen 6",
        brand: "Lenovo",
        category: "work",
        price: 849,
        image: "💻",
        specs: "Intel Core i5, 14\" FHD IPS, 8GB RAM, 256GB SSD, 12h battery",
        description: "Great for small business and startups. Excellent value for money."
    },
    {
        id: 10,
        name: "ASUS ExpertBook B9 OLED",
        brand: "ASUS",
        category: "work",
        price: 1899,
        image: "💻",
        specs: "Intel Core i7, 14\" OLED, IR Camera, 16GB RAM, 512GB SSD, 0.88kg",
        description: "Lightest business laptop in the world. Perfect for mobile professionals."
    },
    {
        id: 11,
        name: "ASUS ExpertBook B7 Flip",
        brand: "ASUS",
        category: "work",
        price: 1249,
        image: "💻",
        specs: "Intel Core i7, 14\" 2-in-1 OLED, Stylus, LTE, 16GB RAM, 512GB SSD",
        description: "Versatile 2-in-1 laptop. Great for meetings and presentations on the move."
    },
    {
        id: 12,
        name: "ASUS ProArt Studiobook 16",
        brand: "ASUS",
        category: "work",
        price: 2399,
        image: "💻",
        specs: "Intel Core i9, 16\" OLED 3.2K Pantone, RTX 4050, 32GB RAM, 1TB SSD",
        description: "Creator's dream machine. Perfect for designers, video editors, and content creators."
    },

    // ==================== STUDENT / EVERYDAY ====================
    {
        id: 13,
        name: "Lenovo IdeaPad 3 15 Gen 8",
        brand: "Lenovo",
        category: "student",
        price: 474,
        image: "💻",
        specs: "Intel Core i5, 15.6\" FHD IPS, 8GB RAM, 512GB SSD, 10h battery",
        description: "Budget-friendly laptop for everyday use. Great for students and general tasks."
    },
    {
        id: 14,
        name: "Lenovo IdeaPad 5 15 Gen 9",
        brand: "Lenovo",
        category: "student",
        price: 674,
        image: "💻",
        specs: "Intel Core i5, 15.6\" FHD IPS 300nit, 16GB RAM, 512GB SSD, 12h battery",
        description: "Best value for students. Great performance-to-price ratio."
    },
    {
        id: 15,
        name: "Lenovo Yoga 7 14 Gen 9",
        brand: "Lenovo",
        category: "student",
        price: 899,
        image: "💻",
        specs: "Intel Core i5, 14\" OLED 2.8K, 16GB RAM, 512GB SSD, 12h battery",
        description: "Stylish and portable 2-in-1 laptop. Perfect for creative students."
    },
    {
        id: 16,
        name: "ASUS VivoBook 15 M1502",
        brand: "ASUS",
        category: "student",
        price: 524,
        image: "💻",
        specs: "AMD Ryzen 5, 15.6\" FHD IPS 90Hz, 8GB RAM, 512GB SSD, 9h battery",
        description: "Sleek and affordable. Great display for its price range."
    },
    {
        id: 17,
        name: "ASUS VivoBook S 15 OLED",
        brand: "ASUS",
        category: "student",
        price: 774,
        image: "💻",
        specs: "Intel Core i5, 15.6\" OLED FHD, 16GB RAM, 512GB SSD, 10h battery",
        description: "Premium student laptop. Beautiful OLED display for work and entertainment."
    },
    {
        id: 18,
        name: "ASUS ZenBook 14 UX3402",
        brand: "ASUS",
        category: "student",
        price: 999,
        image: "💻",
        specs: "Intel Core i7, 14\" OLED 2.8K, 16GB RAM, 512GB SSD, 12h battery, 1.39kg",
        description: "Premium ultrabook. Lightweight and powerful for the modern student."
    },

    // ==================== PREMIUM / ULTRABOOK ====================
    {
        id: 19,
        name: "Lenovo ThinkPad X1 Fold",
        brand: "Lenovo",
        category: "ultrabook",
        price: 2799,
        image: "💻",
        specs: "Intel Core Ultra, 13.3\" OLED Foldable, 16GB RAM, 512GB SSD",
        description: "Revolutionary foldable laptop. The future is here."
    },
    {
        id: 20,
        name: "Lenovo Yoga 9i",
        brand: "Lenovo",
        category: "ultrabook",
        price: 1599,
        image: "💻",
        specs: "Intel Core i7, 14\" OLED 2.8K, 16GB RAM, 512GB SSD, Built-in stylus",
        description: "Premium 2-in-1 convertible. Perfect for creators and professionals."
    },
    {
        id: 21,
        name: "Lenovo Slim 5i AI",
        brand: "Lenovo",
        category: "ultrabook",
        price: 1299,
        image: "💻",
        specs: "Intel Core Ultra (NPU), 14\" OLED 2.8K, 16GB RAM, 512GB SSD",
        description: "AI-powered laptop. Experience the future of computing with NPU."
    },
    {
        id: 22,
        name: "ASUS ZenBook Pro 14",
        brand: "ASUS",
        category: "ultrabook",
        price: 2199,
        image: "💻",
        specs: "Intel Core i9, 14\" OLED 2.8K, RTX 4070, 32GB RAM, 1TB SSD",
        description: "Powerful ultrabook for creators. Compact yet mighty."
    },
    {
        id: 23,
        name: "ASUS ProArt 16",
        brand: "ASUS",
        category: "ultrabook",
        price: 2899,
        image: "💻",
        specs: "Intel Core i9, 16\" OLED Pantone, RTX 4090, 32GB RAM, 2TB SSD",
        description: "Ultimate creative machine. Professional-grade display and power."
    },
    {
        id: 24,
        name: "ASUS VivoBook S 15 Snapdragon",
        brand: "ASUS",
        category: "ultrabook",
        price: 1199,
        image: "💻",
        specs: "Qualcomm Snapdragon X Elite, 15.6\" OLED, 16GB RAM, 512GB SSD, 20+h battery",
        description: "ARM-powered excellence. Incredible battery life with all-day productivity."
    }
];

// Function to get product by ID
function getProductById(id) {
    return products.find(p => p.id === parseInt(id));
}

// Function to get products by category
function getProductsByCategory(category) {
    if (!category) return products;
    return products.filter(p => p.category === category);
}

// Function to get products by brand
function getProductsByBrand(brand) {
    if (!brand) return products;
    return products.filter(p => p.brand === brand);
}

// Function to search products
function searchProducts(query) {
    const lowerQuery = query.toLowerCase();
    return products.filter(p => 
        p.name.toLowerCase().includes(lowerQuery) ||
        p.brand.toLowerCase().includes(lowerQuery) ||
        p.specs.toLowerCase().includes(lowerQuery) ||
        p.description.toLowerCase().includes(lowerQuery)
    );
}

// Function to sort products
function sortProducts(items, sortBy) {
    const sorted = [...items];
    
    switch(sortBy) {
        case 'price-low':
            sorted.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sorted.sort((a, b) => b.price - a.price);
            break;
        case 'name':
        default:
            sorted.sort((a, b) => a.name.localeCompare(b.name));
            break;
    }
    
    return sorted;
}

// Function to format price
function formatPrice(price) {
    return '€ ' + price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Function to create product card HTML
function createProductCard(product) {
    return `
        <div class="product-card">
            <div class="product-image">${product.image}</div>
            <div class="product-info">
                <div class="product-brand">${product.brand}</div>
                <h3 class="product-name">${product.name}</h3>
                <span class="product-category">${getCategoryLabel(product.category)}</span>
                <p class="product-specs">${product.specs.substring(0, 60)}...</p>
                <div class="product-price">${formatPrice(product.price)}</div>
                <div class="product-actions">
                    <a href="product.html?id=${product.id}" class="btn btn-secondary">Detailės</a>
                    <button onclick="addToCart(${product.id})" class="btn btn-primary">Į krepšelį</button>
                </div>
            </div>
        </div>
    `;
}

// Function to get category label
function getCategoryLabel(category) {
    const labels = {
        gaming: '🎮 Gaming',
        work: '💼 Darbui',
        student: '🎓 Studentams',
        ultrabook: '✨ Premium'
    };
    return labels[category] || category;
}