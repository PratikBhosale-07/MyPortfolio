# 🚀 Pratik Bhosale - Personal Portfolio Website

A modern, responsive, and animated personal portfolio website built with pure HTML, CSS, and JavaScript (no frameworks).

## ✨ Features

### 🎨 Design & UI

- **Modern Gradient Design** - Beautiful purple-pink gradient theme
- **Dark/Light Mode Toggle** - Persistent theme preference with localStorage
- **Smooth Animations** - Fade-in, slide-up, and hover effects throughout
- **Fully Responsive** - Optimized for mobile, tablet, and desktop (320px - 1920px+)
- **Premium Aesthetics** - Professional design suitable for placements and internships

### 🔥 Interactive Elements

- **Typing Animation** - Dynamic text animation in hero section
- **Smooth Scrolling** - Seamless navigation between sections
- **Active Navigation** - Auto-highlights current section while scrolling
- **3D Tilt Effect** - Project cards with interactive 3D tilt on hover
- **Scroll Animations** - Elements animate into view using Intersection Observer
- **Animated Progress Bars** - Skills showcase with animated progress bars
- **Preloader** - Smooth loading experience
- **Scroll-to-Top Button** - Easy navigation back to top

### 📋 Sections

1. **Hero Section** - Name, tagline, typing animation, CTA buttons
2. **About Me** - Introduction, statistics, profile placeholder
3. **Skills** - Categorized skills with progress bars (Programming, Web Dev, Tools, Specializations)
4. **Projects** - 6 featured projects with hover effects and tech tags
5. **Education** - MIT Academy of Engineering details with coursework
6. **Contact** - Working contact form with validation + social links
7. **Footer** - Quick links and social media

### 🛠️ Technologies & Skills Highlighted

- **Programming**: Python, JavaScript, C/C++
- **Web Development**: HTML5, CSS3, React
- **Engineering Tools**: MATLAB, Simulink, Arduino
- **Specializations**: Machine Learning, Embedded Systems, Digital Communication

### 📁 Projects Showcased

1. Smart Parking Slot Detection System (Arduino + Sensors)
2. Satellite-based Digital Communication System (Simulink, GMSK, BCH)
3. Predictive Pulse — Blood Pressure ML Model (Python, ML)
4. Budget Management App (React)
5. Smart Glasses for Obstacle Detection (ATtiny85)
6. DSA & ML Projects Collection (Python, Algorithms)

## 📂 Folder Structure

```
MyPortfolio/
│
├── index.html           # Main HTML file
├── styles/
│   └── style.css       # All CSS styling
├── scripts/
│   └── script.js       # All JavaScript functionality
├── assets/             # Images and icons (add your own)
│   └── (place your profile photo, project images here)
├── resume/             # Resume PDF
│   └── Pratik_Bhosale_Resume.pdf (add your resume here)
└── README.md           # This file
```

## 🚀 How to Run

### Method 1: Direct Open (Simplest)

1. Navigate to the `MyPortfolio` folder
2. Double-click `index.html` to open in your default browser

### Method 2: Using VS Code Live Server (Recommended)

1. Open the folder in VS Code
2. Install "Live Server" extension (if not already installed)
3. Right-click on `index.html`
4. Select "Open with Live Server"
5. Your portfolio will open at `http://127.0.0.1:5500`

### Method 3: Using Python HTTP Server

```bash
# Navigate to the project folder
cd "p:\program\Code\MyPortfolio"

# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Open browser to: http://localhost:8000
```

### Method 4: Using Node.js HTTP Server

```bash
# Install http-server globally (one-time)
npm install -g http-server

# Navigate to project folder
cd "p:\program\Code\MyPortfolio"

# Start server
http-server

# Open browser to: http://localhost:8080
```

## 🎨 Customization Guide

### 1. Personal Information

**File**: `index.html`

- **Name**: Line 48 - Update `<h1 class="name">Your Name</h1>`
- **Email**: Lines 701, 715, 767 - Update email addresses
- **Phone**: Line 722 - Add your phone number
- **Social Links**: Lines 732-747, 799-809 - Update GitHub, LinkedIn, Twitter URLs

### 2. Projects

**File**: `index.html` (Lines 417-701)

Each project card structure:

```html
<div class="project-card">
  <!-- Update project details here -->
  <h3 class="project-title">Your Project Name</h3>
  <p class="project-description">Your project description</p>
  <!-- Update tech tags -->
</div>
```

### 3. Skills

**File**: `index.html` (Lines 256-416)

To modify skill progress percentages:

```html
<div class="skill-progress" data-progress="85"></div>
<!-- Change data-progress value (0-100) -->
```

### 4. Colors & Theme

**File**: `styles/style.css` (Lines 8-20)

Modify CSS variables:

```css
:root {
  --primary-color: #6c63ff; /* Main purple color */
  --secondary-color: #ff6584; /* Pink accent */
  --accent-color: #00d4ff; /* Cyan accent */
  /* Modify gradients as needed */
}
```

### 5. Resume PDF

