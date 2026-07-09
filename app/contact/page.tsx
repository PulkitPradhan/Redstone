'use client';

import { useState } from 'react';
import Hero from '@/components/Hero/Hero';
import styles from './page.module.css';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <>
      <Hero 
        title="Contact / Book Now"
        subtitle="Ready to start driving? Get in touch with us today to book your first lesson or ask any questions."
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <h2>Get In Touch</h2>
              <p>We are available every day to help you get on the road safely. Call, text, or use the form to reach out.</p>
              
              <div className={styles.infoItem}>
                <h4>Call or Text Us</h4>
                <a href="tel:403-763-9365">403-763-9365</a>
              </div>

              <div className={styles.infoItem}>
                <h4>Email Us</h4>
                <a href="mailto:infor@redstonedrivingschool.com">infor@redstonedrivingschool.com</a>
              </div>

              <div className={styles.infoItem}>
                <h4>Service Area</h4>
                <div style={{color: '#fff'}}>Calgary, Airdrie, Chestermere, Cochrane</div>
              </div>

              <div className={styles.infoItem}>
                <h4>Payment Methods</h4>
                <div style={{color: '#fff'}}>E-transfer, Cash</div>
              </div>
            </div>

            <div className={styles.contactFormWrapper}>
              <h2>Book a Lesson</h2>
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name *</label>
                  <input type="text" id="name" name="name" required />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone Number *</label>
                  <input type="tel" id="phone" name="phone" required />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address *</label>
                  <input type="email" id="email" name="email" required />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="course">Preferred Course *</label>
                  <select id="course" name="course" required>
                    <option value="">-- Select a Course --</option>
                    <option value="Beginner Lessons">Beginner Lessons</option>
                    <option value="Defensive Driving">Defensive Driving</option>
                    <option value="Highway Driving">Highway Driving</option>
                    <option value="Winter Driving">Winter Driving</option>
                    <option value="Refresher Classes">Brush-Up / Refresher</option>
                    <option value="Full Package">Full Course Bundle (In-Class & In-Car)</option>
                    <option value="Unsure / Other">Unsure / Need Advice</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Additional Details / Questions</label>
                  <textarea id="message" name="message" rows={4} placeholder="Let us know your availability or any specific goals..."></textarea>
                </div>

                <button type="submit" className={`btn-primary ${styles.submitBtn}`} disabled={status === 'loading'}>
                  {status === 'loading' ? 'Sending...' : 'Send Request'}
                </button>

                {status === 'success' && (
                  <div className={`${styles.formMessage} ${styles.success}`}>
                    Thank you! Your request has been sent. We will contact you shortly.
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
        </div>
      </section>
    </>
  );
}
