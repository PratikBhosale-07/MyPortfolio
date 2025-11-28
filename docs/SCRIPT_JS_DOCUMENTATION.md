# script.js - Complete Code Documentation

## Overview

This JavaScript file handles all interactive functionality for the portfolio website including theme toggling, mobile navigation, scroll animations, typing effects, form validation, and accessibility features.

---

## File Structure

### Lines 1-50: Theme Toggle System

```javascript
// Theme Toggle
const themeToggle = document.querySelector(".theme-toggle");
const html = document.documentElement;
```

**Line-by-line explanation:**

- **Line 2**: Selects the theme toggle button using class selector
- **Line 3**: Gets reference to `<html>` element for setting data-theme attribute

**Lines 5-20: Initialize Theme from LocalStorage**

```javascript
// Check for saved theme preference or default to 'light' mode
const currentTheme = localStorage.getItem("theme") || "light";
html.setAttribute("data-theme", currentTheme);

// Update icon based on current theme
if (currentTheme === "dark") {
  themeToggle.querySelector("i").classList.remove("fa-moon");
  themeToggle.querySelector("i").classList.add("fa-sun");
}
```

**Explanation:**

- **Line 6**: Retrieves saved theme from `localStorage` or defaults to 'light'
- **Line 7**: Sets `data-theme` attribute on HTML element (triggers CSS changes)
- **Line 10-13**: If dark mode is active, changes icon from moon to sun
- **Why localStorage**: Remembers user preference across page reloads

**Lines 22-45: Theme Toggle Event Listener**

```javascript
themeToggle.addEventListener("click", () => {
  // Get current theme
  const currentTheme = html.getAttribute("data-theme");

  // Switch to opposite theme
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  // Update HTML attribute
  html.setAttribute("data-theme", newTheme);

  // Save to localStorage
  localStorage.setItem("theme", newTheme);

  // Update icon
  const icon = themeToggle.querySelector("i");
  if (newTheme === "dark") {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
});
```

**Explanation:**

- **Line 22**: Click event on theme toggle button
- **Line 24**: Gets current theme value
- **Line 27**: Ternary operator switches between 'dark' and 'light'
- **Line 30**: Updates data-theme attribute (CSS responds automatically)
- **Line 33**: Saves new preference to localStorage
- **Line 36-43**: Swaps Font Awesome icon (moon ↔ sun)

---

### Lines 52-120: Mobile Navigation Menu

```javascript
// Mobile Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
```

**Explanation:**

- **Line 53**: Selects hamburger menu icon (three horizontal lines)
- **Line 54**: Selects navigation menu container
- **Line 55**: Selects all navigation links (NodeList)

**Lines 57-70: Hamburger Click Handler**

```javascript
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");

  // Prevent body scroll when menu is open
  if (navMenu.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});
```

**Explanation:**

- **Line 58-59**: Toggles 'active' class on both hamburger and menu
  - `.active` triggers CSS animations (hamburger → X, menu slides in)
- **Line 62-66**: Body scroll management
  - **When menu opens**: `overflow: hidden` prevents background scrolling
  - **When menu closes**: Restores normal scrolling
- **Mobile UX**: Prevents confusing dual-scroll situation

**Lines 72-85: Close Menu on Link Click**

```javascript
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    document.body.style.overflow = "";
  });
});
```

**Explanation:**

- **Loops through all nav links** with forEach
- **Closes menu when any link is clicked**
- **Restores body scroll**
- **User Experience**: Clicking a navigation link scrolls to section and closes menu

---

### Lines 87-140: Navbar Scroll Effect

```javascript
// Navbar scroll effect
const navbar = document.querySelector(".navbar");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  lastScroll = currentScroll;
});
```

**Explanation:**

