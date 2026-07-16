import Hero from '@/components/Hero/Hero';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import ScrollParallax from '@/components/ScrollReveal/ScrollParallax';
import styles from './page.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Redstone Driving School',
  description: 'Meet Sukhsimran "Sunny" Seera, a certified driving instructor in Calgary with over 4 years of experience.',
};

export default function About() {
  return (
    <>
      <Hero 
        title="About Us"
        subtitle="Dedicated to helping you become a safe, confident driver for life through modern digital education."
        imageUrl="/instructor_portrait.png"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.aboutGrid}>
            <div className={styles.imageColumn}>
              <ScrollReveal yOffset={60}>
                <ScrollParallax offset={30} className={styles.imagePlaceholder} style={{ overflow: 'hidden', padding: 0 }}>
                  <img src="/instructor_portrait.png" alt="Instructor Sunny" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px', display: 'block'}} />
                </ScrollParallax>
              </ScrollReveal>
              <ScrollReveal yOffset={60} delay={0.2}>
                <ScrollParallax offset={20} className={styles.carImagePlaceholder} style={{ overflow: 'hidden', padding: 0 }}>
                  <img src="/online_course_mockup.png" alt="Digital Learning Platform" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px', display: 'block'}} />
                </ScrollParallax>
              </ScrollReveal>
            </div>

            <div className={styles.content}>
              <ScrollReveal>
                <h2>Meet Your Instructor</h2>
                <p>
                  Hello! I am Sukhsimran "Sunny" Seera, the owner and lead instructor at Redstone Driving School. Redstone is a hub of trained professionals backed by more than three decades of rich experience. We are known for preparing convinced, trained, and adept drivers by instilling the utmost confidence in them through our comprehensive online modules.
                </p>
                <p>
                  Our aim is to build professional drivers through safe driving practices. Our endeavor is to provide an extraordinary learning experience that you can access from anywhere, at any time.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={0.1}>
                <h3>Certifications & Experience</h3>
                <ul>
                  <li>Class 5 Online Classes Certified</li>
                  <li>Insurance Reduction Course Certified</li>
                  <li>4+ Years of Professional Teaching Experience</li>
                  <li>First Aid & CPR Certified</li>
                </ul>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <h3>Languages Spoken</h3>
                <ul>
                  <li>English</li>
                  <li>Punjabi</li>
                  <li>Hindi</li>
                </ul>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <h3>Our Digital Platform</h3>
                <p>
                  All our lessons are conducted on a modern, highly interactive <strong>Digital Learning Platform</strong>. Accessible via mobile, tablet, or desktop, our curriculum ensures that you receive the highest standard of theoretical driver education right from the comfort of your own home.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div className={styles.philosophyBox}>
                  <h3>My Teaching Philosophy</h3>
                  <p style={{marginBottom: 0}}>
                    "I believe that learning to drive theoretically shouldn't be stressful. My goal is to provide a clear, comprehensive online environment where students can learn at their own pace. Whether you're preparing for your learner's permit or brushing up on rules of the road, I tailor our curriculum to help you succeed and drive safely for life."
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
