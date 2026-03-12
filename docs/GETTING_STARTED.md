# Getting Started Guide

## Prerequisites

Just a text editor and a web browser! No setup required.

Optional for local development:
- **Python 3** (for simple server)
- **Node.js** (for npm packages)

## Installation

This is a vanilla HTML/CSS/JavaScript project. No build process needed!

```bash
# Clone or download the project
cd mokutu-hometech

# That's it! You're ready to go.
```

## Running the Website

### Option 1: Open in Browser (Simplest)

1. Navigate to the project folder
2. Right-click `index.html`
3. Select "Open with..." → Choose your browser
4. That's it!

**Note:** Some features may not work if opened as `file://` due to browser security. Consider using a local server (see options below).

### Option 2: Python Server (Recommended)

**Python 3:**
```bash
# Navigate to project folder
cd mokutu-hometech

# Start development server
python -m http.server 8000

# Visit: http://localhost:8000
```

**Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

### Option 3: Node.js HTTP Server

```bash
# Install dependencies (one-time only)
npm install

# Start server
npm start

# Or run with auto-reload
npm run dev
```

Starts on `http://localhost:3000`

### Option 4: Live Server (VS Code)

If using Visual Studio Code:

1. Install "Live Server" extension
   - Open Extensions (`Ctrl+Shift+X`)
   - Search "Live Server"
   - Click Install

2. Right-click `index.html` → "Open with Live Server"

3. Browser opens automatically with auto-reload on save!

## Project Structure Quick Reference

```
mokutu-hometech/
├── src/
│   ├── pages/          → All HTML files (navigation links here)
│   ├── styles/         → CSS files
│   ├── scripts/        → JavaScript files
│   └── assets/images/  → Image files
├── docs/               → Documentation (this file!)
├── README.md           → Project overview
└── package.json        → Dependencies & scripts
```

## File Organization

After reorganization, pages are in `src/pages/`:
- `src/pages/index.html` - Homepage
- `src/pages/about.html` - About page
- `src/pages/services.html` - Services
- `src/pages/shop.html` - Product shop
- `src/pages/contact.html` - Contact form

Stylesheets use relative paths:
```html
<link rel="stylesheet" href="../styles/style.css">
```

Scripts:
```html
<script src="../scripts/main.js"></script>
```

## Development Workflow

### Making Changes

1. **Edit HTML files** in `src/pages/`
2. **Edit styles** in `src/styles/style.css`
3. **Edit JavaScript** in `src/scripts/main.js`
4. **Add images** to `src/assets/images/`

### Save and Refresh

- If running local server: Changes appear on refresh
- If using VS Code Live Server: Changes appear automatically!
- If opened directly: Reload browser (`Ctrl+R` or `Cmd+R`)

### Testing

**Test on different browsers:**
- Chrome
- Firefox
- Safari
- Edge

**Test responsive design:**
- Desktop (1200px+)
- Tablet (768px)
- Mobile (480px)

Use browser DevTools:
- Chrome: `F12` → Click device icon for responsive view
- Firefox: `F12` → Responsive Design Mode
- Safari: Enable Develop menu in preferences, then `Cmd+Opt+U`

## Common Tasks

### Add a New Page

1. Create `src/pages/newpage.html`
2. Copy/paste navigation and footer from existing page
3. Update navigation links to include new page:
   ```html
   <li><a href="newpage.html">New Page</a></li>
   ```
4. Add style in `style.css` if needed
5. Update footer links (appears on every page)

### Change Brand Color

The site uses a green accent color. To change:

1. Open `src/styles/style.css`
2. Find the CSS variables section (top of file):
   ```css
   :root {
     --accent-green: #1f7a63;        /* Change this */
     --accent-green-hover: #176652;  /* And this */
   }
   ```
3. Replace with your color
4. Everything updates automatically!

