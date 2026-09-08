import Image from 'next/image';
import Hero from '@/components/Hero/Hero';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import ScrollParallax from '@/components/ScrollReveal/ScrollParallax';
import styles from './page.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Redstone Driving School',
  description: 'Learn about Redstone Driving School, offering certified driving instruction in Calgary and surrounding areas.',
};

export default function About() {
  return (
    <>
      <Hero 
        title="About Us"
        subtitle="Dedicated to helping you become a safe, confident driver for life through modern digital education and expert in-car instruction."
        imageUrl="/about_hero_bg.png"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.aboutGrid}>
            <div className={styles.imageColumn}>
              <ScrollReveal yOffset={60}>
                <ScrollParallax offset={30} className={styles.imagePlaceholder} style={{ overflow: 'hidden', padding: 0 }}>
                  
                  <Image src="/training_car.png" alt="Redstone Training Car" fill style={{objectFit: 'cover', display: 'block', transform: 'scale(1.15)'}} sizes="(max-width: 768px) 100vw, 50vw" />
                </ScrollParallax>
              </ScrollReveal>
              <ScrollReveal yOffset={60} delay={0.2}>
                <ScrollParallax offset={20} className={styles.carImagePlaceholder} style={{ overflow: 'hidden', padding: 0 }}>
                  
                  <Image src="/hero_slide_2.png" alt="Redstone Fleet" fill style={{objectFit: 'cover', display: 'block', transform: 'scale(1.15)'}} sizes="(max-width: 768px) 100vw, 50vw" />
                </ScrollParallax>
              </ScrollReveal>
            </div>

            <div className={styles.content}>
              <ScrollReveal>
                <h2>Meet Your Instructor</h2>
                <p>
                  Redstone Driving School is a hub of trained professionals, backed by more than a decade of rich experience. We are known for preparing safe, adept drivers by instilling the utmost confidence in them through our comprehensive online classes and calm, expert in-car instruction.
                </p>
                <p>
                  Our aim is to build professional drivers through safe, proactive driving practices. We provide a complete learning experience—from mastering the rules of the road online at home, to getting behind the wheel and learning exactly how to implement strict defensive driving techniques in real-world conditions.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={0.1}>
                <h3>Certifications & Experience</h3>
                <ul>
                  <li>Class 5 In-Car & Online Classes Certified</li>
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
                    &quot;I believe that learning to drive theoretically shouldn&apos;t be stressful. My goal is to provide a clear, comprehensive online environment where students can learn at their own pace. Whether you&apos;re preparing for your learner&apos;s permit or brushing up on rules of the road, I tailor our curriculum to help you succeed and drive safely for life.&quot;
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
