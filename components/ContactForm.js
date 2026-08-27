"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const errs = {};
    if (!form.firstName.trim()) errs.firstName = "First name is required.";
    if (!form.email.trim()) {
      errs.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }
    if (!form.phone.trim()) errs.phone = "Phone number is required.";
    if (!form.message.trim()) errs.message = "Please share a brief message.";
    return errs;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    
    const whatsappText = `*New Inquiry from Apeak Website*

*Name:* ${form.firstName} ${form.lastName}
*Email:* ${form.email}
*Phone:* ${form.phone || 'N/A'}
*Subject:* ${form.subject}

*Message:*
${form.message}`;
    
    // Make sure to replace this with your actual business WhatsApp number (with country code, no +)
    const whatsappNumber = "918160639139"; 
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;
    
    if (typeof window !== "undefined") {
      // Create a temporary link to open in new tab (bypasses some strict popup blockers)
      const link = document.createElement('a');
      link.href = whatsappUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "General Inquiry",
        message: "",
      });
    }, 800);
  }

  return (
    <div className="contact-page-container">
      {/* Contact Hero Header */}
      <section className="contact-hero">
        <motion.div
          className="container contact-hero-inner"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="eyebrow-pill">Direct Conversation</span>
          <h1 className="contact-title">Let's create something meaningful.</h1>
          <p className="contact-subtitle">
            Whether you have a product question, wholesale inquiry, packaging recommendation, or custom press-on request — we're here to help with personal attention.
          </p>
        </motion.div>
      </section>

      {/* Main Grid: Details + Form */}
      <div className="container contact-content-grid">
        {/* Left Column: Direct Info */}
        <motion.div
          className="contact-info-panel"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="info-card">
            <div className="info-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div>
              <h3>Email Assistance</h3>
              <p>For order queries, product specs & feedback</p>
              <a href="mailto:apeak1901@gmail.com" className="info-link">
                apeak1901@gmail.com →
              </a>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div>
              <h3>Customer Support Hours</h3>
              <p>Monday – Friday: 9:00 AM – 6:00 PM EST</p>
              <span className="info-badge">Typical response within 2-4 hours</span>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div>
              <h3>Design Studio & Warehouse</h3>
              <p>Curated & inspected locally with care before dispatch.</p>
            </div>
          </div>

          {/* Editorial Visual Showcase Card */}
          <div className="contact-brand-card">
            <div className="brand-card-overlay" />
            <div className="brand-card-content">
              <span className="brand-card-tag">Apeak Promise</span>
              <h4>Genuine Products. Zero Fluff.</h4>
              <p>
                Every piece in our catalog is hand-inspected for finish, durability, and daily utility.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Premium Form */}
        <motion.div
          className="contact-form-panel"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                className="contact-success-state"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="success-icon">✓</div>
                <h2>Message Sent Successfully</h2>
                <p>
                  Thank you for reaching out to Apeak. We've received your note and our team will get back to you shortly.
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form key="form" onSubmit={handleSubmit} noValidate className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="e.g. Sarah"
                      value={form.firstName}
                      onChange={handleChange}
                    />
                    {errors.firstName && <span className="form-error">{errors.firstName}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="e.g. Jenkins"
                      value={form.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="sarah@example.com"
                      value={form.email}
                      onChange={handleChange}
                    />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 xxxxx xxxxx"
                      value={form.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && <span className="form-error">{errors.phone}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Topic / Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                  >
                    <option value="General Inquiry">General Product Inquiry</option>
                    <option value="Order Status">Order & Shipping Question</option>
                    <option value="Press-On Nail Sizing">Press-On Nail Sizing & Fitting</option>
                    <option value="Bulk/Wholesale">Bulk or Wholesale Interest</option>
                    <option value="Feedback">Product Suggestion & Feedback</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us what you're looking for or how we can assist you..."
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                  />
                  {errors.message && <span className="form-error">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  className={`btn btn-primary submit-btn ${isSubmitting ? "is-loading" : ""}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <span>Submit Message</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
