// Constants
const SHIPPING_FEE = 40;
const FREE_SHIPPING_THRESHOLD = 200;

const products = [
    { 
        id: 1,
        name: "Fit Milk", 
        image: "https://mulukanoordairy.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-13-at-4.41.12-PM.jpeg",
        description: "Low fat milk with essential nutrients. 1L pouch.",
        price: 40,
        originalPrice: 55,
        discount: "9% OFF",
        nutrition: { 
            servingSize: "100ml",
            calories: "50 kcal",
            fat: "1.5g (2%)",
            protein: "3.4g (7%)",
            carbs: "4.8g (2%)",
            calcium: "120mg (12%)"
        }
    },
    { 
        id: 2,
        name: "Gold Milk", 
        image: "https://mulukanoordairy.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-13-at-4.41.08-PM.jpeg",
        description: "Premium quality milk with rich taste. 1L pouch.",
        price: 40,
        originalPrice: 55,
        discount: "9% OFF",
        nutrition: {
            servingSize: "100ml",
            calories: "65 kcal",
            fat: "3.6g (5%)",
            protein: "3.2g (6%)",
            carbs: "4.7g (2%)",
            calcium: "120mg (12%)"
        }
    },
    { 
        id: 3,
        name: "Pride Milk", 
        image: "https://mulukanoordairy.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-13-at-4.41.20-PM.jpeg",
        description: "Standardized milk with balanced fat. 1L pouch.",
        price: 40,
        originalPrice: 60,
        discount: "8% OFF",
        nutrition: {
            servingSize: "100ml",
            calories: "60 kcal",
            fat: "3.0g (4%)",
            protein: "3.3g (7%)",
            carbs: "4.7g (2%)",
            calcium: "120mg (12%)"
        }
    },
    { 
        id: 4,
        name: "Rich Milk", 
        image: "https://mulukanoordairy.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-13-at-4.41.17-PM.jpeg",
        description: "High fat milk for creamy texture. 1L pouch.",
        price: 40,
        originalPrice: 65,
        discount: "8% OFF",
        nutrition: {
            servingSize: "100ml",
            calories: "75 kcal",
            fat: "4.8g (7%)",
            protein: "3.1g (6%)",
            carbs: "4.6g (2%)",
            calcium: "120mg (12%)"
        }
    },
    { 
        id: 5,
        name: "Slim Milk", 
        image: "https://mulukanoordairy.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-13-at-4.41.21-PM.jpeg",
        description: "Low calorie milk for weight management. 1L pouch.",
        price: 45,
        originalPrice: 50,
        discount: "10% OFF",
        nutrition: {
            servingSize: "100ml",
            calories: "35 kcal",
            fat: "0.5g (1%)",
            protein: "3.5g (7%)",
            carbs: "4.5g (2%)",
            calcium: "130mg (13%)"
        }
    },
    { 
        id: 6,
        name: "Smart Milk 500ml", 
        image: "https://mulukanoordairy.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-13-at-4.41.25-PM.jpeg",
        description: "Fortified milk with added nutrients. 500ml bottle.",
        price: 30,
        originalPrice: 35,
        discount: "14% OFF",
        nutrition: {
            servingSize: "100ml",
            calories: "60 kcal",
            fat: "2.5g (3%)",
            protein: "3.6g (7%)",
            carbs: "5.0g (2%)",
            calcium: "150mg (15%)",
            vitaminD: "1.5mcg (30%)"
        }
    },
    { 
        id: 7,
        name: "Smart Milk", 
        image: "https://mulukanoordairy.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-13-at-4.41.23-PM.jpeg",
        description: "Fortified milk with added nutrients. 1L pouch.",
        price: 45,
        originalPrice: 60,
        discount: "8% OFF",
        nutrition: {
            servingSize: "100ml",
            calories: "60 kcal",
            fat: "2.5g (3%)",
            protein: "3.6g (7%)",
            carbs: "5.0g (2%)",
            calcium: "150mg (15%)",
            vitaminD: "1.5mcg (30%)"
        }
    },
    { 
        id: 8,
        name: "Chai Milk", 
        image: "https://mulukanoordairy.com/wp-content/uploads/2024/08/Chai-milk.jpeg",
        description: "Milk specially processed for tea. 1L pouch.",
        price: 40,
        originalPrice: 45,
        discount: "11% OFF",
        nutrition: {
            servingSize: "100ml",
            calories: "55 kcal",
            fat: "2.0g (3%)",
            protein: "3.0g (6%)",
            carbs: "5.5g (2%)",
            calcium: "110mg (11%)"
        }
    },
    { 
        id: 9,
        name: "Regular Curd", 
        image: "https://mulukanoordairy.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-13-at-4.41.06-PM.jpeg",
        description: "Traditional homemade style curd. 200g cup.",
        price: 40,
        originalPrice: 45,
        discount: "11% OFF",
        nutrition: {
            servingSize: "100g",
            calories: "60 kcal",
            fat: "3.0g (4%)",
            protein: "3.5g (7%)",
            carbs: "4.0g (1%)",
            calcium: "110mg (11%)",
            probiotics: "Live cultures"
        }
    },
    { 
        id: 10,
        name: "Regular Curd 5kg", 
        image: "https://mulukanoordairy.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-13-at-4.41.01-PM-1.jpeg",
        description: "Traditional homemade style curd. 5kg.",
        price: 700,
        originalPrice: 780,
        discount: "11% OFF",
        nutrition: {
            servingSize: "100g",
            calories: "60 kcal",
            fat: "3.0g (4%)",
            protein: "3.5g (7%)",
            carbs: "4.0g (1%)",
            calcium: "110mg (11%)",
            probiotics: "Live cultures"
        }
    },
    { 
        id: 11,
        name: "S-Curd", 
        image: "https://mulukanoordairy.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-13-at-4.41.02-PM.jpeg",
        description: "Special thick and creamy curd. 200g cup.",
        price: 50,
        originalPrice: 55,
        discount: "9% OFF",
        nutrition: {
            servingSize: "100g",
            calories: "80 kcal",
            fat: "4.5g (6%)",
            protein: "4.0g (8%)",
            carbs: "4.5g (2%)",
            calcium: "120mg (12%)",
            probiotics: "Live cultures"
        }
    },
    { 
        id: 12,
        name: "E-Curd", 
        image: "https://mulukanoordairy.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-13-at-4.41.01-PM.jpeg",
        description: "Probiotic enriched curd. 200g cup.",
        price: 45,
        originalPrice: 50,
        discount: "10% OFF",
        nutrition: {
            servingSize: "100g",
            calories: "65 kcal",
            fat: "3.5g (5%)",
            protein: "4.5g (9%)",
            carbs: "4.0g (1%)",
            calcium: "130mg (13%)",
            probiotics: "Extra live cultures"
        }
    },
    { 
        id: 13,
        name: "Butter milk", 
        image: "https://mulukanoordairy.com/wp-content/uploads/2024/08/Buttermilk.jpeg",
        description: "Refreshing spiced buttermilk. 200ml bottle.",
        price: 25,
        originalPrice: 30,
        discount: "17% OFF",
        nutrition: {
            servingSize: "100ml",
            calories: "40 kcal",
            fat: "1.0g (1%)",
            protein: "2.0g (4%)",
            carbs: "5.0g (2%)",
            calcium: "100mg (10%)",
            probiotics: "Live cultures"
        }
    },
    { 
        id: 14,
        name: "Doodh Peda", 
        image: "https://mulukanoordairy.com/wp-content/uploads/2024/08/Doodh-peda.jpeg",
        description: "Traditional milk sweet. Pack of 6 pieces (approx 200g).",
        price: 140,
        originalPrice: 160,
        discount: "13% OFF",
        nutrition: {
            servingSize: "1 piece (33g)",
            calories: "120 kcal",
            fat: "6.0g (8%)",
            protein: "3.0g (6%)",
            carbs: "15.0g (5%)",
            calcium: "80mg (8%)"
        }
    },
    { 
        id: 15,
        name: "Badam Milk", 
        image: "https://mulukanoordairy.com/wp-content/uploads/2024/08/badm-milk.jpeg",
        description: "Traditional almond milkshake. 200ml bottle.",
        price: 35,
        originalPrice: 40,
        discount: "13% OFF",
        nutrition: {
            servingSize: "100ml",
            calories: "90 kcal",
            fat: "4.0g (5%)",
            protein: "3.5g (7%)",
            carbs: "10.0g (3%)",
            calcium: "150mg (15%)",
            almonds: "Contains real almond paste"
        }
    },
    { 
        id: 16,
        name: "Chocolate Milk", 
        image: "https://mulukanoordairy.com/wp-content/uploads/2024/08/Choklate-milk.jpeg",
        description: "Chocolate milkshake. 200ml bottle.",
        price: 35,
        originalPrice: 40,
        discount: "13% OFF",
        nutrition: {
            servingSize: "100ml",
            calories: "85 kcal",
            fat: "3.5g (4%)",
            protein: "3.0g (6%)",
            carbs: "11.0g (4%)",
            calcium: "120mg (12%)",
            cocoa: "Real cocoa powder"
        }
    },
    { 
        id: 17,
        name: "Milk Cake", 
        image: "https://mulukanoordairy.com/wp-content/uploads/2024/08/Milk-cake.jpeg",
        description: "Traditional milk cake. 200g pack.",
        price: 130,
        originalPrice: 150,
        discount: "14% OFF",
        nutrition: {
            servingSize: "50g",
            calories: "180 kcal",
            fat: "8.0g (10%)",
            protein: "5.0g (10%)",
            carbs: "22.0g (7%)",
            calcium: "100mg (10%)"
        }
    },
    { 
        id: 18,
        name: "Cow Ghee 15kg", 
        image: "https://mulukanoordairy.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-13-at-4.40.59-PM-1.jpeg",
        description: "Pure cow ghee. 15kg tin.",
        price: 12000,
        originalPrice: 15000,
        discount: "14% OFF",
        nutrition: {
            servingSize: "1 tsp (5g)",
            calories: "45 kcal",
            fat: "5.0g (6%)",
            protein: "0g",
            carbs: "0g",
            vitamins: "A, D, E, K",
            cholesterol: "15mg (5%)"
        }
    },
    { 
        id: 19,
        name: "Cow Ghee 100ml", 
        image: "https://mulukanoordairy.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-13-at-4.41.00-PM-1.jpeg",
        description: "Pure cow ghee. 100ml bottle.",
        price: 240,
        originalPrice: 260,
        discount: "14% OFF",
        nutrition: {
            servingSize: "1 tsp (5g)",
            calories: "45 kcal",
            fat: "5.0g (6%)",
            protein: "0g",
            carbs: "0g",
            vitamins: "A, D, E, K",
            cholesterol: "15mg (5%)"
        }
    },
    { 
        id: 20,
        name: "Basundi", 
        image: "https://mulukanoordairy.com/wp-content/uploads/2024/08/basundi.jpeg",
        description: "Traditional thickened sweet milk. 200g cup.",
        price: 30,
        originalPrice: 35,
        discount: "13% OFF",
        nutrition: {
            servingSize: "100g",
            calories: "150 kcal",
            fat: "7.0g (9%)",
            protein: "5.0g (10%)",
            carbs: "18.0g (6%)",
            calcium: "200mg (20%)"
        }
    },
    { 
        id: 21,
        name: "Buffalo Ghee 500ml", 
        image: "https://mulukanoordairy.com/wp-content/uploads/2024/08/ghee-500ml.jpeg",
        description: "Pure buffalo ghee. 500ml bottle.",
        price: 210,
        originalPrice: 245,
        discount: "13% OFF",
        nutrition: {
            servingSize: "1 tsp (5g)",
            calories: "45 kcal",
            fat: "5.0g (6%)",
            protein: "0g",
            carbs: "0g",
            vitamins: "A, D, E, K",
            cholesterol: "15mg (5%)"
        }
    },
    { 
        id: 22,
        name: "Buffalo Ghee 15kg", 
        image: "https://mulukanoordairy.com/wp-content/uploads/2024/08/ghee.jpeg",
        description: "Pure buffalo ghee. 15kg tin.",
        price: 13100,
        originalPrice: 13200,
        discount: "13% OFF",
        nutrition: {
            servingSize: "1 tsp (5g)",
            calories: "45 kcal",
            fat: "5.0g (6%)",
            protein: "0g",
            carbs: "0g",
            vitamins: "A, D, E, K",
            cholesterol: "15mg (5%)"
        }
    }
];