**Hex color picker:** [htmlcolorcodes.com](https://www.htmlcolorcodes.com/)

### Update Contact Information

Contact info appears in:
1. **Footer** - On every page
2. **About page** - In contact details section
3. **Contact page** - In contact form section

Search for:
- Email: `info@mokutuhometech.co.za`
- Phone: `+27 11 123 4567`
- Location: `Johannesburg, South Africa`

Replace all instances with your info.

### Add Products to Shop

In `src/pages/shop.html`, find the products section:

```html
<div class="product-card">
  <div class="product-image">
    <img src="../assets/images/product-name.jpg" alt="Product Name">
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

Copy this pattern and update:
- Image path
- Product name
- Price (both display and in onclick)

### Customize Homepage Section

Homepage sections are in `src/pages/index.html`. Find the section you want to edit:

```html
<section class="section">
  <div class="container">
    <!-- Your section content here -->
  </div>
</section>
```

Edit text, add/remove cards, etc.

## Debugging

### Page Doesn't Look Right

1. **Clear browser cache:**
   - Chrome: `Ctrl+Shift+Delete`
   - Firefox: `Ctrl+Shift+Delete`
   - Safari: Develop → Empty Web Storage

2. **Check file paths:**
   - Are images loading? (Check DevTools Network tab)
   - Are stylesheets linked? (Check DevTools Styles tab)

3. **Check console for errors:**
   - Press `F12` → Console tab
   - Look for error messages in red
   - Share these errors if stuck

### JavaScript Not Working

1. Check if JavaScript file is loaded:
   - DevTools → Sources → Look for `main.js`

2. Check for errors:
   - DevTools → Console → Any red errors?

3. Verify function calls:
   - Make sure `initMobileNav()`, etc. are called in `DOMContentLoaded`

### Form Not Validating

1. Check HTML form IDs match JavaScript:
   ```html
   <!-- HTML -->
   <input id="name" type="text">
   ```
   ```javascript
   // JavaScript looks for this ID
   document.getElementById('name')
   ```

2. Check field names:
   - `name`, `email`, `phone`, `service`, `message` are expected

3. Check browser console for errors

## Performance Tips

1. **Optimize images:**
   - Compress before adding to site
   - Use modern formats (WebP when possible)
   - Tools: TinyPNG, ImageOptim

2. **Minimize CSS/JS:**
   - Only when deploying to production
   - Tools: CSS Nano, UglifyJS

3. **Monitor performance:**
   - DevTools → Network tab → Check file sizes
   - DevTools → Performance tab → Run lighthouse

## Deployment

Ready to go live?

1. **Sign up for hosting:**
   - Netlify (recommended, free)
   - Vercel
   - GitHub Pages
   - Traditional hosting (Bluehost, etc.)

2. **Upload files:**
   - Netlify: Drag & drop folder
   - GitHub Pages: Push to gh-pages branch
   - Traditional: FTP upload

3. **Custom domain:**
   - Register domain (Namecheap, GoDaddy)
   - Point to hosting provider
   - Update contact info for new domain

## Getting Help

### Documentation
- **Code explanations:** See [CODE_SNIPPETS.md](CODE_SNIPPETS.md)
- **File organization:** See [CODE_STRUCTURE.md](CODE_STRUCTURE.md)
- **Project overview:** See [README.md](../README.md)

### Resources
- **HTML:** [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML)
- **CSS:** [CSS-Tricks](https://css-tricks.com/)
- **JavaScript:** [JavaScript.info](https://javascript.info/)
- **Learning:** [Codecademy](https://www.codecademy.com/), [freeCodeCamp](https://www.freecodecamp.org/)

### Common Issues

**Q: Images not showing**
A: Check `src/assets/images/` has actual image files. Use correct file paths.

**Q: Styles not applying**
A: Verify CSS file path is correct. Check browser DevTools for 404 errors.

**Q: Mobile menu not working**
A: Check `initMobileNav()` is called. Verify HTML structure matches JavaScript selectors.

**Q: Form not submitting**
A: Check form has `id="contactForm"`. Verify all field IDs match validation rules.

## Next Steps

1. **Customize content** - Update text, images, services
2. **Test thoroughly** - Different browsers, devices
3. **Deploy** - Push to hosting provider
4. **Promote** - Share with your audience!

Happy building! 🚀
