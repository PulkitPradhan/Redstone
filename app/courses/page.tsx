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
        title="Online Courses & Pricing"
        subtitle="Find the perfect driving course for your needs. We offer flexible options and experienced instructors to get you confidently behind the wheel."
        ctaText="Enroll Now"
        ctaLink="/registration"
        imageUrl="/online_course_mockup.png"
      />

      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className="section-header">
            <h2>Our Online Driving Programs</h2>
          </div>
          
          <div className={styles.courseList}>
            <div id="basic" className={styles.courseItem}>
              <h3>Basic Course</h3>
              <p>RECOMMENDED IF: You're reasonably comfortable as a driver and have some experience. This package includes 15 Hours of Online Classes and Interactive Quizzes to reinforce your learning.</p>
            </div>
            
            <div id="premium" className={styles.courseItem}>
              <h3>Premium Course</h3>
              <p>RECOMMENDED IF: You want more theoretical practice in different situations to feel more confident. This package includes 29 Hours of Online Classes and Advanced Scenario Modules.</p>
            </div>
            
            <div id="ultimate" className={styles.courseItem}>
              <h3>Ultimate Course</h3>
              <p>RECOMMENDED IF: You have little to no driving experience or you feel a bit nervous behind the wheel. This package includes 35 Hours of comprehensive Online Classes focusing on fundamental rules of the road.</p>
            </div>
            
            <div id="elite" className={styles.courseItem}>
              <h3>Elite Course</h3>
              <p>RECOMMENDED IF: You're living in remote towns or cities from Calgary like NANTON, STRATHMORE, CROSSFIELD, COCHRANE, BRAGG CREEK, PRIDDIS, MILLARVILLE, DIAMOND VALLEY, LONGVIEW, BLACKIE AND so on. This package includes 25 Hours of Online Classes tailored for rural and highway scenarios.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className="section-header">
            <h2>Online Pricing Packages</h2>
          </div>
          
          <div className={styles.pricingGrid}>
            <div className={styles.priceCard}>
              <h3>Basic</h3>
              <div className={styles.price}>$699<span>/pkg</span></div>
              <ul className={styles.priceFeatures}>
                <li>15 Hours Online Classes</li>
                <li>Interactive Quizzes</li>
                <li>Reasonably comfortable driver</li>
                <li>Some experience</li>
              </ul>
              <Link href="/registration" className="btn-primary">Enroll Now</Link>
            </div>

            <div className={styles.priceCard} style={{border: '2px solid var(--color-primary)'}}>
              <div className={styles.popularBadge}>Most Popular</div>
              <h3>Premium</h3>
              <div className={styles.price}>$969<span>/pkg</span></div>
              <ul className={styles.priceFeatures}>
                <li>29 Hours Online Classes</li>
                <li>Advanced Scenario Modules</li>
                <li>More theoretical practice</li>
                <li>Feel more confident</li>
              </ul>
              <Link href="/registration" className="btn-primary">Enroll Now</Link>
            </div>

            <div className={styles.priceCard}>
              <h3>Ultimate</h3>
              <div className={styles.price}>$1349<span>/pkg</span></div>
              <ul className={styles.priceFeatures}>
                <li>35 Hours Online Classes</li>
                <li>Fundamental Rules Focus</li>
                <li>Little to no driving experience</li>
                <li>Nervous behind the wheel</li>
              </ul>
              <Link href="/registration" className="btn-primary">Enroll Now</Link>
            </div>

            <div className={styles.priceCard}>
              <h3>Elite</h3>
              <div className={styles.price}>$899<span>/pkg</span></div>
              <ul className={styles.priceFeatures}>
                <li>25 Hours Online Classes</li>
                <li>Rural & Highway Focus</li>
                <li>For remote towns / cities</li>
                <li>Surrounding Calgary areas</li>
              </ul>
              <Link href="/registration" className="btn-primary">Enroll Now</Link>
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