// Global variables
let cart = [];
let currentProduct = null;
let currentQuantity = 1;

// Initialize the app when DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    // Clear any existing cart data that might be corrupted
    localStorage.removeItem('cart');
    cart = [];
    
    // Initialize fresh cart
    initializeCart();
    
    // Splash screen timeout
    setTimeout(() => {
        document.getElementById("splash-screen").style.display = "none";
        document.getElementById("app").style.display = "block";
        renderProducts(products);
        updateCart();
    }, 2000);

    // Setup event listeners
    setupEventListeners();
    try {
        const savedAddress = localStorage.getItem('deliveryAddress');
        if (savedAddress) {
            const address = JSON.parse(savedAddress);
            document.getElementById('delivery-name').value = address.name || '';
            document.getElementById('delivery-phone').value = address.phone || '';
            document.getElementById('delivery-pincode').value = address.pincode || '';
            document.getElementById('delivery-address').value = address.address || '';
            document.getElementById('delivery-landmark').value = address.landmark || '';
            document.getElementById('delivery-city').value = address.city || '';
            document.getElementById('delivery-state').value = address.state || '';
            
            // Set address type radio button
            if (address.type) {
                const radio = document.querySelector(`input[name="address-type"][value="${address.type}"]`);
                if (radio) radio.checked = true;
            }
        }
    } catch (e) {
        console.error("Error loading address:", e);
    }
});

