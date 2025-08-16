# ReaSoft Website - Professional Automation Software Company

A modern, responsive website for ReaSoft - a software automation company that specializes in web applications, websites, and desktop applications to automate boring tasks.

## 🚀 Features

- **Modern Dark Design**: Professional dark mode with pastel accents for better user experience
- **Bilingual Support**: Serbian (primary) and English language toggle
- **Smooth Animations**: Framer Motion animations for engaging user interactions
- **Contact Form**: Functional contact form with email integration
- **SEO Optimized**: Perfect SEO with structured data, sitemap, and meta tags
- **Mobile Responsive**: Fully responsive design for all devices
- **Fast Performance**: Optimized for speed and Core Web Vitals

## 🛠 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Language Toggle**: Built-in Serbian/English switching
- **Email**: Contact form ready for integration
- **Icons**: Lucide React

## 🏗 Project Structure

```
├── app/
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Main page with all content
│   └── globals.css       # Global styles
├── public/               # Static assets
│   └── robots.txt        # SEO robots file
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── package.json          # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd reasoft
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open in browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📧 Email Configuration

The contact form is currently set up with form validation and a simulation. To connect it to a real email service:

1. **Choose an email service** (EmailJS, Formspree, Netlify Forms, etc.)
2. **Update the handleFormSubmit function** in `app/page.tsx`
3. **Replace the simulation** with your chosen service's API calls

## 🌐 Deployment to Netlify

### Method 1: Git Integration (Recommended)

1. **Push to Git repository** (GitHub, GitLab, or Bitbucket)
2. **Connect to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your repository
3. **Configure build settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. **Add environment variables** (if needed)
5. **Deploy**

### Method 2: Manual Deploy

1. **Build the project**
```bash
npm run build
npm run export  # If using static export
```

2. **Upload to Netlify**:
   - Drag and drop the `out` folder to Netlify dashboard

### Domain Configuration

1. **Add custom domain**: `reasoft.rs`
2. **Configure DNS**: Point your domain to Netlify
3. **Enable HTTPS**: Automatic with Netlify

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to modify the pastel color palette:
```javascript
colors: {
  pastel: {
    blue: '#a7c7e7',
    green: '#b8e6b8', 
    purple: '#d4b5f0',
    pink: '#f7c3d0',
    yellow: '#fff2a7',
  }
}
```

### Content
Edit the content object in `app/page.tsx`:
- `content.sr` - Serbian content
- `content.en` - English content

### Single Page Structure
All components are in `app/page.tsx` for easy customization.

## 📊 SEO Features

- ✅ Structured Data (JSON-LD)
- ✅ OpenGraph tags
- ✅ Twitter Cards  
- ✅ Multilingual sitemaps
- ✅ Robots.txt
- ✅ Canonical URLs
- ✅ Meta descriptions
- ✅ Alt tags for images

## 🔧 Scripts

```bash
npm run dev          # Development server
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 📱 Responsive Breakpoints

- Mobile: 320px - 768px
- Tablet: 768px - 1024px  
- Desktop: 1024px+

## 🎯 Performance Optimizations

- Image optimization with Next.js
- Font optimization (Inter)
- Code splitting
- Lazy loading
- Compressed assets
- Minimal JavaScript bundle

## 🛡 Security Features

- HTTPS enforced
- XSS protection
- CSRF protection
- Secure headers
- Content Security Policy ready

## 📞 Contact Information

- **Email**: info@reasoft.rs
- **Website**: https://reasoft.rs
- **Company**: ReaSoft

## 📄 License

All rights reserved - ReaSoft 2025

---

**Built with ❤️ by ReaSoft** - We automate your boring work!
