// Mokutu HomeTech - Main JavaScript

// ===== Cart System =====
let cart = [];

// ===== Persistence =====
function loadCart() {
  const saved = localStorage.getItem('mokutuCart');
  cart = saved ? JSON.parse(saved) : [];
}

function saveCart() {
  localStorage.setItem('mokutuCart', JSON.stringify(cart));
}

function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  saveCart();
  updateCartCounter();
  showToast(`${productName} added to cart!`);
}

function updateCartCounter() {
  const cartCountElements = document.querySelectorAll('.cart-count');
  cartCountElements.forEach(el => {
    el.textContent = cart.length;
    el.style.display = cart.length > 0 ? 'flex' : 'none';
  });
  saveCart();
}

// ===== Cart page rendering =====
function renderCartPage() {
  const container = document.getElementById('cartContainer');
  if (!container) return;
  if (cart.length === 0) {
    container.innerHTML = '<p>Your cart is empty.</p>';
    return;
  }

  let html = '<table class="cart-table"><thead><tr><th>Product</th><th>Price</th><th></th></tr></thead><tbody>';
  let total = 0;
  cart.forEach((item, idx) => {
    total += item.price;
    html += `<tr><td>${item.name}</td><td>R${item.price.toLocaleString()}</td>` +
            `<td><button class="btn btn-small" onclick="removeFromCart(${idx})">Remove</button></td></tr>`;
  });
  html += '</tbody></table>';
  html += `<p class="cart-total">Total: R${total.toLocaleString()}</p>`;
  html += '<button class="btn btn-primary" id="checkoutBtn">Proceed to Checkout</button>';
  container.innerHTML = html;
  const btn = document.getElementById('checkoutBtn');
  if (btn) {
    btn.addEventListener('click', () => {
      showToast('Checkout is not implemented yet.');
    });
  }
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  updateCartCounter();
  renderCartPage();
}

// ===== Toast Notification =====
function showToast(message) {
  // Remove existing toast if any
  const existingToast = document.querySelector('.toast');
  if (existingToast) {
    existingToast.remove();
  }

  // Create toast element
  const toast = document.createElement('div');
  toast.className = 'toast success';
  toast.textContent = message;
  document.body.appendChild(toast);

  // Show toast
  setTimeout(() => toast.classList.add('show'), 10);

  // Hide toast after 3 seconds
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ===== Mobile Navigation Toggle =====
function initMobileNav() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Close menu when clicking on a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }
}

// ===== Scroll Animations =====
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px 0px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe service cards
  document.querySelectorAll('.service-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.05}s`;
    observer.observe(card);
  });

  // Observe product cards
  document.querySelectorAll('.product-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.05}s`;
    observer.observe(card);
  });

  // Observe feature items
  document.querySelectorAll('.feature-item').forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.05}s`;
    observer.observe(item);
  });

  // Observe fade-in elements
  document.querySelectorAll('.fade-in-element').forEach((el, index) => {
    el.style.transitionDelay = `${index * 0.05}s`;
    observer.observe(el);
  });
}

// ===== Form Validation =====
function initFormValidation() {
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      let isValid = true;
      const fields = ['name', 'email', 'phone', 'service', 'message'];

      // Clear previous errors
      document.querySelectorAll('.error-message').forEach(el => el.remove());
      document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));

      // Validate each field
      fields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (field && !validateField(field)) {
          isValid = false;
        }
      });

      if (isValid) {
        showToast('Message sent successfully! We\'ll get back to you soon.');
        contactForm.reset();
      }
    });

    // Real-time validation
    contactForm.querySelectorAll('input, select, textarea').forEach(field => {
      field.addEventListener('blur', () => validateField(field));
      field.addEventListener('input', () => {
        if (field.classList.contains('error')) {
          validateField(field);
        }
      });
    });
  }
}

function validateField(field) {
  const value = field.value.trim();
  let errorMessage = '';

  // Remove existing error
  field.classList.remove('error');
  const existingError = field.parentElement.querySelector('.error-message');
  if (existingError) existingError.remove();

  // Validation rules
  switch (field.id) {
    case 'name':
      if (!value) {
        errorMessage = 'Please enter your name';
      } else if (value.length < 2) {
        errorMessage = 'Name must be at least 2 characters';
      }
      break;
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
    case 'service':
      if (!value) {
        errorMessage = 'Please select a service type';
      }
      break;
    case 'message':
      if (!value) {
        errorMessage = 'Please enter your message';
      } else if (value.length < 10) {
        errorMessage = 'Message must be at least 10 characters';
      }
      break;
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

// ===== Active Navigation Link =====
function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// ===== Smooth Scroll for Anchor Links =====
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// ===== Initialize All Functions =====
document.addEventListener('DOMContentLoaded', () => {
  loadCart();
  initMobileNav();
  initScrollAnimations();
  initFormValidation();
  setActiveNavLink();
  initSmoothScroll();
  updateCartCounter();
  renderCartPage();
});

// Expose addToCart to global scope for onclick handlers
window.addToCart = addToCart;
