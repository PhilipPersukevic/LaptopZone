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
        description: "Puikus nešiojamasis kompiuteris vidutinio ir aukšto lygio žaidimams. Turi naujausią Intel procesorių bei RTX 4060 vaizdo plokštę."
    },
    {
        id: 2,
        name: "Lenovo Legion 5 Pro Gen 9",
        brand: "Lenovo",
        category: "gaming",
        price: 1549,
        image: "💻",
        specs: "AMD Ryzen 7 7745HX, RTX 4070, 16\" 165Hz, 16GB RAM, 512GB SSD",
        description: "Aukščiausios kokybės žaidimų kompiuteris su galingu AMD procesoriumi ir RTX 4070. Puikiai tinka entuziastams."
    },
    {
        id: 3,
        name: "Lenovo Legion Pro 7i",
        brand: "Lenovo",
        category: "gaming",
        price: 2549,
        image: "💻",
        specs: "Intel Core i9-13900HX, RTX 4080, 16\" 240Hz MiniLED, 32GB RAM, 1TB SSD",
        description: "Tikras žaidimų žvėris. Galutinis pasirinkimas užkietėjusiems žaidėjams ir profesionalams."
    },
    {
        id: 4,
        name: "ASUS TUF Gaming A15",
        brand: "ASUS",
        category: "gaming",
        price: 949,
        image: "💻",
        specs: "AMD Ryzen 7 7435HS, RTX 4060, 15.6\" 144Hz FHD, 8GB RAM, 512GB SSD",
        description: "Geriausios vertės žaidimų kompiuteris pradedantiesiems. Puikus našumas už prieinamą kainą."
    },
    {
        id: 5,
        name: "ASUS ROG Strix G16",
        brand: "ASUS",
        category: "gaming",
        price: 1699,
        image: "💻",
        specs: "Intel Core i7-13650HX, RTX 4070, 16\" 165Hz QHD, 16GB RAM, 512GB SSD",
        description: "Aukšto našumo žaidimų kompiuteris. Puikus galios ir mobilumo balansas."
    },
    {
        id: 6,
        name: "ASUS ROG Zephyrus G14",
        brand: "ASUS",
        category: "gaming",
        price: 1799,
        image: "💻",
        specs: "AMD Ryzen 9 7940HS, RTX 4060, 14\" 165Hz OLED, 16GB RAM, 512GB SSD",
        description: "Itin portabilus žaidimų įrenginys. Kompaktiškas, bet galingas žaidimams keliaujant."
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
        description: "Aukščiausios klasės verslo kompiuteris. Itin saugus, turintis karinio lygio sertifikatą."
    },
    {
        id: 8,
        name: "Lenovo ThinkPad T14s Gen 4",
        brand: "Lenovo",
        category: "work",
        price: 1249,
        image: "💻",
        specs: "AMD Ryzen Pro, TPM 2.0, 14\" FHD, 16GB RAM, 512GB SSD, 13h battery",
        description: "Patikimas verslo partneris. Puikiai tinka profesionalams ir didelėms korporacijoms."
    },
    {
        id: 9,
        name: "Lenovo ThinkBook 14 Gen 6",
        brand: "Lenovo",
        category: "work",
        price: 849,
        image: "💻",
        specs: "Intel Core i5, 14\" FHD IPS, 8GB RAM, 256GB SSD, 12h battery",
        description: "Puikus pasirinkimas smulkiam verslui ir startuoliams. Puikus kainos ir kokybės santykis."
    },
    {
        id: 10,
        name: "ASUS ExpertBook B9 OLED",
        brand: "ASUS",
        category: "work",
        price: 1899,
        image: "💻",
        specs: "Intel Core i7, 14\" OLED, IR Camera, 16GB RAM, 512GB SSD, 0.88kg",
        description: "Lengviausias verslo kompiuteris pasaulyje. Idealus nuolat judantiems profesionalams."
    },
    {
        id: 11,
        name: "ASUS ExpertBook B7 Flip",
        brand: "ASUS",
        category: "work",
        price: 1249,
        image: "💻",
        specs: "Intel Core i7, 14\" 2-in-1 OLED, Stylus, LTE, 16GB RAM, 512GB SSD",
        description: "Universalus „2-in-1“ kompiuteris. Puikiai tinka susitikimams ir prezentacijoms kelyje."
    },
    {
        id: 12,
        name: "ASUS ProArt Studiobook 16",
        brand: "ASUS",
        category: "work",
        price: 2399,
        image: "💻",
        specs: "Intel Core i9, 16\" OLED 3.2K Pantone, RTX 4050, 32GB RAM, 1TB SSD",
        description: "Kūrėjų svajonių mašina. Puikiai tinka dizaineriams, vaizdo įrašų montuotojams ir turinio kūrėjams."
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
        description: "Biudžetinis nešiojamasis kompiuteris kasdieniam naudojimui. Puikiai tinka studentams ir paprastoms užduotims."
    },
    {
        id: 14,
        name: "Lenovo IdeaPad 5 15 Gen 9",
        brand: "Lenovo",
        category: "student",
        price: 674,
        image: "💻",
        specs: "Intel Core i5, 15.6\" FHD IPS 300nit, 16GB RAM, 512GB SSD, 12h battery",
        description: "Geriausia vertė studentams. Puikus našumo ir kainos santykis."
    },
    {
        id: 15,
        name: "Lenovo Yoga 7 14 Gen 9",
        brand: "Lenovo",
        category: "student",
        price: 899,
        image: "💻",
        specs: "Intel Core i5, 14\" OLED 2.8K, 16GB RAM, 512GB SSD, 12h battery",
        description: "Stilingas ir portabilus „2-in-1“ kompiuteris. Puikiai tinka kūrybingiems studentams."
    },
    {
        id: 16,
        name: "ASUS VivoBook 15 M1502",
        brand: "ASUS",
        category: "student",
        price: 524,
        image: "💻",
        specs: "AMD Ryzen 5, 15.6\" FHD IPS 90Hz, 8GB RAM, 512GB SSD, 9h battery",
        description: "Elegantiškas ir prieinamas. Puikus ekranas pagal šią kainų kategoriją."
    },
    {
        id: 17,
        name: "ASUS VivoBook S 15 OLED",
        brand: "ASUS",
        category: "student",
        price: 774,
        image: "💻",
        specs: "Intel Core i5, 15.6\" OLED FHD, 16GB RAM, 512GB SSD, 10h battery",
        description: "Aukštesnės klasės studentų kompiuteris. Nuostabus OLED ekranas darbui ir pramogoms."
    },
    {
        id: 18,
        name: "ASUS ZenBook 14 UX3402",
        brand: "ASUS",
        category: "student",
        price: 999,
        image: "💻",
        specs: "Intel Core i7, 14\" OLED 2.8K, 16GB RAM, 512GB SSD, 12h battery, 1.39kg",
        description: "Premium klasės ultrabook'as. Lengvas ir galingas šiuolaikiniam studentui."
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
        description: "Revoliucinis sulankstomas kompiuteris. Ateitis jau čia."
    },
    {
        id: 20,
        name: "Lenovo Yoga 9i",
        brand: "Lenovo",
        category: "ultrabook",
        price: 1599,
        image: "💻",
        specs: "Intel Core i7, 14\" OLED 2.8K, 16GB RAM, 512GB SSD, Built-in stylus",
        description: "Premium klasės lankstomas kompiuteris. Puikiai tinka kūrėjams ir profesionalams."
    },
    {
        id: 21,
        name: "Lenovo Slim 5i AI",
        brand: "Lenovo",
        category: "ultrabook",
        price: 1299,
        image: "💻",
        specs: "Intel Core Ultra (NPU), 14\" OLED 2.8K, 16GB RAM, 512GB SSD",
        description: "Dirbtinio intelekto palaikomas kompiuteris. Patirkite skaičiavimo ateitį su NPU procesoriumi."
    },
    {
        id: 22,
        name: "ASUS ZenBook Pro 14",
        brand: "ASUS",
        category: "ultrabook",
        price: 2199,
        image: "💻",
        specs: "Intel Core i9, 14\" OLED 2.8K, RTX 4070, 32GB RAM, 1TB SSD",
        description: "Galingas ultrabook'as kūrėjams. Kompaktiškas, bet itin pajėgus."
    },
    {
        id: 23,
        name: "ASUS ProArt 16",
        brand: "ASUS",
        category: "ultrabook",
        price: 2899,
        image: "💻",
        specs: "Intel Core i9, 16\" OLED Pantone, RTX 4090, 32GB RAM, 2TB SSD",
        description: "Aukščiausia kūrybinė mašina. Profesionalaus lygio ekranas ir galia."
    },
    {
        id: 24,
        name: "ASUS VivoBook S 15 Snapdragon",
        brand: "ASUS",
        category: "ultrabook",
        price: 1199,
        image: "💻",
        specs: "Qualcomm Snapdragon X Elite, 15.6\" OLED, 16GB RAM, 512GB SSD, 20+h battery",
        description: "ARM architektūros meistriškumas. Neįtikėtinas baterijos veikimo laikas visos dienos produktyvumui."
    }
];

// Function to get product by ID
function getProductById(id) {
    return products.find(p => p.id === parseInt(id));
}

// Function to get products by category
function getProductsByCategory(category) {
    // Pridedame patikrinimą: jei category yra tuščia ARBA lygi 'all', grąžiname visus produktus
    if (!category || category === 'all') return products;
    
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
        <div class="product-card" onclick="window.location.href='product.html?id=${product.id}'" style="cursor: pointer;">
            <div class="product-image">${product.image}</div>
            <div class="product-info">
                <div class="product-brand">${product.brand}</div>
                <h3 class="product-name">${product.name}</h3>
                <span class="product-category">${getCategoryLabel(product.category)}</span>
                <p class="product-specs">${product.specs.substring(0, 60)}...</p>
                <div class="product-price">${formatPrice(product.price)}</div>
                <div class="product-actions">
                    <button onclick="event.stopPropagation(); addToCart(${product.id})" class="btn btn-primary">Į krepšelį</button>
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