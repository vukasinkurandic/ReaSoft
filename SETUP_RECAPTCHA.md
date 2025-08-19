# reCAPTCHA Setup Instructions

## 1. Create Google reCAPTCHA Keys

1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin/create)
2. Create a new site with these settings:
   - **Label**: ReaSoft Website
   - **reCAPTCHA type**: reCAPTCHA v3
   - **Domains**: 
     - `reasoft.rs` (your production domain)
     - `localhost` (for development)
     - `*.netlify.app` (if using Netlify preview URLs)

## 2. Configure Environment Variables

1. Copy `.env.local.example` to `.env.local`
2. Add your reCAPTCHA keys:
   ```
   NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key_here
   RECAPTCHA_SECRET_KEY=your_secret_key_here
   ```

## 3. Netlify Configuration

Add environment variables in Netlify dashboard:
- Go to Site Settings → Environment Variables
- Add both keys with the same names

## 4. Server-side Verification (Optional)

For additional security, you can verify reCAPTCHA tokens server-side using Netlify Functions or API routes. The secret key should only be used server-side.

## 5. Testing

- Development: Form will work without reCAPTCHA if keys are not set
- Production: reCAPTCHA will be enforced when keys are properly configured

## Security Features Implemented

- ✅ Netlify Forms integration
- ✅ reCAPTCHA v3 (invisible)
- ✅ Honeypot field (bot detection)
- ✅ Client-side validation
- ✅ Error handling