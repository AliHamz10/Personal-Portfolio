# Personal Portfolio

A modern, minimalist portfolio website built with HTML, CSS, and JavaScript. Features a dark theme design system with clean typography and smooth animations.

## 🎨 Design System

This portfolio follows a comprehensive design system defined in `Design.JSON`:

- **Colors**: Dark theme with high contrast (#000000 background, #FFFFFF text)
- **Typography**: Inter font family with large, bold headings
- **Layout**: Mobile-first responsive design with flexible grid system
- **Components**: Reusable components with consistent styling
- **Animations**: Subtle hover effects and smooth transitions

## 🚀 Features

- **Responsive Design**: Mobile-first approach with breakpoints at 768px and 1024px
- **Dark Theme**: High contrast minimalist design
- **Smooth Animations**: Fade-in effects and hover interactions
- **Project Showcase**: Dynamic project grid with filtering
- **Contact Form**: Functional contact form with validation
- **Accessibility**: WCAG compliant with proper contrast ratios
- **Performance**: Optimized for fast loading

## 📁 Project Structure

```
Personal Portfolio/
├── index.html                 # Homepage
├── css/
│   ├── styles.css            # Main styles with design system
│   └── components/
│       ├── navbar.css        # Navigation styles
│       └── footer.css        # Footer styles
├── js/
│   ├── main.js              # Main JavaScript functionality
│   ├── components/
│   │   └── navbar.js        # Navigation functionality
│   └── utils/
│       └── helpers.js       # Helper functions
├── pages/
│   ├── about.html           # About page
│   ├── projects.html        # Projects page
│   └── contact.html         # Contact page
├── data/
│   ├── projects.json        # Project data
│   └── skills.json          # Skills data
├── assets/
│   ├── images/              # Project images
│   └── fonts/               # Custom fonts
├── Design.JSON              # Design system specification
└── README.md               # Project documentation
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, Flexbox, Animations
- **JavaScript (ES6+)**: Modern JavaScript with async/await
- **Google Fonts**: Inter font family
- **Design System**: Custom design tokens and components

## 📱 Pages

### Homepage (`index.html`)

- Hero section with name and title
- Availability indicator with green dot
- Social media links
- Featured projects showcase
- Two-column project grid

### About Page (`pages/about.html`)

- Personal story and background
- Skills and expertise grid
- Work experience timeline
- Professional journey

### Projects Page (`pages/projects.html`)

- Dynamic project grid
- Category filtering (UX/UI, Mobile, Web)
- Project cards with hover effects
- Tags and metadata

### Contact Page (`pages/contact.html`)

- Contact form with validation
- Contact information
- Social media links
- Availability status

## 🎯 Getting Started

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd Personal-Portfolio
   ```

2. **Open in browser**

   - Simply open `index.html` in your web browser
   - Or use a local server for development

3. **Customize content**
   - Update personal information in HTML files
   - Modify project data in `data/projects.json`
   - Adjust skills in `data/skills.json`
   - Replace placeholder images in `assets/images/`

## 🎨 Customization

### Colors

Update CSS variables in `css/styles.css`:

```css
:root {
  --primary-background: #000000;
  --primary-text: #ffffff;
  --accent-available: #22c55e;
  --accent-highlight: #f97316;
  /* ... */
}
```

### Typography

Modify font sizes and weights:

```css
:root {
  --h1-size: 10rem;
  --h2-size: 1.5rem;
  --body-size: 1.125rem;
  /* ... */
}
```

### Content

- Update personal information in HTML files
- Add your projects to `data/projects.json`
- Modify skills in `data/skills.json`
- Replace placeholder images

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Loading Speed**: Optimized images and minimal dependencies
- **Accessibility**: WCAG 2.1 AA compliant
- **SEO**: Proper meta tags and semantic HTML

## 🔧 Development

### Adding New Projects

1. Add project data to `data/projects.json`
2. Add project images to `assets/images/`
3. Projects will automatically appear on the projects page

### Adding New Pages

1. Create new HTML file in `pages/` directory
2. Include navigation and footer components
3. Add page-specific styles to `css/styles.css`

### Modifying Design System

1. Update `Design.JSON` with new specifications
2. Modify CSS variables in `css/styles.css`
3. Test across all pages for consistency

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

MIT License - feel free to use this template for your own portfolio.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test across different devices
5. Submit a pull request

## 📞 Support

For questions or support, please open an issue on GitHub or contact me through the portfolio contact form.

---

**Built with ❤️ using modern web technologies**
