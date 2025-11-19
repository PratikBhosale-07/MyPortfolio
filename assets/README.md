# 📁 Assets Folder

This folder is for storing images, photos, and other media files for your portfolio.

## 📸 What to Add Here

### 1. Profile Photo

- **Filename**: `profile.jpg` or `profile.png`
- **Size**: 400x400px (square recommended)
- **Usage**: About section
- **Format**: JPG or PNG

### 2. Project Screenshots

- **Naming**: `project1.jpg`, `project2.jpg`, etc.
- **Size**: 1200x800px (16:9 ratio recommended)
- **Usage**: Project cards
- **Format**: JPG (compress to < 500KB each)

### 3. Icons/Logos (Optional)

- **Filename**: `logo.png`, `favicon.ico`
- **Usage**: Browser tab, footer
- **Format**: PNG or ICO

## 🎨 Image Optimization Tips

### Before Adding Images:

1. **Resize** to appropriate dimensions
2. **Compress** using tools like:
   - TinyPNG (https://tinypng.com)
   - Squoosh (https://squoosh.app)
   - ImageOptim (Mac)
   - FileOptimizer (Windows)

### Target File Sizes:

- Profile photo: < 200KB
- Project images: < 500KB each
- Icons: < 50KB

## 📝 Example Structure After Adding Images

```
assets/
├── profile.jpg                    (Your photo)
├── project1-parking.jpg          (Smart Parking project)
├── project2-satellite.jpg        (Satellite Communication)
├── project3-ml-model.jpg         (ML Model)
├── project4-budget-app.jpg       (Budget App)
├── project5-smart-glasses.jpg    (Smart Glasses)
├── project6-dsa.jpg              (DSA Projects)
├── logo.png                       (Optional)
└── favicon.ico                    (Optional)
```

## 🔗 How to Use Images in HTML

### Replace Profile Photo Placeholder

In `index.html`, find this section (around line 137):

```html
<!-- Current placeholder -->
<div class="image-placeholder">
  <i class="fas fa-user-graduate"></i>
</div>

<!-- Replace with -->
<img
  src="assets/profile.jpg"
  alt="Pratik Bhosale"
  style="width: 100%; height: 100%; object-fit: cover; border-radius: 16px;"
/>
```

### Replace Project Image Placeholders

In project cards (around lines 445-700), find:

```html
<!-- Current placeholder -->
<div class="project-placeholder">
  <i class="fas fa-car"></i>
</div>

<!-- Replace with -->
<img
  src="assets/project1-parking.jpg"
  alt="Smart Parking System"
  style="width: 100%; height: 100%; object-fit: cover;"
/>
```

## 🎯 Image Specifications

### Profile Photo

```
Dimensions: 400 x 400 px (1:1 ratio)
Format: JPG or PNG
Max Size: 200 KB
Background: Plain or subtle
Lighting: Good lighting, professional look
```

### Project Screenshots

```
Dimensions: 1200 x 800 px (3:2 ratio)
Format: JPG
Max Size: 500 KB per image
Content: Clear view of your project
Quality: High resolution, not blurry
```

## 🌐 Free Stock Images (If Needed)

If you don't have project screenshots yet, use placeholder images from:

- **Unsplash** (https://unsplash.com) - High-quality free photos
- **Pexels** (https://pexels.com) - Free stock photos
- **Pixabay** (https://pixabay.com) - Free images

Search terms:

- "technology"
- "programming"
- "electronics"
- "circuit board"
- "code"

## ⚠️ Important Notes

1. **Copyright**: Only use images you own or have permission to use
2. **Privacy**: Don't include other people's faces without permission
3. **Quality**: Use high-resolution images (but compressed)
4. **Consistency**: Keep similar style across all project images
5. **Alt Text**: Always include descriptive alt text for accessibility

## 🔄 Current Status

```
[ ] Profile photo added
[ ] Project 1 image added (Smart Parking)
[ ] Project 2 image added (Satellite Communication)
[ ] Project 3 image added (ML Model)
[ ] Project 4 image added (Budget App)
[ ] Project 5 image added (Smart Glasses)
[ ] Project 6 image added (DSA Projects)
[ ] Logo added (optional)
[ ] Favicon added (optional)
```

---

**Tip**: Start with your profile photo, as it makes the biggest visual impact!

For now, the portfolio uses Font Awesome icons as placeholders, which look clean and professional even without images.