// Initialize cart with proper validation
function initializeCart() {
    try {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            const parsedCart = JSON.parse(savedCart);
            if (Array.isArray(parsedCart)) {
                cart = parsedCart.filter(item => 
                    item && 
                    typeof item.id === 'number' &&
                    typeof item.name === 'string' &&
                    typeof item.price === 'number' &&
                    typeof item.quantity === 'number' && 
                    item.quantity > 0
                );
            }
        }
    } catch (e) {
        console.error("Error loading cart:", e);
        cart = [];
    }
    
    // Ensure we always have a clean cart array
    if (!Array.isArray(cart)) {
        cart = [];
    }
    
    // Save the cleaned cart back to storage
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Setup all event listeners
function setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('search');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }

    // Camera button
    const cameraBtn = document.getElementById('camera-btn');
    if (cameraBtn) {
        cameraBtn.addEventListener('click', handleCameraClick);
    }

    // Product click handlers (delegated)
    const productsContainer = document.getElementById('products-container');
    if (productsContainer) {
        productsContainer.addEventListener('click', (event) => {
            // Handle "Add to Cart" button clicks
            if (event.target.classList.contains('add-to-cart')) {
                event.stopPropagation();
                const productElement = event.target.closest('.product');
                if (productElement) {
                    const productId = parseInt(productElement.dataset.id);
                    const selectedProduct = products.find(p => p.id === productId);
                    if (selectedProduct) {
                        currentProduct = selectedProduct;
                        addToCart();
                    }
                }
                return;
            }
            
            // Handle product card clicks (for showing details)
            const productElement = event.target.closest('.product');
            if (productElement) {
                const productId = parseInt(productElement.dataset.id);
                const selectedProduct = products.find(p => p.id === productId);
                if (selectedProduct) {
                    showProductDetails(selectedProduct);
                }
            }
        });
    }
}

