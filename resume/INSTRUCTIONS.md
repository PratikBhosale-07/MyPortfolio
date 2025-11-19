# 📄 Resume Instructions

## How to Add Your Resume

1. **Prepare Your Resume PDF**

   - Export your resume as a PDF file
   - Recommended name: `Pratik_Bhosale_Resume.pdf`
   - Keep file size under 2MB for faster loading

2. **Add to Project**

   - Copy your resume PDF file
   - Paste it into the `resume/` folder
   - Path should be: `resume/Pratik_Bhosale_Resume.pdf`

3. **Verify Link**
   - The download link is already set in `index.html` (line 78)
   - If you use a different filename, update the href in HTML:
   ```html
   <a href="resume/YOUR_FILENAME.pdf" download class="btn btn-primary"></a>
   ```

## Resume Tips for E&TC Students

### What to Include

- ✅ Contact Information (Email, Phone, LinkedIn, GitHub)
- ✅ Education (MIT Academy of Engineering, CGPA/Percentage)
- ✅ Technical Skills (Programming, Tools, Technologies)
- ✅ Projects (Same as portfolio - with brief descriptions)
- ✅ Internships/Work Experience (if any)
- ✅ Achievements & Certifications
- ✅ Extra-curricular Activities

### Formatting Tips

- Keep it to 1-2 pages maximum
- Use clear section headings
- Use bullet points for easy scanning
- Include quantifiable achievements
- Professional font (Arial, Calibri, Times New Roman)
- PDF format only (not Word doc)

### Tools to Create Resume

- **Overleaf** (LaTeX - Professional templates)
- **Canva** (Modern designs - Free)
- **Google Docs/Microsoft Word** (Simple and quick)
- **Resume.io** (Online builder)
- **Novoresume** (ATS-friendly templates)

## Alternative: No Resume Yet?

If you don't have a resume ready, you can:

1. **Option 1**: Hide the button temporarily

   - Comment out lines 76-78 in `index.html`

2. **Option 2**: Change to "View Resume" that opens in new tab

   ```html
   <a href="#" target="_blank" class="btn btn-primary">
     <i class="fas fa-file-alt"></i> View Resume (Coming Soon)
   </a>
   ```

3. **Option 3**: Link to LinkedIn profile instead
   ```html
   <a
     href="https://linkedin.com/in/yourprofile"
     target="_blank"
     class="btn btn-primary"
   >
     <i class="fab fa-linkedin"></i> View LinkedIn Profile
   </a>
   ```

---

📝 **Note**: Having a well-formatted resume is crucial for placements and internships!
