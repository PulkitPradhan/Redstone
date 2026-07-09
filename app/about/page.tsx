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
        subtitle="Dedicated to helping you become a safe, confident driver for life."
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.aboutGrid}>
            <div className={styles.imageColumn}>
              <ScrollReveal yOffset={60}>
                <ScrollParallax offset={30} className={styles.imagePlaceholder} style={{ overflow: 'hidden' }}>
                  <div style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    [Photo of Sunny (Instructor Headshot)]
                  </div>
                </ScrollParallax>
              </ScrollReveal>
              <ScrollReveal yOffset={60} delay={0.2}>
                <ScrollParallax offset={20} className={styles.carImagePlaceholder} style={{ overflow: 'hidden' }}>
                  <div style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    [Photo of 2024 Toyota Corolla]
                  </div>
                </ScrollParallax>
              </ScrollReveal>
            </div>

            <div className={styles.content}>
              <ScrollReveal>
                <h2>Meet Your Instructor</h2>
                <p>
                  Hello! I am Sukhsimran "Sunny" Seera, the owner and lead instructor at Redstone Driving School. I have been teaching driving for over 4 years in the Calgary area. I'm passionate about road safety and empowering new drivers to feel comfortable and confident behind the wheel.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={0.1}>
                <h3>Certifications & Experience</h3>
                <ul>
                  <li>Class 5 In-Class & In-Car Certified</li>
                  <li>Insurance Reduction Course Certified</li>
                  <li>4+ Years of Professional Teaching Experience</li>
                  <li>First Aid & CPR Certified (Placeholder)</li>
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
                <h3>Our Vehicle</h3>
                <p>
                  All lessons are conducted in a clean, modern, and fully insured <strong>2024 Toyota Corolla (Automatic)</strong>. The vehicle is equipped with dual brakes for your safety, ensuring that I can assist you if needed during the early stages of your learning journey. You are fully insured while driving with us.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div className={styles.philosophyBox}>
                  <h3>My Teaching Philosophy</h3>
                  <p style={{marginBottom: 0}}>
                    "I believe that learning to drive shouldn't be stressful. My goal is to provide a calm, patient, and supportive environment where students can learn at their own pace. Whether you're getting behind the wheel for the first time or looking to brush up on your skills, I tailor every lesson to your unique needs so you can pass your road test and drive safely for life."
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
