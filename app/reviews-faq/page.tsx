import Hero from '@/components/Hero/Hero';
import FaqAccordion from '@/components/FaqAccordion/FaqAccordion';
import styles from './page.module.css';
import { Metadata } from 'next';
const faqItems = [
  {
    question: "What areas do you serve?",
    answer: "We proudly serve Calgary, Airdrie, Chestermere, and Cochrane."
  },
  {
    question: "Is pick-up and drop-off included?",
    answer: "Yes! We offer free pick-up and drop-off from your home, school, or workplace within our service areas at no extra cost."
  },
  {
    question: "What vehicle do you use for lessons?",
    answer: "All lessons are conducted in a clean, modern, and fully insured 2024 Toyota Corolla (Automatic). The car is equipped with dual brakes for your maximum safety."
  },
  {
    question: "Are students insured during the lessons?",
    answer: "Yes, absolutely. Students are fully insured under our commercial driving school policy while participating in any in-car lessons."
  },
  {
    question: "What languages does the instructor speak?",
    answer: "Our instructor is fluent and provides comfortable instruction in English, Punjabi, and Hindi."
  },
  {
    question: "What is your cancellation policy?",
    answer: "We require a full 24 hours' notice for any lesson cancellations or rescheduling to avoid a cancellation fee."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept E-transfer and Cash payments."
  },
  {
    question: "How do I book a lesson?",
    answer: <>It's easy! You can <a href="tel:403-763-9365">Call or Text us at 403-763-9365</a>, email us at <a href="mailto:infor@redstonedrivingschool.com">infor@redstonedrivingschool.com</a>, or use the form on our <a href="/contact">Contact Page</a>.</>
  }
];

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
        imageUrl="/hero_slide_3.png"
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
          <FaqAccordion items={faqItems} />
        </div>
      </section>
    </>
  );
}