1. Add your resume PDF to `resume/` folder
2. Name it `Pratik_Bhosale_Resume.pdf` (or update the link in HTML)

### 6. Profile Photo & Project Images

1. Add images to `assets/` folder
2. Update HTML to replace placeholder icons:

```html
<!-- Replace this: -->
<div class="image-placeholder">
  <i class="fas fa-user-graduate"></i>
</div>

<!-- With this: -->
<img src="assets/your-photo.jpg" alt="Pratik Bhosale" />
```

## 🎯 Key Features Explained

### Dark/Light Mode

- Toggle button in navigation bar
- Preference saved in browser localStorage
- Automatic theme persistence on page reload

### Typing Animation

- 5 different text phrases rotate automatically
- Customizable in `scripts/script.js` (Line 115):

```javascript
const texts = [
  "Your Text 1",
  "Your Text 2",
  // Add more...
];
```

### Form Handling

- Frontend validation (name, email, subject, message)
- Currently logs to console (Line 360 in script.js)
- **To make it functional**: Integrate with backend API or services like:
  - EmailJS
  - Formspree
  - Netlify Forms
  - Your own backend server

### Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌐 Deployment Options

### 1. GitHub Pages (Free)

```bash
# Create a new repository on GitHub
# Push your code
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main

# Enable GitHub Pages in repository settings
# Your site will be live at: https://yourusername.github.io/portfolio
```

### 2. Netlify (Free)

1. Create account at netlify.com
2. Drag and drop the `MyPortfolio` folder
3. Done! Your site is live

### 3. Vercel (Free)

1. Install Vercel CLI: `npm i -g vercel`
2. Navigate to project folder
3. Run: `vercel`
4. Follow prompts

### 4. Any Web Hosting

- Upload all files via FTP
- Ensure `index.html` is in the root directory

## 📱 Browser Compatibility

✅ Chrome (Latest)
✅ Firefox (Latest)
✅ Safari (Latest)
✅ Edge (Latest)
✅ Mobile Browsers (iOS Safari, Chrome Mobile)

## 🔧 Troubleshooting

### Icons not showing?

- Check internet connection (Font Awesome loads from CDN)
- Or download Font Awesome locally

### Animations not working?

- Clear browser cache
- Check JavaScript console for errors (F12)

### Dark mode not persisting?

- Check browser localStorage is enabled
- Try in incognito mode to test

### Form not submitting?

- Currently designed for frontend demo
- Integrate with backend service (see comments in script.js Line 360)

## 📸 Screenshots Preview

```
┌─────────────────────────────────────┐
│  🎯 HERO SECTION                    │
│  • Animated gradient background     │
│  • Typing animation effect          │
│  • CTA buttons with hover effects   │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  👤 ABOUT SECTION                   │
│  • Profile introduction             │
│  • Statistics cards                 │
│  • Profile photo placeholder        │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  💡 SKILLS SECTION                  │
│  • 4 skill categories               │
│  • Animated progress bars           │
│  • Hover effects on cards           │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  🚀 PROJECTS SECTION                │
│  • 6 project cards with 3D tilt     │
│  • Hover overlay with links         │
│  • Tech tags                        │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  🎓 EDUCATION SECTION               │
│  • MIT Academy details              │
│  • Coursework tags                  │
│  • Academic highlights              │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  📧 CONTACT SECTION                 │
│  • Working contact form             │
│  • Social media links               │
│  • Contact information cards        │
└─────────────────────────────────────┘
```

## 🎨 Color Scheme

- **Primary Purple**: #6C63FF
- **Secondary Pink**: #FF6584
- **Accent Cyan**: #00D4FF
- **Gradients**: Purple → Violet, Pink → Red, Blue → Cyan

## 📈 Performance

- ⚡ Pure HTML/CSS/JS (no heavy frameworks)
- 🎯 Lazy loading for images
- 🚀 Intersection Observer for efficient animations
- 💾 Minimal external dependencies (only Font Awesome and Google Fonts)

## 📝 To-Do Enhancements (Optional)

- [ ] Add actual profile photo
- [ ] Add project screenshots/images
- [ ] Upload resume PDF
- [ ] Update social media links
- [ ] Integrate contact form backend
- [ ] Add blog section (optional)
- [ ] Add testimonials section (optional)
- [ ] Implement analytics (Google Analytics)
- [ ] Add meta tags for SEO
- [ ] Create favicon

## 📄 License

This project is free to use for personal purposes. Feel free to customize it for your own portfolio!

## 🤝 Support & Contact

**Pratik Bhosale**

- 🎓 B.Tech E&TC Engineering Student
- 🏛️ MIT Academy of Engineering, Pune
- 📧 Email: pratik.bhosale@mitaoe.ac.in
- 💼 LinkedIn: [Update your LinkedIn URL]
- 🐙 GitHub: [Update your GitHub URL]

---

**Made with ❤️ and ☕ | © 2025 Pratik Bhosale**

🌟 If you found this portfolio template helpful, consider giving it a star!
