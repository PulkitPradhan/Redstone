import Hero from '@/components/Hero/Hero';
import Link from 'next/link';
import styles from './page.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Courses & Pricing | Redstone Driving School',
  description: 'Affordable driving lessons in Calgary. Beginner, Defensive, Highway, and Winter driving courses.',
};

export default function Courses() {
  return (
    <>
      <Hero 
        title="Courses & Pricing"
        subtitle="Affordable, high-quality instruction. We are proud to offer rates $100 less per course than comparable Calgary driving schools."
        ctaText="Book a Lesson"
        ctaLink="/contact"
      />

      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className="section-header">
            <h2>Our Driving Programs</h2>
          </div>
          
          <div className={styles.courseList}>
            <div id="beginner" className={styles.courseItem}>
              <h3>Beginner Lessons</h3>
              <p>Ground-up instruction for new drivers. We cover all the basics, including vehicle control, rules of the road, and safe driving habits to ensure you start your driving journey with confidence.</p>
            </div>
            
            <div id="defensive" className={styles.courseItem}>
              <h3>Defensive Driving</h3>
              <p>Learn advanced hazard awareness and safe-driving techniques. This course focuses on anticipating dangerous situations and reacting safely to prevent accidents.</p>
            </div>
            
            <div id="highway" className={styles.courseItem}>
              <h3>Highway Driving</h3>
              <p>Build confidence for highway speeds and merging. We will practice entering and exiting highways safely, maintaining speed, and changing lanes in high-speed traffic.</p>
            </div>
            
            <div id="winter" className={styles.courseItem}>
              <h3>Winter Driving</h3>
              <p>Alberta-specific snow and ice handling. Master the skills needed to navigate slippery roads, recover from skids, and drive safely during our harsh winters.</p>
            </div>
            
            <div id="refresher" className={styles.courseItem}>
              <h3>Brush-Up / Refresher Classes</h3>
              <p>For licensed drivers or those who already have some experience but need a confidence reset before their road test or after a break from driving.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className="section-header">
            <h2>Pricing Packages</h2>
          </div>
          
          <div className={styles.pricingGrid}>
            <div className={styles.priceCard}>
              <h3>Single Lesson</h3>
              <div className={styles.price}>$TBD<span>/hr</span></div>
              <ul className={styles.priceFeatures}>
                <li>1 Hour In-Car Instruction</li>
                <li>Free Pick-up & Drop-off</li>
                <li>Targeted Skill Practice</li>
                <li>Flexible Scheduling</li>
              </ul>
              <Link href="/contact" className="btn-primary">Book Now</Link>
            </div>

            <div className={styles.priceCard}>
              <h3>5-Lesson Package</h3>
              <div className={styles.price}>$TBD<span>/pkg</span></div>
              <ul className={styles.priceFeatures}>
                <li>5 Hours In-Car Instruction</li>
                <li>Free Pick-up & Drop-off</li>
                <li>City & Highway Basics</li>
                <li>Progress Tracking</li>
              </ul>
              <Link href="/contact" className="btn-primary">Book Now</Link>
            </div>

            <div className={styles.priceCard}>
              <h3>10-Lesson Package</h3>
              <div className={styles.price}>$TBD<span>/pkg</span></div>
              <ul className={styles.priceFeatures}>
                <li>10 Hours In-Car Instruction</li>
                <li>Free Pick-up & Drop-off</li>
                <li>Comprehensive Road Test Prep</li>
                <li>Mock Road Test Included</li>
              </ul>
              <Link href="/contact" className="btn-primary">Book Now</Link>
            </div>

            <div className={styles.priceCard} style={{border: '2px solid var(--color-primary)'}}>
              <div className={styles.popularBadge}>Most Popular</div>
              <h3>Full Course Bundle</h3>
              <div className={styles.price}>$TBD<span>/pkg</span></div>
              <ul className={styles.priceFeatures}>
                <li>In-Class & In-Car Instruction</li>
                <li>Insurance Reduction Certificate</li>
                <li>Free Pick-up & Drop-off</li>
                <li>Maximum Insurance Discount</li>
              </ul>
              <Link href="/contact" className="btn-primary">Book Now</Link>
            </div>
          </div>

          <div className={styles.policyNote}>
            <p><strong>Free pick-up and drop-off included at no extra cost</strong> within our service areas.</p>
            <p>Please note: A 24-hour cancellation notice is required for all lessons.</p>
            <p style={{marginTop: '1rem', color: 'var(--color-accent)'}}>All lessons are conducted in a 2024 Toyota Corolla (Automatic) equipped with dual brakes.</p>
          </div>
        </div>
      </section>
    </>
  );
}