- **Line 88**: Selects navbar element
- **Line 89**: Stores last scroll position for direction detection
- **Line 91**: Scroll event listener (fires on every scroll)
- **Line 92**: Gets current vertical scroll position in pixels
- **Line 94-98**: Adds 'scrolled' class when scrolled down 50px
  - **CSS changes**: Increases shadow, reduces padding for compact look
- **Line 100**: Updates lastScroll for next scroll event

**Why 50px threshold**: Prevents flickering near top of page

---

### Lines 142-200: Active Navigation Link Highlighting

```javascript
// Active nav link on scroll
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 100;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-link[href*=" + sectionId + "]")
        ?.classList.add("active");
    } else {
      document
        .querySelector(".nav-link[href*=" + sectionId + "]")
        ?.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", scrollActive);
```

**Explanation:**

- **Line 143**: Selects all sections with ID attributes
- **Line 145**: Function to determine which section is in view
- **Line 146**: Gets current scroll position
- **Line 148**: Loops through each section
- **Line 149-151**: Gets section dimensions and ID
  - `offsetHeight`: Section's height
  - `offsetTop`: Distance from page top
  - `- 100`: Offset for navbar height
- **Line 153-157**: Detection logic
  - **If scroll position is within section bounds**: Add 'active' class
  - **Else**: Remove 'active' class
- **Optional chaining (?.)**: Prevents error if link doesn't exist
- **Line 161**: Attaches function to scroll event

**Visual Result**: Navigation link underlines as you scroll through corresponding sections

---

### Lines 202-280: Typing Animation

```javascript
// Typing effect
const typingText = document.querySelector(".typing-text");
const textArray = [
  "Full Stack Developer",
  "UI/UX Enthusiast",
  "Problem Solver",
];
let textArrayIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 150;
```

**Explanation:**

- **Line 203**: Selects element where typing effect displays
- **Line 204**: Array of phrases to cycle through
- **Line 205**: Tracks which phrase is currently being typed
- **Line 206**: Tracks current character position in phrase
- **Line 207**: Boolean flag for typing vs deleting mode
- **Line 208**: Base typing speed in milliseconds

**Lines 210-260: Typing Function**

```javascript
function type() {
  if (!typingText) return;

  const currentText = textArray[textArrayIndex];

  if (isDeleting) {
    // Remove character
    charIndex--;
    typingText.textContent = currentText.substring(0, charIndex);
    typingSpeed = 50; // Faster deletion
  } else {
    // Add character
    charIndex++;
    typingText.textContent = currentText.substring(0, charIndex);
    typingSpeed = 150; // Normal typing speed
  }

  // If word is complete
  if (!isDeleting && charIndex === currentText.length) {
    // Pause at end
    typingSpeed = 2000;
    isDeleting = true;
  }
  // If word is deleted
  else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textArrayIndex++;

    // Loop back to first phrase
    if (textArrayIndex >= textArray.length) {
      textArrayIndex = 0;
    }

    typingSpeed = 500; // Pause before next word
  }

  setTimeout(type, typingSpeed);
}

// Start typing effect
type();
```

**Explanation:**

- **Line 211**: Early return if element doesn't exist
- **Line 213**: Gets current phrase from array
- **Line 215-220**: Deleting mode
  - Decreases `charIndex`
  - `substring(0, charIndex)` removes characters from end
  - Faster speed (50ms) for snappy deletion
- **Line 221-226**: Typing mode
  - Increases `charIndex`
  - `substring(0, charIndex)` adds characters from start
  - Normal speed (150ms) for realistic typing
- **Line 229-232**: Word complete detection
  - Pauses 2 seconds at end
  - Switches to deleting mode
- **Line 234-244**: Word fully deleted
  - Switches to typing mode
  - Moves to next phrase
  - Loops back to start if at end of array
  - Brief pause before typing next word
- **Line 246**: Recursive setTimeout creates animation loop
- **Line 250**: Initializes typing effect on page load

**Visual Result**: "Full Stack Developer" types out → pauses → deletes → "UI/UX Enthusiast" types out → cycles continuously

