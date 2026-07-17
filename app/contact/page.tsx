'use client';

import { useState } from 'react';
import Hero from '@/components/Hero/Hero';
import styles from './page.module.css';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Format the message for WhatsApp
    const message = `*New Contact Request*

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Subject: ${data.subject}
Message: ${data.message}`;

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = '14037639365'; // Redstone Driving School Number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');

    setStatus('success');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      <Hero 
        title="Contact Us"
        subtitle="Have a question about our defensive driving curriculum? We're here to help. Reach out to us today."
        imageUrl="/training_car.png"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          
          <div className={styles.contactInfoRow}>
            <div className={styles.infoItem}>
              <h4>Call or Text Us</h4>
              <a href="tel:403-763-9365">403-763-9365</a>
            </div>
            <div className={styles.infoItem}>
              <h4>Email Us</h4>
              <a href="mailto:info@redstonedrivingschool.com">info@redstonedrivingschool.com</a>
            </div>
            <div className={styles.infoItem}>
              <h4>Service Area</h4>
              <div>Calgary, Airdrie, Chestermere, Cochrane</div>
            </div>
            <div className={styles.infoItem}>
              <h4>Hours of Operation</h4>
              <div>Mon - Sun: 8:00 AM - 8:00 PM</div>
            </div>
          </div>

          <div className={styles.formCard}>
            <form onSubmit={handleSubmit}>
              
              <h3 className={styles.sectionTitle}>Send Us a Message</h3>
              
              <div className={styles.row}>
                <div className={styles.col}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Full Name <span className={styles.required}>*</span></label>
                    <input id="name" type="text" name="name" required />
                  </div>
                </div>
                <div className={styles.col}>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email Address <span className={styles.required}>*</span></label>
                    <input id="email" type="email" name="email" required />
                  </div>
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.col}>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone Number</label>
                    <input id="phone" type="tel" name="phone" />
                  </div>
                </div>
                <div className={styles.col}>
                  <div className={styles.formGroup}>
                    <label htmlFor="subject">Subject</label>
                    <input id="subject" type="text" name="subject" />
                  </div>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message <span className={styles.required}>*</span></label>
                    <textarea id="message" name="message" rows={5} required></textarea>
              </div>

              <button type="submit" className={`btn-primary ${styles.submitBtn}`} disabled={status === 'loading'} style={{ backgroundColor: '#E4203C', color: 'white' }}>
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <div className={`${styles.formMessage} ${styles.success}`}>
                  Thank you! Your message has been sent. We will get back to you shortly.
                </div>
              )}
              {status === 'error' && (
                <div className={`${styles.formMessage} ${styles.error}`}>
                  Oops! Something went wrong. Please try calling or texting us instead.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
