// LaptopZone - Main Application Logic

document.addEventListener('DOMContentLoaded', function() {
    initializeHomePage();
    initializeProductsPage();
    initializeProductPage();
    initializeSearch();
    initializeCategoryFilters();
});

// =============== HOME PAGE ===============
function initializeHomePage() {
    // Only run on index.html
    if (window.location.pathname.includes('index.html') || window.location.pathname.endsWith('/')) {
        const featuredContainer = document.getElementById('featured-products');
        if (featuredContainer) {
            // Get random featured products
            const featured = products.sort(() => Math.random() - 0.5).slice(0, 8);
            featuredContainer.innerHTML = featured.map(product => createProductCard(product)).join('');
        }

        // Category click handlers
        const categoryCards = document.querySelectorAll('.category-card');
        categoryCards.forEach(card => {
            card.addEventListener('click', function() {
                const category = this.dataset.category;
                window.location.href = `products.html?category=${category}`;
            });
        });
    }
}

// =============== PRODUCTS PAGE ===============
function initializeProductsPage() {
    // Only run on products.html
    if (window.location.pathname.includes('products.html')) {
        renderProducts();
        setupFilterListeners();
    }
}

function renderProducts() {
    const container = document.getElementById('products-grid');
    if (!container) return;

    // 1. Paimame visus produktus pradiniame taške
    let filtered = [...products];

    // 2. Sinchronizuojame filtrus su URL parametrais (tik pirmą kartą užkrovus)
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    
    const categoryFilter = document.getElementById('category-filter');
    
    // Jei URL yra kategorija ir mes ką tik atėjome į puslapį
    if (categoryParam && categoryFilter && !categoryFilter.dataset.initialized) {
        categoryFilter.value = categoryParam;
        categoryFilter.dataset.initialized = "true"; // Pažymime, kad URL jau pritaikytas
    }

    // 3. Gauname dabartines filtrų reikšmes iš HTML elementų
    const currentCategory = categoryFilter ? categoryFilter.value : '';
    const brandFilter = document.getElementById('brand-filter');
    const currentBrand = brandFilter ? brandFilter.value : '';
    const searchFilter = document.getElementById('search-filter');
    const currentSearch = searchFilter ? searchFilter.value.toLowerCase() : '';
    const sortFilter = document.getElementById('sort-filter');
    const currentSort = sortFilter ? sortFilter.value : 'name';

    // 4. VYKDOME FILTRAVIMĄ
    filtered = filtered.filter(p => {
        // Kategorijos filtravimas: jei tuščia arba 'all' - rodyti viską
        const matchCategory = !currentCategory || currentCategory === 'all' || p.category === currentCategory;
        // Gamintojo filtravimas
        const matchBrand = !currentBrand || p.brand === currentBrand;
        // Paieškos filtravimas
        const matchSearch = p.name.toLowerCase().includes(currentSearch) || 
                            p.specs.toLowerCase().includes(currentSearch);
        
        return matchCategory && matchBrand && matchSearch;
    });

    // 5. RŪŠIAVIMAS (naudojame jūsų jau turimą sortProducts)
    filtered = sortProducts(filtered, currentSort);

    // 6. ATVAIZDAVIMAS
    if (filtered.length === 0) {
        container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 3rem;">
            <p style="font-size: 2rem; margin-bottom: 1rem;">😞</p>
            <p style="font-size: 1.1rem; color: var(--primary-color);">Nėra produktų atitinkančių kriterijus</p>
            <p style="color: var(--text-light); margin-bottom: 1.5rem;">Bandykite pakeisti filtrus arba paieškos žodį</p>
            <button onclick="resetFilters()" class="btn btn-secondary">Rodyti visus produktus</button>
        </div>`;
    } else {
        container.innerHTML = filtered.map(product => createProductCard(product)).join('');
    }
}

// Pagalbinė funkcija visiems filtrams nunulinti
function resetFilters() {
    if (document.getElementById('category-filter')) document.getElementById('category-filter').value = 'all';
    if (document.getElementById('brand-filter')) document.getElementById('brand-filter').value = '';
    if (document.getElementById('search-filter')) document.getElementById('search-filter').value = '';
    if (document.getElementById('sort-filter')) document.getElementById('sort-filter').value = 'name';
    renderProducts();
}

function setupFilterListeners() {
    const categoryFilter = document.getElementById('category-filter');
    const brandFilter = document.getElementById('brand-filter');
    const sortFilter = document.getElementById('sort-filter');
    const searchFilter = document.getElementById('search-filter');

    if (categoryFilter) categoryFilter.addEventListener('change', renderProducts);
    if (brandFilter) brandFilter.addEventListener('change', renderProducts);
    if (sortFilter) sortFilter.addEventListener('change', renderProducts);
    if (searchFilter) searchFilter.addEventListener('input', renderProducts);
}

function applyFilters(items) {
    const categoryValue = document.getElementById('category-filter')?.value || '';
    const brandValue = document.getElementById('brand-filter')?.value || '';
    const searchValue = document.getElementById('search-filter')?.value || '';
    const sortValue = document.getElementById('sort-filter')?.value || 'name';

    let filtered = [...items];

    // Category filter
    if (categoryValue) {
        filtered = filtered.filter(p => p.category === categoryValue);
    }

    // Brand filter
    if (brandValue) {
        filtered = filtered.filter(p => p.brand === brandValue);
    }

    // Search filter
    if (searchValue) {
        const searchLower = searchValue.toLowerCase();
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(searchLower) ||
            p.brand.toLowerCase().includes(searchLower) ||
            p.specs.toLowerCase().includes(searchLower)
        );
    }

    // Sort
    filtered = sortProducts(filtered, sortValue);

    return filtered;
}

// =============== SINGLE PRODUCT PAGE ===============
function initializeProductPage() {
    // Only run on product.html
    if (window.location.pathname.includes('product.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');

        if (productId) {
            const product = getProductById(productId);
            if (product) {
                renderProductDetails(product);
            } else {
                document.getElementById('product-details').innerHTML = '<p>Produktas nerastas</p>';
            }
        }
    }
}

function renderProductDetails(product) {
    const container = document.getElementById('product-details');
    if (!container) return;

    container.innerHTML = `
        <div class="product-details-content">
            <div class="product-image-large">${product.image}</div>
            <div class="product-info-large">
                <h1>${product.name}</h1>
                <p style="color: #0f172a; font-weight: 600;">${product.brand}</p>
                <p style="margin: 1rem 0; color: #64748b;">${product.description}</p>
                
                <div class="product-specs-list">
                    <h3>Specifikacijos:</h3>
                    ${product.specs.split(',').map(spec => `
                        <div class="spec-item">
                            <div class="spec-label">${spec.trim().split(/:\s*/)[0]}</div>
                            <div class="spec-value">${spec.trim().split(/:\s*/).slice(1).join(':')}</div>
                        </div>
                    `).join('')}
                </div>

                <div style="margin: 2rem 0;">
                    <p style="font-size: 0.9rem; color: #64748b; margin-bottom: 1rem;">
                        ✓ 2 metų garantija<br>
                        ✓ Nemokamas pristatymas (€ 5.99, jei suma > € 1500)<br>
                        ✓ Grąžinimas per 14 dienų<br>
                        ✓ Didelės kainos pažadas
                    </p>
                </div>

                <div style="border-top: 1px solid #e2e8f0; padding-top: 2rem;">
                    <p style="font-size: 2.5rem; color: #000000; font-weight: 700; margin-bottom: 1.5rem;">
                        ${formatPrice(product.price)}
                    </p>
                    <button onclick="addToCart(${product.id})" class="btn btn-success" style="width: 100%; padding: 1rem; font-size: 1.1rem;">
                        Pridėti į krepšelį
                    </button>
                    <a href="products.html" class="btn btn-secondary" style="width: 100%; padding: 1rem; margin-top: 1rem; text-align: center;">
                        Grįžti į produktus
                    </a>
                </div>
            </div>
        </div>
    `;
}

// =============== SEARCH FUNCTIONALITY ===============
function initializeSearch() {
    const searchBox = document.getElementById('main-search');
    const searchResults = document.getElementById('search-results');

    if (searchBox) {
        searchBox.addEventListener('input', function(e) {
            const query = e.target.value.trim();

            if (query.length === 0) {
                searchResults.style.display = 'none';
                return;
            }

            const results = searchProducts(query);

            if (results.length === 0) {
                searchResults.innerHTML = '<p style="padding: 1rem; text-align: center;">Nėra rezultatų</p>';
            } else {
                searchResults.innerHTML = results.slice(0, 8).map(product => `
                    <div class="search-result-item">
                        <a href="product.html?id=${product.id}">
                            <strong>${product.name}</strong> - ${formatPrice(product.price)}
                        </a>
                    </div>
                `).join('');
            }

            searchResults.style.display = 'block';
        });

        // Hide search results on click outside
        document.addEventListener('click', function(e) {
            if (e.target !== searchBox) {
                searchResults.style.display = 'none';
            }
        });
    }
}

// =============== CATEGORY FILTERS ===============
function initializeCategoryFilters() {
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.dataset.category;
            if (window.location.pathname.includes('products.html')) {
                window.location.href = `products.html?category=${category}`;
            }
        });
    });
}

// =============== UTILITY FUNCTIONS ===============

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Update UI on page visibility change
document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
        updateCartCount();
        updateAuthUI();
    }
});