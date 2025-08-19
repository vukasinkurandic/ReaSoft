'use client';

import { useState } from 'react';
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

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate email sending
    await new Promise(resolve => setTimeout(resolve, 2000));
    setSubmitStatus('success');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
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
          <form onSubmit={handleFormSubmit} className="space-y-6" data-netlify="true" name="contact">
            <input type="hidden" name="form-name" value="contact" />
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
            <textarea
              name="message"
              placeholder={t.contact.form.message}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
              rows={6}
              className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all duration-300"
            />
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
