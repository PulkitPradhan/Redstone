import Hero from '@/components/Hero/Hero';
import FaqAccordion from '@/components/FaqAccordion/FaqAccordion';
import styles from './page.module.css';
import { Metadata } from 'next';
import Link from 'next/link';
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
    question: "Do you teach Defensive Driving?",
    answer: "Yes. Defensive driving is a core pillar of our curriculum. Every lesson emphasizes hazard perception, proactive maneuvering, and defensive techniques to ensure you learn how to survive on the road safely."
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
    answer: "We require a full 24 hours&apos; notice for any lesson cancellations or rescheduling to avoid a cancellation fee."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept E-transfer and Cash payments."
  },
  {
    question: "How do I book a lesson?",
    answer: <>It&apos;s easy! You can <a href="tel:403-763-9365">Call or Text us at 403-763-9365</a>, email us at <a href="mailto:info@redstonedrivingschool.com">info@redstonedrivingschool.com</a>, or use the form on our <Link href="/contact">Contact Page</Link>.</>
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
            {[
              { text: "I enjoyed and benefited from my time with Redstone Driving School's online courses, and I would recommend them to anyone who is looking to increase their knowledge before getting behind the wheel. The modules were clear, flexible, and easy to work with. Before taking the Basic course, I had driven only a handful of times and was anxious. After the online lessons, I was much more confident.", author: "Veronica Moreau" },
              { text: "From the moment I registered for their online program till I completed the course, it was a smooth experience. I took their basic insurance reduction program online. The content is very knowledgeable and has amazing coaching elements. It focuses on areas which need improvement. Highly recommended!", author: "Sundaraj Lakshmipathy" },
              { text: "Five stars definitely not adequate to give Redstone their due! Great experience; the online portal had me feeling comfortable and relaxed. I knew that I would do well on my written test because I felt well-prepared. The course gave many bits of information and advice which are not in the standard learner's manual. I highly recommend Redstone - it's a first class online driving school.", author: "Phillip Noel" }
            ].map((testi, i) => (
              <div key={testi.author} className={styles.testiCard}>
                <div className={styles.quoteIcon}>&quot;</div>
                <p className={styles.testiText}>{testi.text}</p>
                <div className={styles.testiAuthor}>- {testi.author}</div>
              </div>
            ))}
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
