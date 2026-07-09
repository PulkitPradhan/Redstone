import Link from 'next/link';
import Hero from '@/components/Hero/Hero';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <Hero 
        title="Learn to Drive with Confidence — Calgary's Trusted Driving School"
        subtitle="Personalized, patient instruction from a certified Class 5 instructor serving Calgary, Airdrie, Chestermere & Cochrane."
        ctaText="Call or Text to Book"
        ctaLink="tel:403-763-9365"
        secondaryCtaText="View Courses"
        secondaryCtaLink="/courses"
      />

      {/* Welcome / About */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.welcomeGrid}>
            <div className={styles.welcomeContent}>
              <div className="section-header" style={{textAlign: 'left'}}>
                <h2>Welcome to Redstone Driving School</h2>
              </div>
              <p>
                Hi, I'm Sukhsimran "Sunny" Seera. With over 4 years of teaching experience, I'm dedicated to providing patient, calm, and one-on-one coaching to help you master the road.
              </p>
              <ul className={styles.featureList}>
                <li>Class 5 In-Class & In-Car Certified</li>
                <li>Insurance Reduction Certified</li>
                <li>Dual-Brake Fully Insured Vehicle (2024 Toyota Corolla)</li>
                <li>Multilingual Instruction: English, Punjabi, Hindi</li>
              </ul>
              <Link href="/about" className="btn-primary" style={{marginTop: '1rem'}}>
                Learn More About Us
              </Link>
            </div>
            <div className={styles.welcomeImage}>
              [Instructor / Car Photo Placeholder]
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className="section-header">
            <h2>Why Choose Redstone</h2>
          </div>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>$</div>
              <h3>Affordable Pricing</h3>
              <p>$100 less per course than comparable Calgary driving schools.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🚗</div>
              <h3>Free Pick-up & Drop-off</h3>
              <p>We pick you up from home or school at no extra cost.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🛡️</div>
              <h3>Fully Insured & Safe</h3>
              <p>Students are fully insured in our modern, dual-brake 2024 Toyota Corolla.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🎓</div>
              <h3>Certified Instructor</h3>
              <p>Class 5 in-class & in-car certified, plus Insurance Reduction certified.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🗣️</div>
              <h3>Multilingual</h3>
              <p>Comfortable instruction in English, Punjabi, and Hindi.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📅</div>
              <h3>Flexible Scheduling</h3>
              <p>Available every day to fit your busy schedule with ease.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Strip */}
      <section className={styles.servicesStrip}>
        <div className={styles.container}>
          <ul className={styles.servicesList}>
            <li><Link href="/courses#beginner">Beginner Lessons</Link></li>
            <li><Link href="/courses#defensive">Defensive Driving</Link></li>
            <li><Link href="/courses#highway">Highway Driving</Link></li>
            <li><Link href="/courses#winter">Winter Driving</Link></li>
            <li><Link href="/courses#refresher">Brush-Up / Refresher</Link></li>
          </ul>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className="section-header">
            <h2>Popular Packages</h2>
          </div>
          <div className={styles.pricingGrid}>
            <div className={styles.priceCard}>
              <h3>5-Lesson Package</h3>
              <div className={styles.price}>$TBD<span>/pkg</span></div>
              <ul className={styles.priceFeatures}>
                <li>5 Hours In-Car Instruction</li>
                <li>Free Pick-up & Drop-off</li>
                <li>City & Highway Basics</li>
                <li>Dual-Brake Vehicle</li>
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
                <li>Comprehensive Training</li>
              </ul>
              <Link href="/contact" className="btn-primary">Book Now</Link>
            </div>
          </div>
          <div className={styles.centerAction}>
            <Link href="/courses" className="btn-secondary">See Full Pricing</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className="section-header">
            <h2>What Our Students Say</h2>
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

      {/* Bottom CTA Band */}
      <section className={styles.ctaBand}>
        <div className={styles.container}>
          <h2>Ready to hit the road?</h2>
          <p>Join hundreds of successful students and become a confident driver with Redstone Driving School.</p>
          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
            <a href="tel:403-763-9365" className="btn-secondary" style={{backgroundColor: '#fff', color: 'var(--color-primary)'}}>
              Call 403-763-9365
            </a>
            <Link href="/contact" className="btn-secondary" style={{color: '#fff', borderColor: '#fff'}}>
              Book Online
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
