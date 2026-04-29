// LaptopZone - Cart Management

// Cart operations
function getCart() {
    const cart = localStorage.getItem('laptopzone_cart');
    return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
    localStorage.setItem('laptopzone_cart', JSON.stringify(cart));
    updateCartUI();
    updateCartCount();
}

function addToCart(productId) {
    const product = getProductById(productId);
    if (!product) return;

    const cart = getCart();
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    saveCart(cart);
    showNotification(`${product.name} pridėta į krepšelį!`);
}

function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
}

function updateCartItem(productId, quantity) {
    const cart = getCart();
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = quantity;
            saveCart(cart);
        }
    }
}

function clearCart() {
    localStorage.removeItem('laptopzone_cart');
    updateCartUI();
    updateCartCount();
}

function getCartTotal() {
    const cart = getCart();
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function getCartItemsCount() {
    const cart = getCart();
    return cart.reduce((count, item) => count + item.quantity, 0);
}

// UI Updates
function updateCartCount() {
    const count = getCartItemsCount();
    const countElements = document.querySelectorAll('.cart-count');
    countElements.forEach(el => {
        el.textContent = count;
    });
}

function updateCartUI() {
    const cart = getCart();
    const cartEmpty = document.getElementById('cart-empty');
    const cartContent = document.getElementById('cart-content');
    
    if (!cartEmpty || !cartContent) return;

    if (cart.length === 0) {
        cartEmpty.style.display = 'block';
        cartContent.style.display = 'none';
    } else {
        cartEmpty.style.display = 'none';
        cartContent.style.display = 'grid';
        renderCartItems();
        updateCartSummary();
    }
}

function renderCartItems() {
    const cart = getCart();
    const cartList = document.getElementById('cart-items-list');
    if (!cartList) return;

    cartList.innerHTML = cart.map(item => `
        <tr>
            <td style="text-align: left;">
                <strong class="cart-item-name">${item.name}</strong>
            </td>
            <td>${formatPrice(item.price)}</td>
            <td>
                <div class="quantity-control" style="display: flex; align-items: center; justify-content: center; gap: 5px;">
                    <button class="qty-btn" onclick="updateCartItem(${item.id}, ${item.quantity - 1})">−</button>
                    <input type="number" class="quantity-input" value="${item.quantity}" readonly 
                           style="width: 40px; text-align: center; border: 1px solid #000;">
                    <button class="qty-btn" onclick="updateCartItem(${item.id}, ${item.quantity + 1})">+</button>
                </div>
            </td>
            <td class="cart-total-cell" style="font-weight: bold;">
                ${formatPrice(item.price * item.quantity)}
            </td>
            <td>
                <button class="remove-btn" onclick="removeFromCart(${item.id})">ŠALINTI</button>
            </td>
        </tr>
    `).join('');
}

function updateCartSummary() {
    const cart = getCart();
    const subtotal = getCartTotal();
    const shipping = subtotal > 0 && subtotal < 1500 ? 5.99 : 0;
    const total = subtotal + shipping;

    const subtotalEl = document.getElementById('subtotal');
    const shippingEl = document.getElementById('shipping');
    const totalEl = document.getElementById('total');

    if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
    if (shippingEl) shippingEl.textContent = formatPrice(shipping);
    if (totalEl) totalEl.textContent = formatPrice(total);
}

// Notifications
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #10b981;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 6px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Checkout
function handleCheckout() {
    const cart = getCart();
    if (cart.length === 0) {
        alert('Krepšelis tuščias!');
        return;
    }

    // Show checkout modal
    document.getElementById('checkout-modal').style.display = 'flex';
}

function closeCheckoutModal() {
    document.getElementById('checkout-modal').style.display = 'none';
}

function switchCheckoutTab(tab) {
    // Hide all tabs
    document.querySelectorAll('.checkout-tab-content').forEach(el => {
        el.style.display = 'none';
    });
    document.querySelectorAll('.tab-btn').forEach(el => {
        el.classList.remove('active');
    });

    // Show selected tab
    document.getElementById(tab + '-checkout').style.display = 'block';
    event.target.classList.add('active');
}

function completeGuestCheckout() {
    const name = document.getElementById('guest-name').value;
    const email = document.getElementById('guest-email').value;
    const phone = document.getElementById('guest-phone').value;
    const address = document.getElementById('guest-address').value;
    const cart = getCart();
    const total = getCartTotal();
    const shipping = total < 1500 ? 5.99 : 0;

    // Save guest order
    const orders = JSON.parse(localStorage.getItem('laptopzone_orders') || '[]');
    orders.push({
        orderId: 'ORD-' + Date.now(),
        userId: email,
        userName: name,
        userPhone: phone,
        userAddress: address,
        items: cart,
        total: total + shipping,
        date: new Date().toLocaleString('lt-LT'),
        status: 'Patvirtintas',
        isGuest: true
    });
    localStorage.setItem('laptopzone_orders', JSON.stringify(orders));

    clearCart();
    closeCheckoutModal();
    
    alert(`✅ Sveiki, ${name}! \n\nJūsų užsakymas (${orders[orders.length - 1].orderId}) sėkmingai pateiktas.\n\nPatvirtinimas ir sekimo informacija buvo nusiųsti į ${email}`);
    
    window.location.href = 'products.html';
}

function completeLoginCheckout() {
    const email = document.getElementById('checkout-login-email').value;
    const password = document.getElementById('checkout-login-password').value;
    const result = loginUser(email, password);

    if (result.success) {
        const user = getCurrentUser();
        const cart = getCart();
        const total = getCartTotal();
        const shipping = total < 1500 ? 5.99 : 0;

        // Save order for logged-in user
        const orders = JSON.parse(localStorage.getItem('laptopzone_orders') || '[]');
        orders.push({
            orderId: 'ORD-' + Date.now(),
            userId: user.email,
            userName: user.name,
            items: cart,
            total: total + shipping,
            date: new Date().toLocaleString('lt-LT'),
            status: 'Patvirtintas',
            isGuest: false
        });
        localStorage.setItem('laptopzone_orders', JSON.stringify(orders));

        clearCart();
        closeCheckoutModal();
        
        alert(`✅ Sveiki, ${user.name}! \n\nJūsų užsakymas sėkmingai pateiktas.`);
        window.location.href = 'products.html';
    } else {
        alert(result.message);
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    updateCartUI();

    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', handleCheckout);
    }

    // Guest checkout form
    const guestCheckoutForm = document.getElementById('guest-checkout-form');
    if (guestCheckoutForm) {
        guestCheckoutForm.addEventListener('submit', function(e) {
            e.preventDefault();
            completeGuestCheckout();
        });
    }

    // Login checkout form
    const loginCheckoutForm = document.getElementById('login-checkout-form');
    if (loginCheckoutForm) {
        loginCheckoutForm.addEventListener('submit', function(e) {
            e.preventDefault();
            completeLoginCheckout();
        });
    }

    // Close modal on outside click
    window.addEventListener('click', function(e) {
        const modal = document.getElementById('checkout-modal');
        if (e.target === modal) {
            closeCheckoutModal();
        }
    });
});