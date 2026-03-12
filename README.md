# Mokutu HomeTech

Professional smart home installation and technology services website. We help homeowners in Johannesburg, South Africa upgrade their living spaces with intelligent, connected devices and expert support.

## What We Do

Mokutu HomeTech specializes in:
- **Smart Home Installation** - Complete setup of automated home systems
- **WiFi Optimization** - Professional network configuration and mesh systems
- **Security Cameras** - Professional installation with remote monitoring
- **Smart Lighting** - Automated lighting with scene control
- **Device Configuration** - Integration and setup of all smart devices

## Features

- Modern, responsive design
- Product catalog with shopping cart functionality
- Contact form with validation
- Mobile-friendly navigation
- Smooth scroll animations
- Toast notifications for user feedback
- Professional service showcase

## Project Structure

```
mokutu-hometech/
├── README.md                 # Project overview
├── package.json             # Project dependencies
├── docs/                    # Documentation
│   ├── CODE_STRUCTURE.md   # File organization guide
│   ├── CODE_SNIPPETS.md    # Key features explanation
│   └── GETTING_STARTED.md  # Development guide
├── src/
│   ├── pages/              # HTML pages
│   │   ├── index.html      # Homepage
│   │   ├── about.html      # About us
│   │   ├── services.html   # Services page
│   │   ├── shop.html       # Product shop
│   │   └── contact.html    # Contact form
│   ├── styles/             # Stylesheets
│   │   └── style.css       # Main stylesheet
│   ├── scripts/            # JavaScript
│   │   └── main.js         # Core functionality
│   └── assets/             # Media files
│       └── images/         # Image assets
├── public/                 # Static files
└── css/, js/, images/      # Legacy directories (to be removed)
```

## Getting Started

### Quick Start

**Option 1: Direct Browser** (Simplest)
```bash
# Just open index.html in your browser
# No server required for basic viewing
```

**Option 2: Python Server** (Recommended for development)
```bash
python -m http.server 8000
# Visit http://localhost:8000
```

**Option 3: Node.js HTTP Server**
```bash
npx http-server

# Or run the npm script
npm start
```

### Development

```bash
# Start development server with auto-reload
npm run dev

# Check for any build issues
npm run build
```

## Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Variables
- **Vanilla JavaScript** - No frameworks, pure ES6+
- **Responsive Design** - Mobile-first approach

## Key Features Explained

### Cart System
Add products to cart with real-time counter updates. Cart data persists during the session.

### Form Validation
Real-time validation on contact forms with helpful error messages for users.

### Mobile Navigation
Responsive hamburger menu with smooth animations on mobile devices.

### Scroll Animations
Elements fade in as users scroll down the page for a polished user experience.

### Toast Notifications
Temporary messages inform users of actions (e.g., "Item added to cart").

## Code Documentation

For detailed information about:
- **File organization**: See [docs/CODE_STRUCTURE.md](docs/CODE_STRUCTURE.md)
- **Feature explanations**: See [docs/CODE_SNIPPETS.md](docs/CODE_SNIPPETS.md)
- **Development setup**: See [docs/GETTING_STARTED.md](docs/GETTING_STARTED.md)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- No external JavaScript frameworks
- Optimized CSS with variables for easy theming
- Lazy loading for images
- Minified assets for faster loading

## Contact

**Mokutu HomeTech**
- Email: info@mokutuhometech.co.za
- Phone: +27 11 123 4567
- Location: Johannesburg, South Africa

## License

© 2026 Mokutu HomeTech. All rights reserved.
