# Code Structure Guide

## Directory Organization

### `/src/pages/` - HTML Pages
Contains all website pages. Each page has proper semantic HTML structure.

- **index.html** - Homepage with hero section, services overview, and featured products
- **about.html** - Company story, mission, expertise, and testimonials
- **services.html** - Detailed service descriptions
- **shop.html** - Product catalog with add-to-cart functionality
- **contact.html** - Contact form and company information
- **cart.html** - Cart review page showing products added by the user (rendered with JavaScript)

All pages share the same navigation bar and footer for consistency.

### `/src/styles/` - Stylesheets
**style.css** - Main stylesheet containing:

**CSS Variables Section**
```css
:root {
  --white: #ffffff;
  --accent-green: #1f7a63;
  --dark-charcoal: #1f1f1f;
  /* ... more variables ... */
}
```
Centralized color and spacing management. Change any color in one place!

**Global Styles**
- Reset and normalization
- Typography rules
- Container layouts
- Button styles
- Navigation styling

**Component Styles**
- Service cards
- Product cards
- Feature items
- Form elements
- Footer

**Responsive Design**
Media queries for mobile (768px), tablet, and desktop breakpoints.

**Animations**
- `fadeInUp` - Elements slide up while fading in
- `fadeInRight` - Elements slide right while fading in
- Scroll animations for lazy loading

### `/src/scripts/` - JavaScript
**main.js** - Core functionality organized by feature:

**Cart System**
- `addToCart(productName, price)` - Add items to shopping cart
- `updateCartCounter()` - Update cart badge display

**Toast Notifications**
- `showToast(message)` - Display temporary notification messages

**Mobile Navigation**
- `initMobileNav()` - Toggle hamburger menu on mobile devices
- Closes menu when links are clicked

**Scroll Animations**
- `initScrollAnimations()` - Fade-in animation observer
- Uses Intersection Observer API for performance

**Form Validation**
- `initFormValidation()` - Contact form validation
- `validateField(field)` - Individual field validation with error messages
- Rules for: name, email, phone, service type, message

**Navigation Helpers**
- `setActiveNavLink()` - Highlight current page in nav menu
- `initSmoothScroll()` - Smooth scrolling for anchor links

**Initialization**
- All features initialize on `DOMContentLoaded` event
- Global `window.addToCart` exposed for inline onclick handlers

### `/src/assets/images/` - Media Files
Placeholder for images used throughout the site:
- `hero-smart-home.jpg` - Homepage hero image
- `product-*.jpg` - Product images for shop
- `about-*.jpg` - About page images
- `service-*.jpg` - Service section images

### `/public/` - Static Files
Additional static assets like favicon, robots.txt, etc.

## HTML Structure Pattern

All pages follow this pattern:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Meta tags for SEO and responsive design -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="...">
  
  <!-- Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700">
  
  <!-- Stylesheets -->
  <link rel="stylesheet" href="../styles/style.css">
</head>
<body>
  <!-- Navigation -->
  <nav class="navbar">...</nav>
  
  <!-- Page Content Sections -->
  <section class="hero">...</section>
  
  <!-- Footer -->
  <footer class="footer">...</footer>
  
  <!-- Scripts -->
  <script src="../scripts/main.js"></script>
</body>
</html>
```

## CSS Class Naming Convention

Uses simple, descriptive names:
- `.container` - Max-width wrapper (1200px)
- `.section` - Content sections with padding
- `.btn` - Base button styles
- `.btn-primary` - Primary action button
- `.btn-secondary` - Secondary action button
- `.service-card` - Service showcase card
- `.product-card` - Product in shop
- `.feature-item` - Feature/benefit item

## JavaScript Pattern

Each feature is organized as:

```javascript
// Feature name comment with dashes
// ===== Feature Name =====

function featureName() {
  // Feature logic
}

// Initialization or exports
initFeatureName();
```

## Color Scheme

The site uses a clean, professional color palette:

- **Primary Green**: #1f7a63 - Brand accent color
- **Charcoal**: #1f1f1f - Text and headers
- **Light Gray**: #f5f5f5 - Backgrounds
- **White**: #ffffff - Clean backgrounds

All managed through CSS variables for easy updates.

## Responsive Breakpoints

```css
/* Mobile-first approach */
/* Default: Mobile (< 768px) */

@media (max-width: 768px) {
  /* Tablet adjustments */
}

@media (max-width: 480px) {
  /* Mobile adjustments */
}
```

## Performance Considerations

- No external JavaScript frameworks (pure vanilla JS)
- CSS variables enable efficient theme changes
- Intersection Observer for scroll animations (no scroll event listeners)
- Event delegation for dynamically added elements
- Minimal DOM manipulation

## Accessibility

- Semantic HTML elements (nav, section, footer)
- Proper heading hierarchy (h1 → h6)
- ARIA labels for icon-only buttons
- Form labels associated with inputs
- Color contrast meets WCAG standards
