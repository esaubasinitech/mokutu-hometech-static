# Code Snippets & Features

## JavaScript Features

### 1. Shopping Cart System

**Add Item to Cart**
```javascript
function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  updateCartCounter();
  showToast(`${productName} added to cart!`);
}
```

**How it works:**
- Stores product data in `cart` array
- Updates visible counter badge
- Shows confirmation toast notification
- Called via `onclick="addToCart('Product Name', 2499)"`

**Usage in HTML:**
```html
<button onclick="addToCart('Smart WiFi Router', 2499)">
  Add to Cart
</button>
```

**Update Cart Counter**
```javascript
function updateCartCounter() {
  const cartCountElements = document.querySelectorAll('.cart-count');
  cartCountElements.forEach(el => {
    el.textContent = cart.length;
    el.style.display = cart.length > 0 ? 'flex' : 'none';
  });
}
```
Updates all cart badge elements across the site.

---

### 2. Toast Notification System

**Show Temporary Message**
```javascript
function showToast(message) {
  const existingToast = document.querySelector('.toast');
  if (existingToast) existingToast.remove();

  const toast = document.createElement('div');
  toast.className = 'toast success';
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}
```

**How it works:**
1. Removes any existing toast
2. Creates new toast element
3. Adds to DOM
4. Triggers show animation (10ms delay lets CSS transition work)
5. Auto-hides after 3 seconds with fade-out animation

**Used for:**
- Cart confirmations
- Form submission feedback
- Validation messages

---

### 3. Mobile Navigation Toggle

**Initialize Mobile Menu**
```javascript
function initMobileNav() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }
}
```

**How it works:**
1. Click hamburger button → toggle active state
2. CSS handles animation (hamburger icon rotates, menu slides)
3. Clicking a link closes menu automatically
4. Prevents menu staying open while navigating

---

### 4. Scroll Animations

**Fade-In On Scroll**
```javascript
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.service-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(card);
  });
}
```

**How it works:**
- Uses Intersection Observer API (performant alternative to scroll listeners)
- When element enters viewport → adds 'fade-in' class
- Staggered animation: each card delays by 0.1s
- CSS handles the actual animation

**CSS Companion:**
```css
.service-card {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.service-card.fade-in {
  opacity: 1;
  transform: translateY(0);
}
```

---

### 5. Form Validation

**Validate Contact Form**
```javascript
function initFormValidation() {
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      let isValid = true;
      const fields = ['name', 'email', 'phone', 'service', 'message'];

      // Validate each field
      fields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (field && !validateField(field)) {
          isValid = false;
        }
      });

      if (isValid) {
        showToast('Message sent successfully!');
        contactForm.reset();
      }
    });
  }
}
```

**Individual Field Validation**
```javascript
function validateField(field) {
  const value = field.value.trim();
  let errorMessage = '';

  switch (field.id) {
    case 'email':
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value) {
        errorMessage = 'Please enter your email';
      } else if (!emailRegex.test(value)) {
        errorMessage = 'Please enter a valid email address';
      }
      break;
    case 'phone':
      const phoneRegex = /^[\d\s\-+()]{10,}$/;
      if (!value) {
        errorMessage = 'Please enter your phone number';
      } else if (!phoneRegex.test(value)) {
        errorMessage = 'Please enter a valid phone number';
      }
      break;
    // ... more cases
  }

  if (errorMessage) {
    field.classList.add('error');
    const errorEl = document.createElement('div');
    errorEl.className = 'error-message';
    errorEl.textContent = errorMessage;
    field.parentElement.appendChild(errorEl);
    return false;
  }

  return true;
}
```

**Validation Rules:**
- **Name**: Min 2 characters
- **Email**: Valid email format
- **Phone**: 10+ digits/characters with common separators
- **Service**: Must select option
- **Message**: Min 10 characters

---

## CSS Features

### 1. CSS Variables for Theming