---

### Lines 282-380: Intersection Observer (Scroll Animations)

```javascript
// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};
```

**Explanation:**

- **Line 284-286**: Configuration object for Intersection Observer
- **threshold: 0.1**: Triggers when 10% of element is visible
- **rootMargin**: Bottom offset of -100px (triggers earlier as element enters from bottom)

**Lines 288-305: Observer Callback Function**

```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");

      // Trigger skill progress animations if it's a skill card
      if (entry.target.classList.contains("skill-card")) {
        const progressBar = entry.target.querySelector(".skill-progress");
        if (progressBar) {
          const progress = progressBar.getAttribute("data-progress");
          progressBar.style.setProperty("--progress-width", progress + "%");
        }
      }
    }
  });
}, observerOptions);
```

**Explanation:**

- **Line 288**: Creates new IntersectionObserver with callback and options
- **Line 289**: Callback receives array of observed element entries
- **Line 290**: Loops through each entry
- **Line 291**: `isIntersecting` is true when element enters viewport
- **Line 292**: Adds 'active' class (triggers CSS fade-in animation)
- **Line 295-301**: Special handling for skill cards
  - Finds progress bar within skill card
  - Gets `data-progress` attribute (percentage value)
  - Sets CSS variable `--progress-width` to animate bar width
- **Line 303**: Passes observer options to IntersectionObserver constructor

**Lines 307-320: Observe Elements**

```javascript
// Observe elements
const animateOnScroll = document.querySelectorAll(".scroll-animate");
animateOnScroll.forEach((el) => observer.observe(el));

// Observe skill cards separately
const skillCards = document.querySelectorAll(".skill-card");
skillCards.forEach((card) => observer.observe(card));
```

**Explanation:**

- **Line 308**: Selects all elements with 'scroll-animate' class
- **Line 309**: Registers each element with observer
- **Line 312-313**: Additionally observes skill cards for progress animation
- **Why separate**: Skill cards need special handling for progress bars

---

### Lines 322-420: Skill Progress Bar Interaction

```javascript
// Skill progress animation on hover
const skillCards = document.querySelectorAll(".skill-card");

skillCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    const progressBar = card.querySelector(".skill-progress");
    if (progressBar) {
      const progress = progressBar.getAttribute("data-progress");
      progressBar.style.setProperty("--progress-width", progress + "%");
    }
  });

  card.addEventListener("mouseleave", () => {
    const progressBar = card.querySelector(".skill-progress");
    if (progressBar) {
      progressBar.style.setProperty("--progress-width", "0%");
    }
  });
});
```

**Explanation:**

- **Line 323**: Selects all skill card elements
- **Line 325-334**: Mouse enter handler
  - Finds progress bar inside card
  - Gets data-progress value (e.g., "90")
  - Sets CSS variable to trigger width animation
- **Line 336-342**: Mouse leave handler
  - Resets progress bar width to 0%
  - Allows re-animation on next hover

**User Experience**: Hovering over a skill reveals animated progress bar showing proficiency level

---

### Lines 422-520: Form Validation

```javascript
// Form validation
const contactForm = document.querySelector(".contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
```

**Explanation:**

- **Lines 423-426**: Selects form and input elements

**Lines 428-445: Validation Functions**

```javascript
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function showError(input, message) {
  const formGroup = input.parentElement;
  formGroup.classList.add("error");

  let error = formGroup.querySelector(".error-message");
  if (!error) {
    error = document.createElement("small");
    error.className = "error-message";
    formGroup.appendChild(error);
  }
  error.textContent = message;
}

function removeError(input) {
  const formGroup = input.parentElement;
  formGroup.classList.remove("error");

  const error = formGroup.querySelector(".error-message");
  if (error) {
    error.remove();
  }
}
```

**Explanation:**

