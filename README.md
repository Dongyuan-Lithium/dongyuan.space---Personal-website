# Dongyuan's Personal Blog

A beautiful, Apple-style personal blog website built with HTML, CSS, and JavaScript. Features smooth animations, dark mode toggle, and responsive design.

## ✨ Features

- **Apple-style Design**: Clean, modern interface with sophisticated typography
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Smooth Animations**: Organic, non-uniform animations using CSS and JavaScript
- **Interactive Elements**: Hover effects, ripple animations, and notifications
- **No Dependencies**: Pure HTML/CSS/JS - no frameworks required

## 🚀 Quick Start

### Option 1: Simple Setup (Recommended)
1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/dongyuan-blog.git
   cd dongyuan-blog
   ```

2. **Open the website**:
   - Simply double-click `index.html` to open in your browser
   - Or drag `index.html` into your browser window

### Option 2: Local Server (Optional)
If you want to run it on a local server:

1. **Using Python**:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```

2. **Using Node.js**:
   ```bash
   npx serve .
   ```

3. **Using PHP**:
   ```bash
   php -S localhost:8000
   ```

4. **Visit**: `http://localhost:8000`

## 🎨 Customization

### Colors
The website uses CSS custom properties (variables) for easy customization. Edit the `:root` section in `index.html`:

```css
:root {
    --primary-color: #667eea;    /* Main brand color */
    --secondary-color: #764ba2;  /* Secondary color */
    --accent-color: #8b5cf6;     /* Accent color */
    --text-color: #1f2937;       /* Main text color */
    --text-secondary: #6b7280;   /* Secondary text color */
    --bg-color: #ffffff;         /* Background color */
    --card-bg: #f9fafb;          /* Card background */
}
```

### Content
- **Update your name**: Change "Dongyuan" in the `<h1>` tag
- **Modify the subtitle**: Update the text in the `.subtitle` class
- **Edit blog posts**: Modify the content in the blog section
- **Update about section**: Change the personal information

### Adding New Blog Posts
1. Find the `.blog-posts` section in the HTML
2. Copy an existing `<article class="blog-card">` element
3. Update the content, date, and category
4. Add a new `onclick` handler if needed

## 📁 Project Structure

```
dongyuan-blog/
├── index.html          # Main website file
├── .gitignore          # Git ignore rules
├── requirements.txt    # Python dependencies (for future use)
└── README.md          # This file
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with custom properties and animations
- **JavaScript**: Interactive features and animations
- **CSS Grid & Flexbox**: Responsive layouts
- **CSS Animations**: Smooth transitions and effects

## 🌟 Key Features Explained

### Dark Mode Toggle
- Click the floating button in the bottom-right corner
- Theme preference is saved in localStorage
- Smooth transition between light and dark themes

### Animations
- **Fade-in animations**: Elements animate in as you scroll
- **Hover effects**: Cards lift and scale on hover
- **Ripple effects**: Click animations on interactive elements
- **Floating animation**: Your name gently floats

### Responsive Design
- **Mobile-first approach**: Optimized for all screen sizes
- **Flexible typography**: Text scales appropriately
- **Adaptive navigation**: Menu changes layout on mobile

## 🚀 Deployment

### GitHub Pages
1. Push your code to GitHub
2. Go to Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Drag and drop the `index.html` file to Netlify
2. Or connect your GitHub repository
3. Automatic deployment on every push

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts

### Your Own Server
Simply upload the `index.html` file to your web server's public directory.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Commit: `git commit -m 'Add feature'`
5. Push: `git push origin feature-name`
6. Submit a pull request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Inspired by Apple's design philosophy
- Uses system fonts for optimal performance
- Built with modern web standards

## 📞 Contact

- **Website**: [dongyuan.space](https://dongyuan.space)
- **Email**: dongyuan@example.com
- **GitHub**: [@dongyuan](https://github.com/dongyuan)

---

Made with ❤️ by Dongyuan 