**Define Colors Once**
```css
:root {
  --white: #ffffff;
  --light-gray: #f5f5f5;
  --dark-charcoal: #1f1f1f;
  --accent-green: #1f7a63;
  --accent-green-hover: #176652;
  --text-secondary: #555555;
  --border-color: #e0e0e0;
  --shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  --shadow-hover: 0 8px 30px rgba(0, 0, 0, 0.12);
  --transition: all 0.3s ease;
}
```

**Use Throughout**
```css
body {
  background-color: var(--white);
  color: var(--dark-charcoal);
}

.btn-primary {
  background-color: var(--accent-green);
  transition: var(--transition);
}
```

**Benefit:** Change brand color in one place, updates everywhere!

---

### 2. Grid Layouts

**Service Cards Grid**
```css
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
}
```

**How it works:**
- `auto-fit` - Creates as many columns as fit
- `minmax(250px, 1fr)` - Each card is at least 250px, scales up
- Automatically responsive without media queries!

---

### 3. Button States

**Primary Button**
```css
.btn-primary {
  background-color: var(--accent-green);
  color: var(--white);
}

.btn-primary:hover {
  background-color: var(--accent-green-hover);
  transform: translateY(-2px);
  box-shadow: var(--shadow-hover);
}
```

**Secondary Button**
```css
.btn-secondary {
  border: 1.5px solid var(--border-color);
  background-color: transparent;
}

.btn-secondary:hover {
  border-color: var(--accent-green);
  color: var(--accent-green);
}
```

---

### 4. Navigation Underline Animation

**Animated Underline on Hover**
```css
.nav-links a {
  position: relative;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--accent-green);
  transition: width 0.3s ease;
}

.nav-links a:hover::after,
.nav-links a.active::after {
  width: 100%;
}
```

Smooth underline grows on hover - elegant effect!

---

### 5. Responsive Hero Section

```css
.hero .container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

@media (max-width: 768px) {
  .hero .container {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .hero-image {
    order: -1;  /* Image appears above text on mobile */
  }
}
```

---

### 6. Card Hover Effects

**Subtle Lift Animation**
```css
.service-card {
  transition: all 0.3s ease;
  border: 1px solid var(--border-color);
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-hover);
  border-color: var(--accent-green);
}
```

Card lifts up, shadow grows, border highlights - smooth!

---

## HTML Patterns

### Semantic Structure

```html
<!-- Main Navigation -->
<nav class="navbar">
  <div class="container">
    <!-- Logo, Links, Cart, etc -->
  </div>
</nav>

<!-- Main Content -->
<main>
  <section class="hero">
    <!-- Hero Section -->
  </section>
  
  <section class="section">
    <!-- Content Section -->
  </section>
</main>

<!-- Footer -->
<footer class="footer">
  <!-- Footer Links -->
</footer>
```

### Service Card Pattern

```html
<div class="service-card">
  <div class="service-icon">
    <svg><!-- Icon SVG --></svg>
  </div>
  <h3>Service Title</h3>
  <p>Service Description</p>
  <a href="services.html">Learn More <span>→</span></a>
</div>
```

### Product Card Pattern

```html
<div class="product-card">
  <div class="product-image">
    <img src="image.jpg" alt="Product">
  </div>
  <div class="product-info">
    <h3>Product Name</h3>
    <p class="product-price">R2,499</p>
    <button class="btn btn-primary btn-small" 
            onclick="addToCart('Product Name', 2499)">
      Add to Cart
    </button>
  </div>
</div>
```

---

## Tips for Extending

**Add New Page:**
1. Create HTML file in `/src/pages/`
2. Update navigation links in navbar
3. Link to new stylesheet

**Add New Feature:**
1. Write JavaScript in `main.js`
2. Add CSS for styling
3. Call initialization in `DOMContentLoaded`

**Change Colors:**
1. Update only CSS variables in `:root`
2. All elements automatically update

**Responsive Design:**
1. Use mobile-first approach
2. Add media queries only when needed
3. Use CSS Grid for flexibility
