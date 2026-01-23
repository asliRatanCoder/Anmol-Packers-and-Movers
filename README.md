# Anmol Packers and Movers - Website

Professional website for Anmol Packers and Movers, a registered transport company operating since 2011.

## 🚀 Features

- **Fully Responsive Design** - Works perfectly on all devices (desktop, tablet, mobile)
- **SEO Optimized** - Structured data, meta tags, and semantic HTML for better search rankings
- **Dynamic Features** - Interactive elements with smooth animations
- **WhatsApp Integration** - Floating button for instant customer contact
- **Contact Form** - With validation for lead generation
- **Gallery** - Filterable image gallery with lightbox
- **Service Pages** - Detailed information about all services
- **Fast Loading** - Optimized code and assets

## 📁 File Structure

```
Anmol Packers and Movers/
│
├── index.html              # Home page
├── about.html              # About us page
├── services.html           # Services page
├── gallery.html            # Gallery page
├── contact.html            # Contact & quote form page
├── README.md               # This file
│
├── css/
│   └── style.css           # Main stylesheet
│
├── js/
│   └── script.js           # Main JavaScript file
│
└── images/                 # Image directory (create this)
    ├── logo.png            # Company logo
    ├── favicon.ico         # Browser favicon
    ├── hero-bg.jpg         # Hero section background
    ├── page-header-bg.jpg  # Page headers background
    ├── about-us.jpg        # About section image
    ├── company-building.jpg # Company office image
    ├── household-shifting.jpg
    ├── office-relocation.jpg
    ├── vehicle-transport.jpg
    ├── packing-service.jpg
    ├── storage-warehouse.jpg
    ├── loading-unloading.jpg
    ├── testimonial-1.jpg
    ├── testimonial-2.jpg
    ├── testimonial-3.jpg
    ├── video-thumb-1.jpg
    ├── video-thumb-2.jpg
    ├── video-thumb-3.jpg
    └── gallery/            # Gallery images
        ├── packing-1.jpg to packing-4.jpg
        ├── loading-1.jpg to loading-4.jpg
        ├── truck-1.jpg to truck-4.jpg
        ├── team-1.jpg to team-3.jpg
        └── customer-1.jpg to customer-3.jpg
```

## 🛠️ Setup Instructions

### 1. Update Contact Information

**Important:** Replace placeholder contact details with your actual information:

In all HTML files, replace:

- `+91-9XXXXXXXXX` with your actual phone number
- `info@anmolpackersmovers.com` with your actual email
- Update the address in Delhi NCR with your specific location

**Files to update:**

- index.html
- about.html
- services.html
- gallery.html
- contact.html

### 2. Add Images

Create an `images` folder in the project root and add:

**Required Images:**

- `logo.png` - Your company logo (recommended size: 200x200px)
- `favicon.ico` - Website icon (16x16px or 32x32px)
- `hero-bg.jpg` - Hero section background (1920x1080px)
- Service images (800x600px each)
- Gallery images (600x400px each)
- Testimonial photos (circular, 200x200px)

**Where to get images:**

- Use your own company photos
- Free stock images: Unsplash.com, Pexels.com, Pixabay.com
- Search for: "moving truck", "packing boxes", "movers", "relocation"

### 3. WhatsApp Integration

Update WhatsApp number in:

- All HTML files: `href="https://wa.me/919XXXXXXXXX..."`
- Replace `919XXXXXXXXX` with your number (include country code, no + or spaces)
- Format: 91 (India code) + 10-digit mobile number

### 4. Google Maps

In contact.html, replace the Google Maps embed with your location:

1. Go to Google Maps
2. Search for your address
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Replace the existing iframe in contact.html

### 5. Social Media Links

Update social media links in the footer of all pages:

```html
<a href="https://facebook.com/yourpage" aria-label="Facebook">
  <a href="https://twitter.com/yourhandle" aria-label="Twitter">
    <a href="https://instagram.com/yourhandle" aria-label="Instagram">
      <a
        href="https://linkedin.com/company/yourcompany"
        aria-label="LinkedIn"
      ></a></a></a
></a>
```

## 🚀 Going Live

### Option 1: Using GitHub Pages (Free)

1. Create a GitHub repository
2. Upload all files
3. Go to Settings → Pages
4. Select main branch → Save
5. Your site will be live at `https://yourusername.github.io/repo-name`

### Option 2: Using Netlify (Free)

1. Sign up at Netlify.com
2. Drag and drop your project folder
3. Your site goes live instantly
4. Get a free subdomain or connect custom domain

### Option 3: Traditional Hosting

1. Purchase domain and hosting (GoDaddy, Hostinger, Bluehost, etc.)
2. Upload files via FTP or cPanel File Manager
3. Set index.html as the homepage

## 📱 Testing Checklist

Before going live, test:

- [ ] All links work correctly
- [ ] Contact form submits properly
- [ ] WhatsApp button opens chat
- [ ] Phone numbers are clickable on mobile
- [ ] Images load correctly
- [ ] Responsive design on mobile/tablet
- [ ] All pages load without errors
- [ ] Navigation menu works on mobile

## 🎨 Customization

### Colors

Edit `css/style.css` at the top:

```css
:root {
  --primary-color: #ff6b35; /* Orange - Change this */
  --secondary-color: #004e89; /* Blue - Change this */
}
```

### Fonts

Current font: Poppins
To change, update in `style.css`:

```css
@import url("https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap");
```

### Adding More Services

1. Open services.html
2. Copy a service-detail section
3. Paste and modify content
4. Update navigation links

## 📧 Contact Form Backend

The contact form currently shows a success message without sending emails. To actually receive form submissions:

### Option 1: Use Formspree (Easy)

1. Sign up at Formspree.io
2. Create a form
3. Get your form endpoint
4. Update form action in contact.html:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST"></form>
```

### Option 2: Use EmailJS (Free)

1. Sign up at EmailJS.com
2. Create email template
3. Add EmailJS script to contact.html
4. Update the JavaScript in script.js

### Option 3: Server-side Script

If you have PHP hosting:

1. Create `submit-form.php`
2. Add PHP mail() function
3. Update form action to `submit-form.php`

## 🔍 SEO Tips

1. **Update Title Tags:** Each page has unique titles - make them more specific to your services and location
2. **Meta Descriptions:** Already included - customize further for each page
3. **Schema Markup:** Already added for LocalBusiness - verify at schema.org
4. **Submit Sitemap:** Create sitemap.xml and submit to Google Search Console
5. **Local SEO:** Claim your Google My Business listing
6. **Content:** Add blog section for moving tips (increases SEO value)

## 📈 Analytics

Add Google Analytics:

1. Create account at analytics.google.com
2. Get tracking code
3. Add before `</head>` in all HTML files:

```html
<!-- Google Analytics -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "GA_MEASUREMENT_ID");
</script>
```

## 🔒 Security

- Keep software updated
- Use HTTPS (free with Let's Encrypt)
- Sanitize form inputs if using server-side processing
- Regular backups

## 📞 Support & Updates

For questions or issues:

- Check browser console for errors (F12)
- Validate HTML at validator.w3.org
- Test on multiple browsers (Chrome, Firefox, Safari, Edge)

## 📄 License

This website is created for Anmol Packers and Movers. All rights reserved.

---

**Built with ❤️ for Anmol Packers and Movers**

Last Updated: January 2026
