'use client';

import { useState, useEffect } from 'react';
import { Send, Mail } from 'lucide-react';


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
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{name?: string, email?: string, message?: string}>({});


  const validateForm = () => {
    const newErrors: {name?: string, email?: string, message?: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = language === 'sr' ? 'Ime je obavezno' : 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = language === 'sr' ? 'Ime mora imati minimum 2 karaktera' : 'Name must be at least 2 characters';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = language === 'sr' ? 'Email je obavezan' : 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = language === 'sr' ? 'Email format nije valjan' : 'Email format is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = language === 'sr' ? 'Poruka je obavezna' : 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = language === 'sr' ? 'Poruka mora imati minimum 10 karaktera' : 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setErrors({});
    
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('form-name', 'contact-us');
      formDataToSend.append('name', formData.name.trim());
      formDataToSend.append('email', formData.email.trim());
      formDataToSend.append('message', formData.message.trim());
      
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataToSend as any).toString()
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
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
            name="contact-us"
            method="POST" 
            data-netlify="true"
            netlify-honeypot="bot-field"
            noValidate
            onSubmit={handleFormSubmit} 
            className="space-y-6"
          >
            <input 
              type="hidden" 
              name="form-name" 
              value="contact-us" 
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder={t.contact.form.name}
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({...formData, name: e.target.value});
                    if (errors.name) setErrors({...errors, name: undefined});
                  }}
                  className={`w-full px-4 py-3 bg-slate-900/50 border rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-brand-primary/20 transition-all duration-300 ${
                    errors.name 
                      ? 'border-red-500 focus:border-red-500' 
                      : 'border-slate-600 focus:border-brand-primary'
                  }`}
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder={t.contact.form.email}
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({...formData, email: e.target.value});
                    if (errors.email) setErrors({...errors, email: undefined});
                  }}
                  className={`w-full px-4 py-3 bg-slate-900/50 border rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-brand-primary/20 transition-all duration-300 ${
                    errors.email 
                      ? 'border-red-500 focus:border-red-500' 
                      : 'border-slate-600 focus:border-brand-primary'
                  }`}
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </div>
            </div>
            <div className="relative">
              <textarea
                name="message"
                placeholder={t.contact.form.message}
                value={formData.message}
                onChange={(e) => {
                  setFormData({...formData, message: e.target.value});
                  if (errors.message) setErrors({...errors, message: undefined});
                }}
                rows={6}
                className={`w-full px-4 py-3 bg-slate-900/50 border rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-brand-primary/20 transition-all duration-300 ${
                  errors.message 
                    ? 'border-red-500 focus:border-red-500' 
                    : 'border-slate-600 focus:border-brand-primary'
                }`}
              />
              {errors.message && (
                <p className="text-red-400 text-sm mt-1">{errors.message}</p>
              )}
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
