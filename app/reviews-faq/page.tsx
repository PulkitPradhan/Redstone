import Hero from '@/components/Hero/Hero';
import styles from './page.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reviews & FAQ | Redstone Driving School',
  description: 'Read testimonials from our students and find answers to frequently asked questions about driving lessons in Calgary.',
};

export default function ReviewsFaq() {
  return (
    <>
      <Hero 
        title="Reviews & FAQ"
        subtitle="See what our successful students have to say, and find answers to your common questions."
      />

      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className="section-header">
            <h2>Student Testimonials</h2>
          </div>
          
          <div className={styles.testiGrid}>
            <div className={styles.testiCard}>
              <div className={styles.quoteIcon}>"</div>
              <p className={styles.testiText}>
                [Placeholder for Testimonial 1. "Sunny was so patient and helped me pass on my first try!"]
              </p>
              <div className={styles.testiAuthor}>- Student Name</div>
            </div>
            <div className={styles.testiCard}>
              <div className={styles.quoteIcon}>"</div>
              <p className={styles.testiText}>
                [Placeholder for Testimonial 2. "Great instructor, very calm, and the free pick-up was so convenient."]
              </p>
              <div className={styles.testiAuthor}>- Student Name</div>
            </div>
            <div className={styles.testiCard}>
              <div className={styles.quoteIcon}>"</div>
              <p className={styles.testiText}>
                [Placeholder for Testimonial 3. "I felt totally prepared for my road test. Highly recommend Redstone!"]
              </p>
              <div className={styles.testiAuthor}>- Student Name</div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
          </div>
          
          <div className={styles.faqList}>
            <details className={styles.faqItem}>
              <summary>What areas do you serve?</summary>
              <div className={styles.faqAnswer}>
                We proudly serve Calgary, Airdrie, Chestermere, and Cochrane.
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary>Is pick-up and drop-off included?</summary>
              <div className={styles.faqAnswer}>
                Yes! We offer free pick-up and drop-off from your home, school, or workplace within our service areas at no extra cost.
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary>What vehicle do you use for lessons?</summary>
              <div className={styles.faqAnswer}>
                All lessons are conducted in a clean, modern, and fully insured 2024 Toyota Corolla (Automatic). The car is equipped with dual brakes for your maximum safety.
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary>Are students insured during the lessons?</summary>
              <div className={styles.faqAnswer}>
                Yes, absolutely. Students are fully insured under our commercial driving school policy while participating in any in-car lessons.
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary>What languages does the instructor speak?</summary>
              <div className={styles.faqAnswer}>
                Our instructor is fluent and provides comfortable instruction in English, Punjabi, and Hindi.
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary>What is your cancellation policy?</summary>
              <div className={styles.faqAnswer}>
                We require a full 24 hours' notice for any lesson cancellations or rescheduling to avoid a cancellation fee.
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary>What payment methods do you accept?</summary>
              <div className={styles.faqAnswer}>
                We accept E-transfer and Cash payments.
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary>How do I book a lesson?</summary>
              <div className={styles.faqAnswer}>
                It's easy! You can <a href="tel:403-763-9365">Call or Text us at 403-763-9365</a>, email us at <a href="mailto:infor@redstonedrivingschool.com">infor@redstonedrivingschool.com</a>, or use the form on our <a href="/contact">Contact Page</a>.
              </div>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}