- **validateEmail**:
  - Regular expression checks for valid email format
  - `[^\s@]+` = one or more non-whitespace, non-@ characters
  - `@` = literal @ symbol
  - `[^\s@]+` = domain name
  - `\.` = literal period
  - `[^\s@]+` = domain extension
- **showError**:
  - Adds 'error' class to form group (triggers red border CSS)
  - Creates or updates error message element
  - Displays validation message below input
- **removeError**:
  - Removes 'error' class
  - Deletes error message element

**Lines 447-510: Form Submit Handler**

```javascript
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let isValid = true;

    // Validate name
    if (nameInput.value.trim() === "") {
      showError(nameInput, "Please enter your name");
      isValid = false;
    } else {
      removeError(nameInput);
    }

    // Validate email
    if (emailInput.value.trim() === "") {
      showError(emailInput, "Please enter your email");
      isValid = false;
    } else if (!validateEmail(emailInput.value.trim())) {
      showError(emailInput, "Please enter a valid email");
      isValid = false;
    } else {
      removeError(emailInput);
    }

    // Validate message
    if (messageInput.value.trim() === "") {
      showError(messageInput, "Please enter a message");
      isValid = false;
    } else if (messageInput.value.trim().length < 10) {
      showError(messageInput, "Message must be at least 10 characters");
      isValid = false;
    } else {
      removeError(messageInput);
    }

    // If all valid, submit form
    if (isValid) {
      // Here you would typically send the form data to a server
      console.log("Form submitted successfully!");

      // Show success message
      alert("Thank you for your message! I will get back to you soon.");

      // Reset form
      contactForm.reset();
    }
  });
}
```

**Explanation:**

- **Line 449**: Prevents default form submission (page reload)
- **Line 451**: Flag to track overall validation state
- **Line 454-459**: Name validation
  - Checks if empty after trimming whitespace
  - Shows error or removes existing error
- **Line 462-471**: Email validation
  - Checks if empty
  - Checks if format is valid using regex
  - Two-level validation for better UX
- **Line 474-482**: Message validation
  - Checks if empty
  - Checks minimum length (10 characters)
  - Ensures meaningful messages
- **Line 485-495**: Submission logic
  - Only proceeds if all fields valid
  - Console log (would be server request in production)
  - Alert confirms submission
  - Resets form to clear all fields

---

### Lines 522-580: Additional Input Validation Events

```javascript
// Real-time validation on input
if (nameInput) {
  nameInput.addEventListener("input", () => {
    if (nameInput.value.trim() !== "") {
      removeError(nameInput);
    }
  });
}

if (emailInput) {
  emailInput.addEventListener("input", () => {
    if (
      emailInput.value.trim() !== "" &&
      validateEmail(emailInput.value.trim())
    ) {
      removeError(emailInput);
    }
  });
}

if (messageInput) {
  messageInput.addEventListener("input", () => {
    if (messageInput.value.trim().length >= 10) {
      removeError(messageInput);
    }
  });
}
```

**Explanation:**

- **Real-time feedback**: Removes errors as user types correct data
- **Better UX**: User doesn't have to resubmit to see error cleared
- **Conditional removal**: Only removes error when input becomes valid
- **Input event**: Fires on every keystroke

---

### Lines 582-626: Accessibility & Utility Features

**Lines 582-600: Keyboard Navigation Enhancement**

```javascript
// Keyboard navigation for mobile menu
if (hamburger) {
  hamburger.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      hamburger.click();
    }
  });
}
```

**Explanation:**

- **Accessibility feature**: Allows keyboard users to open mobile menu
- **Enter or Space key**: Standard activation keys
- **Prevents default**: Space key won't scroll page

**Lines 602-620: Smooth Scroll for Anchor Links**

```javascript
// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      const navHeight = navbar.offsetHeight;
      const targetPosition = target.offsetTop - navHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});
```

**Explanation:**