// Render products to the page
function renderProducts(productsToRender) {
    const productsContainer = document.getElementById('products-container');
    if (!productsContainer) return;
    
    productsContainer.innerHTML = '';
    
    if (productsToRender.length === 0) {
        const noResults = document.getElementById('no-results');
        if (noResults) noResults.style.display = 'block';
        return;
    } else {
        const noResults = document.getElementById('no-results');
        if (noResults) noResults.style.display = 'none';
    }
    
    productsToRender.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.dataset.id = product.id;
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/150?text=Product+Image'">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <button class="add-to-cart">Add to Cart</button>
        `;
        productsContainer.appendChild(productElement);
    });
}

// Search handler
function handleSearch() {
    const searchTerm = this.value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm)
    );
    renderProducts(filteredProducts);
}

// Camera button handler (placeholder)
function handleCameraClick() {
    showToast('Camera search functionality would be implemented here');
}

// Show product details in modal
function showProductDetails(product) {
    currentProduct = product;
    currentQuantity = 1;
    
    const modal = document.getElementById('product-modal');
    if (!modal) return;
    
    // Set product details
    document.getElementById('product-modal-title').textContent = product.name;
    document.getElementById('product-modal-name').textContent = product.name;
    document.getElementById('product-modal-image').src = product.image;
    document.getElementById('product-modal-image').onerror = function() {
        this.src = 'https://via.placeholder.com/150?text=Product+Image';
    };
    document.getElementById('product-modal-description').textContent = product.description;
    document.getElementById('product-modal-price').textContent = '₹' + product.price;
    document.getElementById('product-modal-original-price').textContent = '₹' + product.originalPrice;
    document.getElementById('product-modal-discount').textContent = product.discount;
    document.getElementById('product-quantity').textContent = currentQuantity;
    
    // Create nutrition table
    const nutritionTable = document.createElement('table');
    nutritionTable.className = 'nutrition-table';
    
    // Add serving size
    const servingRow = document.createElement('tr');
    servingRow.innerHTML = `
        <td colspan="2" class="nutrition-serving">Serving Size: ${product.nutrition.servingSize}</td>
    `;
    nutritionTable.appendChild(servingRow);
    
    // Add nutrition facts
    for (const [key, value] of Object.entries(product.nutrition)) {
        if (key !== 'servingSize') {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="nutrition-key">${key.charAt(0).toUpperCase() + key.slice(1)}</td>
                <td class="nutrition-value">${value}</td>
            `;
            nutritionTable.appendChild(row);
        }
    }
    
    // Add to modal body
    const nutritionContainer = document.createElement('div');
    nutritionContainer.className = 'nutrition-container';
    nutritionContainer.innerHTML = '<h4>Nutrition Facts</h4>';
    nutritionContainer.appendChild(nutritionTable);
    
    // Clear previous nutrition info if any
    const oldNutrition = document.querySelector('.nutrition-container');
    if (oldNutrition) oldNutrition.remove();
    
    document.querySelector('.product-details-container').appendChild(nutritionContainer);
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('product-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Change quantity in product modal
function changeQuantity(change) {
    currentQuantity += change;
    if (currentQuantity < 1) currentQuantity = 1;
    document.getElementById('product-quantity').textContent = currentQuantity;
}

// Add to cart from product modal
window.addToCart = function() {
    if (!currentProduct) return;
    
    // Check if item already exists in cart
    const existingItem = cart.find(item => item.id === currentProduct.id);
    
    if (existingItem) {
        existingItem.quantity += currentQuantity;
    } else {
        cart.push({ 
            ...currentProduct,
            quantity: currentQuantity
        });
    }
    
    // Save to localStorage
    try {
        localStorage.setItem('cart', JSON.stringify(cart));
    } catch (e) {
        console.error("Error saving cart:", e);
        showToast('Error saving to cart');
        return;
    }
    
    updateCart();
    showToast(`${currentQuantity} ${currentProduct.name} added to cart!`);
    closeModal();
}

// Update cart display
function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const priceDetailsContainer = document.querySelector('.price-details');
    const continueBtn = document.querySelector('.continue-btn');
    const cartStepper = document.querySelector('.cart-stepper');
    if (!cartItemsContainer || !priceDetailsContainer || !continueBtn) return;
    
    // Clear previous content
    cartItemsContainer.innerHTML = '';
    
    // Validate cart items
    cart = cart.filter(item => 
        item && 
        typeof item.id === 'number' &&
        typeof item.name === 'string' &&
        typeof item.price === 'number' &&
        typeof item.quantity === 'number' && 
        item.quantity > 0
    );
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
        priceDetailsContainer.style.display = 'none';
        continueBtn.style.display = 'none';
        cartStepper.style.display = 'none';
    } else {
        // Show cart items
        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">
                        <span class="current-price">₹${item.price.toFixed(2)}</span>
                        <span class="original-price">₹${item.originalPrice.toFixed(2)}</span>
                    </div>
                    <div class="cart-item-quantity">
                        <button onclick="changeCartQuantity(${index}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="changeCartQuantity(${index}, 1)">+</button>
                    </div>
                </div>
                <div class="cart-item-remove" onclick="removeFromCart(${index})">Remove</div>
            `;
            cartItemsContainer.appendChild(cartItem);
        });
        
        // Show price details
        cartStepper.style.display = 'flex';
        priceDetailsContainer.style.display = 'block';
        continueBtn.style.display = 'block';
        updatePriceDetails();
    }
    
    // Update cart badges
    updateCartBadges();
}

// Change quantity in cart
window.changeCartQuantity = function(index, change) {
    if (index >= 0 && index < cart.length) {
        cart[index].quantity += change;
        
        if (cart[index].quantity < 1) {
            cart.splice(index, 1);
        }
        
        // Save to localStorage
        try {
            localStorage.setItem('cart', JSON.stringify(cart));
        } catch (e) {
            console.error("Error saving cart:", e);
        }
        
        updateCart();
    }
}

// Remove item from cart
window.removeFromCart = function(index) {
    if (index >= 0 && index < cart.length) {
        cart.splice(index, 1);
        
        // Save to localStorage
        try {
            localStorage.setItem('cart', JSON.stringify(cart));
        } catch (e) {
            console.error("Error saving cart:", e);
        }
        
        updateCart();
        showToast('Item removed from cart');
    }
}

// Update price details in cart
function updatePriceDetails() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalOriginalPrice = cart.reduce((sum, item) => sum + ((item.originalPrice || item.price) * item.quantity), 0);
    const totalDiscount = totalOriginalPrice - subtotal;
    const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;
    const total = subtotal + shipping;

    const priceDetailsTitle = document.querySelector('.price-details-title');
    const priceRows = document.querySelectorAll('.price-row');
    const orderTotal = document.querySelector('.order-total span');
    
    if (priceDetailsTitle && priceRows.length >= 3 && orderTotal) {
        priceDetailsTitle.textContent = `Price Details (${totalItems} ${totalItems === 1 ? 'Item' : 'Items'})`;
        
        priceRows[0].querySelector('span:last-child').textContent = `₹${subtotal.toFixed(2)}`;
        priceRows[1].querySelector('span:last-child').textContent = `-₹${totalDiscount.toFixed(2)}`;
        
        // Shipping row
        priceRows[2].querySelector('span:last-child').textContent = 
            shipping === 0 ? 'FREE' : `₹${shipping.toFixed(2)}`;
        
        // Order total
        orderTotal.innerHTML = `<span>Order Total--</span><span>₹${total.toFixed(2)}</span>`;
    }
}

// Update cart badges
function updateCartBadges() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelectorAll('.cart-badge').forEach(badge => {
        badge.textContent = totalItems;
        badge.style.display = totalItems > 0 ? 'inline-block' : 'none';
    });
}


window.saveAddress = function() {
    const name = document.getElementById('delivery-name');
    const phone = document.getElementById('delivery-phone');
    const pincode = document.getElementById('delivery-pincode');
    const address = document.getElementById('delivery-address');
    const city = document.getElementById('delivery-city');
    const state = document.getElementById('delivery-state');
    const addressType = document.querySelector('input[name="address-type"]:checked').value;
    
    // Basic validation
    if (!name.value || !phone.value || !pincode.value || !address.value || !city.value || !state.value) {
        showToast('Please fill all required fields');
        return;
    }
    
    if (!/^\d{10}$/.test(phone.value)) {
        showToast('Please enter a valid 10-digit mobile number');
        return;
    }
    
    if (!/^\d{6}$/.test(pincode.value)) {
        showToast('Please enter a valid 6-digit pincode');
        return;
    }
    
    // Save address to localStorage
    const deliveryAddress = {
        name: name.value.trim(),
        phone: phone.value.trim(),
        pincode: pincode.value.trim(),
        address: address.value.trim(),
        landmark: document.getElementById('delivery-landmark').value.trim(),
        city: city.value.trim(),
        state: state.value.trim(),
        type: addressType
    };
    
    try {
        localStorage.setItem('deliveryAddress', JSON.stringify(deliveryAddress));
        showToast('Address saved successfully');
        navigateTo('payment');
    } catch (e) {
        console.error("Error saving address:", e);
        showToast('Error saving address');
    }
}
// Switch between login/register tabs
window.switchAuthTab = function(tab) {
    document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
    document.querySelector(`.auth-tab[onclick="switchAuthTab('${tab}')"]`).classList.add('active');
    
    document.getElementById('login-form').style.display = tab === 'login' ? 'block' : 'none';
    document.getElementById('register-form').style.display = tab === 'register' ? 'block' : 'none';
}
function updatePaymentPage() {
    const paymentItemsContainer = document.getElementById('payment-items');
    if (!paymentItemsContainer) return;
    
    paymentItemsContainer.innerHTML = '';
    
    // Calculate subtotal
    let subtotal = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        
        const itemElement = document.createElement('div');
        itemElement.className = 'payment-item';
        itemElement.innerHTML = `
            <span>${item.name} × ${item.quantity}</span>
            <span>₹${itemTotal.toFixed(2)}</span>
        `;
        paymentItemsContainer.appendChild(itemElement);
    });
    
    // Add shipping row
    const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;
    const shippingElement = document.createElement('div');
    shippingElement.className = 'payment-item';
    shippingElement.innerHTML = `
        <span>Shipping</span>
        <span>${shipping === 0 ? 'FREE' : `₹${shipping.toFixed(2)}`}</span>
    `;
    paymentItemsContainer.appendChild(shippingElement);
    
    // Calculate and display total
    const total = calculateOrderTotal();
    const paymentTotalElement = document.getElementById('payment-total');
    if (paymentTotalElement) {
        paymentTotalElement.textContent = `₹${total.toFixed(2)}`;
    }
}
// Helper function to calculate order total
function calculateOrderTotal() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;
    return subtotal + shipping;
}
// Update the navigateTo function to handle payment page specifically
window.navigateTo = function(page) {
    // Hide all pages
    const pages = ['app', 'cart-page', 'address-page', 'payment-page', 'profile-page', 'auth-page', 'subscription-page'];
    pages.forEach(pageId => {
        const element = document.getElementById(pageId);
        if (element) element.style.display = 'none';
    });
    
    // Show requested page
    const pageToShow = page === 'home' ? 'app' : `${page}-page`;
    const pageElement = document.getElementById(pageToShow);
    if (pageElement) pageElement.style.display = 'block';
    
    // Update active nav button
    document.querySelectorAll('.nav-button').forEach(btn => {
        btn.classList.remove('active');
    });
    const activeButton = document.querySelector(`.nav-button[onclick="navigateTo('${page}')"]`);
    if (activeButton) activeButton.classList.add('active');
    
    // Special cases
    if (page === 'cart') {
        updateCart();
    } else if (page === 'auth') {
        switchAuthTab('login');
    } else if (page === 'payment') {
        updatePaymentPage();
    }
}

// Login function
window.login = function() {
    const phone = document.getElementById('login-phone');
    const password = document.getElementById('login-password');
    
    if (!phone || !password) return;
    
    if (!phone.value || !password.value) {
        showToast('Please fill all fields');
        return;
    }
    
    showToast('Login successful!');
    navigateTo('home');
}

// Register function
window.register = function() {
    const name = document.getElementById('name');
    const address = document.getElementById('address');
    const phone = document.getElementById('phone');
    const pincode = document.getElementById('pincode');
    const password = document.getElementById('password');
    
    if (!name || !address || !phone || !pincode || !password) return;
    
    // Validation
    if (!name.value || !address.value || !phone.value || !pincode.value || !password.value) {
        showToast('Please fill all fields');
        return;
    }
    
    if (!/^\d{10}$/.test(phone.value)) {
        showToast('Please enter a valid 10-digit mobile number');
        return;
    }
    
    if (!/^\d{6}$/.test(pincode.value)) {
        showToast('Please enter a valid 6-digit pincode');
        return;
    }
    
    // Save profile
    const profile = {
        name: name.value.trim(),
        address: address.value.trim(),
        phone: phone.value.trim(),
        pincode: pincode.value.trim()
    };
    
    localStorage.setItem('profile', JSON.stringify(profile));
    showToast('Registration successful!');
    navigateTo('home');
}

// Logout function
window.logout = function() {
    showToast('Logged out successfully');
    navigateTo('home');
}

// Payment methods
window.payOnline = function() {
    if (cart.length === 0) {
        showToast('Your cart is empty!');
        return;
    }
    
    showToast('Redirecting to payment gateway...');
    // In a real app, redirect to payment gateway
    // For demo, we'll just clear the cart
    setTimeout(() => {
        cart.length = 0;
        localStorage.removeItem('cart');
        updateCart();
        showToast('Payment successful! Order placed.');
        navigateTo('home');
    }, 2000);
}

window.cashOnDelivery = function() {
    if (cart.length === 0) {
        showToast('Your cart is empty!');
        return;
    }
    
    showToast('Order placed successfully with Cash on Delivery!');
    // Clear cart after successful order
    cart.length = 0;
    localStorage.removeItem('cart');
    updateCart();
    navigateTo('home');
}

// Select subscription plan
window.selectPlan = function(planType) {
    showToast(`Selected ${planType} plan`);
    // In a real app, would proceed to subscription setup
}

// Show toast notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

// Make functions available globally
window.closeModal = closeModal;
window.changeQuantity = changeQuantity;
window.addToCart = addToCart;