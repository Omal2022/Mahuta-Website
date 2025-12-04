import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';
import { CONTACT_INFO } from '../data/constants';
import { ContactFormData } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    serviceInterest: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      serviceInterest: ''
    });
    setIsSubmitting(false);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600" 
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-4">
              Get in <span className="text-gold">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Let's discuss how we can power your success in the oil and gas sector
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            { icon: MapPin, title: 'Visit Us', info: CONTACT_INFO.address },
            { icon: Phone, title: 'Call Us', info: CONTACT_INFO.phone },
            { icon: Mail, title: 'Email Us', info: CONTACT_INFO.email },
            { icon: Clock, title: 'Working Hours', info: CONTACT_INFO.workingHours }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border-2 border-gray-200 p-8 text-center hover:border-gold transition-all group"
            >
              <div className="w-16 h-16 bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-all">
                <item.icon className="text-gold" size={28} />
              </div>
              <h3 className="text-lg font-heading font-semibold text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.info}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact Form */}
      <Section title="Send Us a Message" subtitle="We're Here to Help" dark>
        <div className="max-w-4xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="bg-slate-800 p-10 border border-gold/20"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-300 font-heading text-sm mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-gray-700 text-white focus:border-gold focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-gray-300 font-heading text-sm mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-gray-700 text-white focus:border-gold focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-300 font-heading text-sm mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-900 border border-gray-700 text-white focus:border-gold focus:outline-none transition-colors"
                  placeholder="+234 XXX XXX XXXX"
                />
              </div>
              <div>
                <label className="block text-gray-300 font-heading text-sm mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-900 border border-gray-700 text-white focus:border-gold focus:outline-none transition-colors"
                  placeholder="Your Company"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-300 font-heading text-sm mb-2">
                Service Interest
              </label>
              <select
                name="serviceInterest"
                value={formData.serviceInterest}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-900 border border-gray-700 text-white focus:border-gold focus:outline-none transition-colors"
              >
                <option value="">Select a service</option>
                <option value="exploration">Exploration & Production</option>
                <option value="refining">Refining Operations</option>
                <option value="distribution">Distribution & Logistics</option>
                <option value="petrochemicals">Petrochemical Solutions</option>
                <option value="engineering">Engineering Services</option>
                <option value="hse">HSE Management</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-gray-300 font-heading text-sm mb-2">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-slate-900 border border-gray-700 text-white focus:border-gold focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your requirements..."
              ></textarea>
            </div>

            <Button 
              type="submit" 
              variant="primary" 
              size="lg" 
              disabled={isSubmitting}
              className="w-full md:w-auto"
            >
              {isSubmitting ? 'Sending...' : (
                <>
                  Send Message <Send className="ml-2" size={18} />
                </>
              )}
            </Button>
          </motion.form>
        </div>
      </Section>

      {/* Map Section */}
      <section className="h-[500px] bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.9999999999995!2d7.4970!3d9.0574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDMnMjYuNiJOIDfCsDI5JzQ5LjIiRQ!5e0!3m2!1sen!2sng!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Mahuta Oil & Gas Location"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
