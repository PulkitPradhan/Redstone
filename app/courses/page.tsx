import Hero from '@/components/Hero/Hero';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
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
        title="Online & In-Car Driving Courses"
        subtitle="Find the perfect driving course for your needs. We offer flexible options and experienced instructors to get you confidently behind the wheel."
        ctaText="Enroll Now"
        ctaLink="/registration"
        imageUrl="/online_course_mockup.png"
      />

      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className="section-header">
            <h2>Our Comprehensive Driving Programs</h2>
          </div>
          
          <div className={styles.courseList}>
            <div id="basic" className={styles.courseItem}>
              <h3>Basic Course</h3>
              <p>RECOMMENDED IF: You&apos;re reasonably comfortable as a driver and have some experience. This package includes 15 Hours of Online Classes and 10 Hours of In-Car driving instruction.</p>
            </div>
            
            <div id="premium" className={styles.courseItem}>
              <h3>Premium Course</h3>
              <p>RECOMMENDED IF: You want more practice driving in different situations to feel more confident. This package includes 15 Hours of Online Classes and 14 Hours of In-Car driving instruction.</p>
            </div>
            
            <div id="ultimate" className={styles.courseItem}>
              <h3>Ultimate Course</h3>
              <p>RECOMMENDED IF: You have little to no driving experience or you feel a bit nervous behind the wheel. This package includes 15 Hours of Online Classes and 20 Hours of In-Car driving instruction.</p>
            </div>
            
            <div id="elite" className={styles.courseItem}>
              <h3>Elite Course</h3>
              <p>RECOMMENDED IF: You&apos;re living in remote towns or cities from Calgary like NANTON, STRATHMORE, CROSSFIELD, COCHRANE, BRAGG CREEK, PRIDDIS, MILLARVILLE, DIAMOND VALLEY, LONGVIEW, BLACKIE AND so on. This package includes 15 Hours of Online Classes and 10 Hours of In-Car driving instruction, tailored for rural scenarios.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: 'var(--color-primary)', color: '#fff', padding: '4rem 1rem', textAlign: 'center' }}>
        <div className={styles.container} style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>Master Defensive Driving</h2>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '2rem' }}>
            We don&apos;t just teach you how to pass your test—we teach you how to survive on the road. 
            <strong> All of our programs heavily emphasize advanced Defensive Driving techniques</strong>, ensuring you learn hazard perception, proactive vehicle control, and safe decision-making in any weather condition.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className="section-header">
            <h2>Course Pricing Packages</h2>
          </div>
          
          <div className={styles.pricingGrid}>
            <div className={styles.priceCard}>
              <h3>Basic</h3>
              <div className={styles.price}>$699</div>
              <ul className={styles.priceFeatures}>
                <li><CheckCircle2 size={16} color="#B23A2E" /> 15 Hours In-Class</li>
                <li><CheckCircle2 size={16} color="#B23A2E" /> 10 Hours in Car</li>
              </ul>
              <Link href="/registration" className="btn-primary" style={{ marginBottom: '2rem' }}>Enroll Now</Link>
              <div className={styles.recommendedBox}>
                <h4>RECOMMENDED IF</h4>
                <p>You&apos;re reasonably comfortable as a driver and have some experience</p>
              </div>
            </div>

            <div className={styles.priceCard} style={{border: '2px solid var(--color-primary)'}}>
              <div className={styles.popularBadge}>Most Popular</div>
              <h3>Premium</h3>
              <div className={styles.price}>$969</div>
              <ul className={styles.priceFeatures}>
                <li><CheckCircle2 size={16} color="#B23A2E" /> 15 Hours In-Class</li>
                <li><CheckCircle2 size={16} color="#B23A2E" /> 14 Hours in Car</li>
              </ul>
              <Link href="/registration" className="btn-primary" style={{ marginBottom: '2rem' }}>Enroll Now</Link>
              <div className={styles.recommendedBox}>
                <h4>RECOMMENDED IF</h4>
                <p>You want more practice driving in different situations to feel more confident</p>
              </div>
            </div>

            <div className={styles.priceCard}>
              <h3>Ultimate</h3>
              <div className={styles.price}>$1349</div>
              <ul className={styles.priceFeatures}>
                <li><CheckCircle2 size={16} color="#B23A2E" /> 15 Hours In-Class</li>
                <li><CheckCircle2 size={16} color="#B23A2E" /> 20 Hours in Car</li>
              </ul>
              <Link href="/registration" className="btn-primary" style={{ marginBottom: '2rem' }}>Enroll Now</Link>
              <div className={styles.recommendedBox}>
                <h4>RECOMMENDED IF</h4>
                <p>You have little to no driving experience or you feel a bit nervous behind the wheel</p>
              </div>
            </div>

            <div className={styles.priceCard}>
              <h3>Elite</h3>
              <div className={styles.price}>$899</div>
              <ul className={styles.priceFeatures}>
                <li><CheckCircle2 size={16} color="#B23A2E" /> 15 Hours In-Class</li>
                <li><CheckCircle2 size={16} color="#B23A2E" /> 10 Hours in Car</li>
              </ul>
              <Link href="/registration" className="btn-primary" style={{ marginBottom: '2rem' }}>Enroll Now</Link>
              <div className={styles.recommendedBox}>
                <h4>RECOMMENDED IF</h4>
                <p>You live outside Calgary and want specialized practice for rural routes, highways, and long-distance commuting.</p>
              </div>
            </div>
          </div>

          <div className={styles.policyNote}>
            <p><strong>Instant digital access included at no extra cost</strong> anywhere in Alberta.</p>
            <p>Please note: A high-speed internet connection is required for all video modules.</p>
            <p style={{marginTop: '1rem', color: 'var(--color-accent)'}}>All online lessons are accessible via desktop, tablet, and mobile devices.</p>
          </div>
        </div>
      </section>
    </>
  );
}