- **Line 603**: Selects all anchor links starting with # (internal links)
- **Line 605**: Prevents default jump behavior
- **Line 607**: Gets target section element
- **Line 609-610**: Calculates scroll position
  - Accounts for fixed navbar height
  - Ensures section isn't hidden behind navbar
- **Line 612-615**: Smooth scrolls to calculated position
  - `behavior: 'smooth'` enables smooth scrolling
  - Polyfill might be needed for older browsers

---

## Key JavaScript Concepts Used

### 1. DOM Manipulation

- **querySelector/querySelectorAll**: Selecting elements
- **classList**: Adding/removing CSS classes
- **setAttribute/getAttribute**: Managing attributes
- **style.setProperty**: Setting CSS custom properties

### 2. Event Listeners

- **click**: User clicks
- **scroll**: Page scrolling
- **input**: Real-time input changes
- **submit**: Form submission
- **mouseenter/mouseleave**: Hover interactions
- **keydown**: Keyboard input

### 3. Local Storage

- **localStorage.getItem()**: Retrieve saved data
- **localStorage.setItem()**: Save data persistently
- **Use case**: Theme preference across sessions

### 4. Intersection Observer API

- **Modern scroll detection**: More performant than scroll events
- **threshold**: When to trigger callback
- **rootMargin**: Offset from viewport edges
- **Use case**: Lazy animations when elements enter viewport

### 5. Regular Expressions

- **Email validation**: Pattern matching
- **Test method**: Returns boolean for match

### 6. String Methods

- **trim()**: Removes whitespace from ends
- **substring()**: Extracts portion of string
- **length**: Character count

### 7. Array Methods

- **forEach()**: Iterate over collections
- **Use case**: NodeLists from querySelectorAll

### 8. setTimeout

- **Delayed execution**: Creates typing animation loop
- **Recursive calls**: Function calls itself after delay

---

## Performance Considerations

### 1. Event Delegation

- Could be used for nav links instead of individual listeners
- Would reduce memory usage with many links

### 2. Throttling/Debouncing

- Scroll event could be throttled
- Currently fires on every scroll pixel

### 3. Intersection Observer

- Better than scroll events for animations
- Browser-optimized, won't block rendering

### 4. Early Returns

- `if (!element) return;` prevents unnecessary code execution
- Defensive programming prevents errors

---

## Browser Compatibility

### Modern APIs Used

- **Intersection Observer**: Not supported in IE11
- **CSS Custom Properties**: Via style.setProperty (IE11 incompatible)
- **Optional Chaining (?.)**: Very modern, requires transpilation for older browsers

### Polyfills Needed

- Intersection Observer polyfill for older browsers
- scrollTo behavior: 'smooth' polyfill

---

## Security Considerations

### XSS Prevention

- Form inputs should be sanitized server-side
- Currently only client-side validation
- Don't trust client data in production

### Content Security Policy

- External scripts (Font Awesome, Google Fonts) loaded via CDN
- Consider integrity hashes for security

---

## Future Enhancements

### Possible Additions

1. **Form Backend**: Connect to email service or database
2. **Loading States**: Show spinner during form submission
3. **More Animations**: Parallax scrolling, more complex effects
4. **Analytics**: Track user interactions
5. **Service Worker**: Offline functionality
6. **Lazy Loading**: Defer loading images until needed

---

## Debugging Tips

### Common Issues

1. **Theme not persisting**: Check localStorage is enabled
2. **Animations not firing**: Ensure Intersection Observer is supported
3. **Form not submitting**: Check browser console for errors
4. **Scroll position wrong**: Verify navbar height calculation

### Development Tools

- **Console.log**: Track variable values
- **Debugger**: Set breakpoints in browser DevTools
- **Network tab**: Monitor API requests (when backend added)

---

## File Size: 626 lines

- **Well-commented** for maintainability
- **Modular structure** with clear sections
- **Accessible** with keyboard support
- **Performant** with modern APIs
