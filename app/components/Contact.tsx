'use client';

import { useState, useEffect } from 'react';
import { Send, Mail } from 'lucide-react';

declare global {
  interface Window {
    grecaptcha: any;
  }
}

interface ContactProps {
  t: {
    contact: {
      title: string;
      subtitle: string;
      form: {
        name: string;
        email: string;
        message: string;
        submit: string;
        success: string;
        error: string;
      };
    };
  };
  language: 'sr' | 'en';
}

export default function Contact({ t, language }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    'bot-field': ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

  // Load reCAPTCHA script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js?render=' + process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    script.onload = () => {
      setRecaptchaLoaded(true);
      // Hide reCAPTCHA badge
      const style = document.createElement('style');
      style.innerHTML = `
        .grecaptcha-badge { 
          visibility: hidden !important;
        }
        .rc-anchor-logo-img,
        .rc-anchor-logo-img-large {
          display: none !important;
        }
      `;
      document.head.appendChild(style);
    };
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check honeypot
    if (formData['bot-field']) {
      return; // Bot detected, silently ignore
    }
    
    setIsSubmitting(true);
    
    try {
      let recaptchaToken = '';
      
      // Temporarily disable reCAPTCHA for testing
      console.log('Testing without reCAPTCHA');
      
      // Create form data for Netlify
      const formDataToSend = new FormData();
      formDataToSend.append('form-name', 'contact');
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('message', formData.message);
      
      console.log('Submitting form to Netlify...');
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataToSend as any).toString()
      });
      
      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);
      
      if (response.ok) {
        console.log('Form submitted successfully');
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '', 'bot-field': '' });
      } else {
        const responseText = await response.text();
        console.error('Form submission failed:', response.status, response.statusText, responseText);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const sectionId = language === 'sr' ? 'kontakt' : 'contact';

  return (
    <section id={sectionId} className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-brand-accent to-brand-highlight bg-clip-text text-transparent">
              {t.contact.title}
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto px-4">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="max-w-2xl mx-auto px-4">
          <form 
            name="contact"
            method="POST" 
            data-netlify="true"
            data-netlify-recaptcha="false"
            onSubmit={handleFormSubmit} 
            className="space-y-6"
          >
            {/* Honeypot field - hidden from users but visible to bots */}
            <input 
              type="hidden" 
              name="form-name" 
              value="contact" 
            />
            <div style={{ display: 'none' }}>
              <label>
                Don't fill this out if you're human: 
                <input 
                  name="bot-field" 
                  value={formData['bot-field']}
                  onChange={(e) => setFormData({...formData, 'bot-field': e.target.value})}
                />
              </label>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <input
                type="text"
                name="name"
                placeholder={t.contact.form.name}
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all duration-300"
              />
              <input
                type="email"
                name="email"
                placeholder={t.contact.form.email}
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all duration-300"
              />
            </div>
            <div className="relative">
              <textarea
                name="message"
                placeholder={t.contact.form.message}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
                rows={6}
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all duration-300"
              />
              {/* reCAPTCHA badge positioning */}
              <div className="absolute bottom-2 right-2 text-xs text-slate-400 flex items-center space-x-1">
                <span>Protected by</span>
                <span className="text-brand-primary font-medium">reCAPTCHA</span>
              </div>
            </div>
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-highlight text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 flex items-center space-x-2 mx-auto shadow-lg hover:shadow-2xl"
              >
                <Send className="w-5 h-5" />
                <span>{t.contact.form.submit}</span>
              </button>
            </div>
            {submitStatus === 'success' && (
              <div className="text-center text-green-400">
                {t.contact.form.success}
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="text-center text-red-400">
                {t.contact.form.error}
              </div>
            )}
          </form>

          <div className="mt-8 text-center">
            <div className="flex items-center justify-center space-x-2 text-slate-300">
              <Mail className="w-5 h-5 text-brand-primary" />
              <span>info@reasoft.rs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
