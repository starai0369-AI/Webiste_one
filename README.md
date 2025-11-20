# AI Voice Agent Demo Booking Website

A professional, conversion-focused website for selling AI Voice Agent solutions that help businesses increase sales by never missing a customer call.

## 🎨 Design Overview

### Color Scheme
- **Primary Navy**: `#1a365d`, `#2c5282`
- **Accent Gold**: `#d4af37`, `#ffd700`, `#b8941e`
- **Background**: `#faf8f3` (Cream/Off-white)
- **Text**: Navy Blue on light backgrounds, White/Cream on dark backgrounds

### Typography
- **Headings**: Playfair Display (serif) - Classic, professional
- **Body**: Inter (sans-serif) - Clean, modern, readable

## 📁 File Structure

```
voice-agent-website/
├── index.html          # Main HTML structure
├── styles.css          # All styling and responsive design
├── script.js           # Interactive features and animations
├── images/             # Image assets folder
│   ├── hero-bg.jpg
│   ├── healthcare-icon.svg
│   ├── realestate-icon.svg
│   ├── salon-icon.svg
│   └── restaurant-icon.svg
└── README.md           # This file
```

## ✨ Features

### Sections Included

1. **Hero Section**
   - Compelling headline and subheadline
   - Primary and secondary CTAs
   - Trust indicators

2. **Sales Impact Section**
   - Statistics grid with animated counters
   - Value proposition messaging
   - Navy background with gold accents

3. **Industry Solutions**
   - 4 industry-specific cards (Healthcare, Real Estate, Salons/Med Spas, Restaurants)
   - Hover effects and ROI statements
   - Responsive grid layout

4. **How It Works**
   - 3-step process visualization
   - Clear, simple flow

5. **Features Section**
   - 6 key features with icons
   - Grid layout with hover effects

6. **Social Proof**
   - Customer testimonials
   - Statistics bar with animated counters

7. **ROI Calculator**
   - Interactive slider for missed calls
   - Customer value input
   - Real-time revenue loss calculation

8. **Demo Booking**
   - Embedded Cal.com iframe
   - What to expect checklist
   - Clear value proposition

9. **FAQ Section**
   - Accordion-style questions
   - Keyboard accessible
   - Smooth animations

10. **Final CTA**
    - High-contrast section
    - Prominent call-to-action

11. **Footer**
    - Quick links
    - Contact information
    - Social media icons

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- A web server (for local development, you can use Python's built-in server or any static file server)

### Installation

1. Clone or download this repository
2. Open `index.html` in a web browser, or
3. Serve the files using a local web server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (with http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

4. Navigate to `http://localhost:8000` in your browser

## 🔧 Customization

### Cal.com Integration

The demo booking section uses an embedded Cal.com iframe. To update the booking URL:

1. Open `index.html`
2. Find the line with the Cal.com iframe (around line 350)
3. Replace `https://cal.com/star-ai-fv1plw` with your Cal.com booking URL

```html
<iframe src="YOUR_CAL_COM_URL" width="100%" height="700" frameborder="0"></iframe>
```

### Colors

To customize colors, edit the CSS variables in `styles.css`:

```css
:root {
    --navy-primary: #1a365d;
    --navy-secondary: #2c5282;
    --gold-primary: #d4af37;
    --gold-accent: #ffd700;
    --gold-dark: #b8941e;
    --cream: #faf8f3;
}
```

### Content

All content is in `index.html`. Simply edit the text within the HTML tags to update:
- Headlines
- Descriptions
- Testimonials
- FAQ answers
- Contact information

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

### Mobile Features
- Hamburger menu navigation
- Stacked layouts
- Touch-friendly buttons
- Optimized typography sizes

## ♿ Accessibility

The website follows WCAG 2.1 AA guidelines:
- Proper semantic HTML
- Keyboard navigation support
- Focus indicators (gold outline)
- ARIA labels where needed
- Sufficient color contrast
- Alt text ready for images

## 🎯 Interactive Features

### JavaScript Functionality

1. **Mobile Menu**: Hamburger menu toggle for mobile devices
2. **Smooth Scroll**: Smooth scrolling to sections when clicking navigation links
3. **Counter Animations**: Statistics count up when scrolled into view
4. **FAQ Accordion**: Expandable/collapsible FAQ items
5. **ROI Calculator**: Real-time calculation of lost revenue
6. **Fade-in Animations**: Elements fade in as they scroll into view
7. **Navbar Effects**: Shadow changes on scroll

## 🖼️ Images

The `images/` folder is set up for the following assets:
- `hero-bg.jpg` - Hero section background (optional)
- `healthcare-icon.svg` - Healthcare industry icon
- `realestate-icon.svg` - Real estate industry icon
- `salon-icon.svg` - Salon/Med Spa industry icon
- `restaurant-icon.svg` - Restaurant/Home Services icon

**Note**: Currently, the website uses emoji icons as placeholders. Replace these with actual SVG icons or images as needed.

## 🔍 SEO Considerations

- Semantic HTML structure
- Meta description included
- Proper heading hierarchy (h1, h2, h3)
- Descriptive alt text ready for images
- Clean URL structure (anchor links)

## 🐛 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This project is provided as-is for use in your business.

## 🤝 Support

For questions or customization help, refer to the code comments or contact your development team.

## 🎨 Design Notes

- The design emphasizes trust and professionalism through the Navy/Gold color scheme
- Gold accents draw attention to CTAs and important information
- Cream background provides a warm, approachable feel
- Ample white space ensures readability and a premium feel
- Typography hierarchy guides users through the conversion funnel

---

**Built with**: HTML5, CSS3, JavaScript (Vanilla)
**No dependencies required** - Pure, lightweight code

