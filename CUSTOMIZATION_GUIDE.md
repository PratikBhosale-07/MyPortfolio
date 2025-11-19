# 🎨 Customization Guide

This guide will help you personalize your portfolio website quickly and easily.

## 📝 Table of Contents

1. [Personal Information](#1-personal-information)
2. [Profile Photo](#2-profile-photo)
3. [Projects](#3-projects)
4. [Skills](#4-skills)
5. [Colors & Theme](#5-colors--theme)
6. [Contact Information](#6-contact-information)
7. [Social Media Links](#7-social-media-links)
8. [Resume](#8-resume)

---

## 1. Personal Information

### Name

**File**: `index.html`
**Line**: 48

```html
<!-- Current -->
<h1 class="name fade-in">Pratik Bhosale</h1>

<!-- Change to your name -->
<h1 class="name fade-in">Your Name</h1>
```

### Tagline/Description

**File**: `index.html`
**Line**: 58

```html
<p class="description fade-in">Your description here</p>
```

### About Me Text

**File**: `index.html`
**Lines**: 103-121

Update the paragraphs in the about section with your own story.

---

## 2. Profile Photo

### Step 1: Add Your Photo

1. Save your photo as `profile.jpg` in the `assets/` folder
2. Recommended size: 400x400px (square)
3. Format: JPG or PNG

### Step 2: Update HTML

**File**: `index.html`
**Lines**: 137-141

```html
<!-- Replace this: -->
<div class="image-placeholder">
  <i class="fas fa-user-graduate"></i>
</div>

<!-- With this: -->
<img
  src="assets/profile.jpg"
  alt="Your Name"
  style="border-radius: 16px; width: 100%; height: 100%; object-fit: cover;"
/>
```

---

## 3. Projects

### Add New Project

**File**: `index.html`
**Location**: Inside `<div class="projects-grid">` (after line 442)

```html
<div class="project-card">
  <div class="project-image">
    <div class="project-overlay">
      <div class="project-links">
        <a
          href="YOUR_PROJECT_LINK"
          class="project-link"
          aria-label="View project"
        >
          <i class="fas fa-external-link-alt"></i>
        </a>
        <a href="YOUR_GITHUB_LINK" class="project-link" aria-label="View code">
          <i class="fab fa-github"></i>
        </a>
      </div>
    </div>
    <div class="project-placeholder">
      <i class="fas fa-rocket"></i>
      <!-- Change icon -->
    </div>
  </div>
  <div class="project-content">
    <div class="project-category">
      <span class="badge">Category 1</span>
      <span class="badge">Category 2</span>
    </div>
    <h3 class="project-title">Your Project Name</h3>
    <p class="project-description">Your project description here...</p>
    <div class="project-tech">
      <span class="tech-tag">Tech 1</span>
      <span class="tech-tag">Tech 2</span>
      <span class="tech-tag">Tech 3</span>
    </div>
  </div>
</div>
```

### Add Project Images

1. Save project screenshot as `project1.jpg` in `assets/` folder
2. Replace the placeholder div:

```html
<!-- Replace: -->
<div class="project-placeholder">
  <i class="fas fa-rocket"></i>
</div>

<!-- With: -->
<img
  src="assets/project1.jpg"
  alt="Project Name"
  style="width: 100%; height: 100%; object-fit: cover;"
/>
```

### Update Project Links

Replace `#` with your actual URLs:

```html
<a href="https://your-project-demo.com" class="project-link">
  <a href="https://github.com/yourusername/project" class="project-link"></a
></a>
```

---

## 4. Skills

### Modify Skill Progress

**File**: `index.html`
**Lines**: 256-416

Change the `data-progress` value (0-100):

```html
<div class="skill-progress" data-progress="85"></div>
<!-- Change 85 to your desired percentage -->
```

### Add New Skill

Copy this template and add to any skill category:

```html
<div class="skill-card">
  <div class="skill-icon">
    <i class="fas fa-ICON-NAME"></i>
    <!-- Choose icon from Font Awesome -->
  </div>
  <div class="skill-info">
    <h4>Skill Name</h4>
    <div class="skill-bar">
      <div class="skill-progress" data-progress="75"></div>
    </div>
  </div>
</div>
```

### Add New Skill Category

```html
<div class="skill-category">
  <h3 class="category-title"><i class="fas fa-ICON"></i> Category Name</h3>
  <div class="skill-items">
    <!-- Add skill cards here -->
  </div>
</div>
```

---

## 5. Colors & Theme

### Change Primary Colors

**File**: `styles/style.css`
**Lines**: 8-20

```css
:root {
  /* Change these colors */
  --primary-color: #6c63ff; /* Main color */
  --secondary-color: #ff6584; /* Accent color */
  --accent-color: #00d4ff; /* Additional accent */
}
```

### Modify Gradients

**Lines**: 14-18

```css
--gradient-1: linear-gradient(135deg, #YOUR_COLOR1 0%, #YOUR_COLOR2 100%);
--gradient-2: linear-gradient(135deg, #YOUR_COLOR3 0%, #YOUR_COLOR4 100%);
```

### Popular Color Schemes

**Blue Professional:**

```css
--primary-color: #2563eb;
--secondary-color: #3b82f6;
--gradient-1: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
```

**Green Tech:**

```css
--primary-color: #10b981;
--secondary-color: #34d399;
--gradient-1: linear-gradient(135deg, #059669 0%, #10b981 100%);
```

**Orange Creative:**

```css
--primary-color: #f97316;
--secondary-color: #fb923c;
--gradient-1: linear-gradient(135deg, #ea580c 0%, #f97316 100%);
```

**Red Bold:**

```css
--primary-color: #ef4444;
--secondary-color: #f87171;
--gradient-1: linear-gradient(135deg, #dc2626 0%, #ef4444 100%);
```

---

## 6. Contact Information

### Email

**File**: `index.html`
**Lines to update**: 701, 715, 767

```html
<!-- Line 701 -->
<a href="mailto:your.email@example.com">your.email@example.com</a>

<!-- Line 715 -->
<a href="mailto:your.email@example.com" aria-label="Email">
  <!-- Line 767 -->
  <a href="mailto:your.email@example.com" aria-label="Email"></a
></a>
```

### Phone Number

**File**: `index.html`
**Line**: 722

```html
<p>+91 XXXXX XXXXX</p>
<!-- Change to your number -->
<p>+91 98765 43210</p>
```

### Location

**File**: `index.html`
**Line**: 733

```html
<p>Your City, State, Country</p>
```

---

## 7. Social Media Links

### Update All Social Links

**File**: `index.html`

**GitHub** (Lines 732, 799):

```html
<a href="https://github.com/YOUR_USERNAME" target="_blank"></a>
```

**LinkedIn** (Lines 738, 803):

```html
<a href="https://linkedin.com/in/YOUR_PROFILE" target="_blank"></a>
```

**Twitter/X** (Line 747):

```html
<a href="https://twitter.com/YOUR_HANDLE" target="_blank"></a>
```

### Add More Social Links

Add after existing social icons:

**Instagram:**

```html
<a
  href="https://instagram.com/your_handle"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Instagram"
>
  <i class="fab fa-instagram"></i>
</a>
```

**YouTube:**

```html
<a
  href="https://youtube.com/@your_channel"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="YouTube"
>
  <i class="fab fa-youtube"></i>
</a>
```

**Medium:**

```html
<a
  href="https://medium.com/@your_username"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Medium"
>
  <i class="fab fa-medium"></i>
</a>
```

---

## 8. Resume

### Add Your Resume

1. Save your resume as PDF in `resume/` folder
2. Name it: `Pratik_Bhosale_Resume.pdf` (or any name)

### Update Resume Link

**File**: `index.html`
**Line**: 76

```html
<!-- If you named it differently -->
<a href="resume/YOUR_RESUME_NAME.pdf" download class="btn btn-primary">
  <i class="fas fa-download"></i> Download Resume
</a>
```

---

## 🎯 Quick Customization Checklist

Use this checklist to ensure you've personalized everything:

- [ ] Updated name in hero section
- [ ] Updated email addresses (3 places)
- [ ] Updated phone number
- [ ] Updated location
- [ ] Updated about me text
- [ ] Added profile photo
- [ ] Updated GitHub link
- [ ] Updated LinkedIn link
- [ ] Updated Twitter/social links
- [ ] Modified projects with your own
- [ ] Added project images
- [ ] Updated project GitHub links
- [ ] Adjusted skill percentages
- [ ] Added your resume PDF
- [ ] Tested all links work
- [ ] Changed colors (optional)
- [ ] Updated education details (if different college)
- [ ] Tested on mobile device
- [ ] Tested dark/light mode

---

## 🔍 Finding Font Awesome Icons

Visit: https://fontawesome.com/search?o=r&m=free

**Example icons:**

- Programming: `fa-code`, `fa-laptop-code`, `fa-terminal`
- Web: `fa-globe`, `fa-window-maximize`, `fa-browser`
- Mobile: `fa-mobile-alt`, `fa-tablet-alt`
- Database: `fa-database`, `fa-server`
- AI/ML: `fa-brain`, `fa-robot`, `fa-chart-line`
- Design: `fa-palette`, `fa-paint-brush`, `fa-pencil-ruler`

---

## 💡 Pro Tips

1. **Keep it Simple**: Don't overload with too many colors or animations
2. **Be Consistent**: Use the same tone throughout your content
3. **Test Links**: Always verify external links work before deploying
4. **Mobile First**: Check how it looks on mobile devices
5. **Loading Speed**: Optimize images (compress before adding)
6. **Regular Updates**: Keep your projects and skills current
7. **Proofread**: Check for typos and grammatical errors
8. **Get Feedback**: Ask friends to review before publishing

---

## 🆘 Need Help?

If you're stuck on any customization:

1. Check the HTML comments in `index.html`
2. Refer to `README.md` for detailed instructions
3. Browser DevTools (F12) helps identify CSS issues
4. Google search: "How to [your issue] HTML/CSS"

---

**Happy Customizing! 🎉**

Remember: This is YOUR portfolio. Make it reflect your personality and skills!
