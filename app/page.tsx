import Link from 'next/link';
import Hero from '@/components/Hero/Hero';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import ScrollParallax from '@/components/ScrollReveal/ScrollParallax';
import TestimonialCarousel from '@/components/TestimonialCarousel/TestimonialCarousel';
import styles from './page.module.css';
import { Award, UserCheck, Users, BookOpen, Smile, Calendar, Map, Lightbulb, ShieldCheck, SprayCan, CheckCircle2 } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Hero 
        title="Redstone Driving School - Expert In-Car Lessons & Online Education"
        subtitle="Master the road with our comprehensive online modules and calm, professional in-car driving lessons. Build confidence behind the wheel."
        ctaText="View Our Courses"
        ctaLink="/courses"
        secondaryCtaText="Contact Us"
        secondaryCtaLink="/contact"
        imageUrls={['/hero_car_driving.png', '/hero_slide_1.png', '/hero_slide_2.png', '/hero_slide_3.png']}
      />

      {/* Welcome / About */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.welcomeGrid}>
            <div className={styles.welcomeContent}>
              <ScrollReveal>
                <div className="section-header" style={{textAlign: 'left'}}>
                  <h2>Welcome to Redstone Driving School</h2>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p>
                  Hi, I'm Sukhsimran "Sunny" Seera. Redstone is a hub of trained professionals backed by more than three decades of rich experience. We are known for preparing convinced, trained, and adept drivers by instilling the utmost confidence in them through our comprehensive online classes and expert, hands-on in-car instruction.
                </p>
                <p>
                  Our aim is to build professional drivers through safe driving practices. We provide a complete learning experience—from mastering the rules of the road online at home, to getting behind the wheel and learning exactly how to drive safely in real-world conditions.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <Link href="/about" className="btn-primary" style={{marginTop: '1rem'}}>
                  Learn More About Us
                </Link>
              </ScrollReveal>
            </div>
            <div className={styles.welcomeImage}>
              <ScrollParallax offset={40} className={styles.welcomeImageParallaxWrapper} style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <img src="/online_learning_hero.png" alt="Online Driving Course" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px', transform: 'scale(1.15)'}} />
              </ScrollParallax>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={styles.section}>
        <div className={styles.container}>
          <ScrollReveal>
            <div className="section-header">
              <h2>Why Choose Us?</h2>
            </div>
          </ScrollReveal>
          <div className={styles.featuresGrid}>
            {[
              { icon: <Award size={36} strokeWidth={1.5} />, title: 'Best Service At Best Price' },
              { icon: <UserCheck size={36} strokeWidth={1.5} />, title: 'Experienced & Calm Instructors' },
              { icon: <Users size={36} strokeWidth={1.5} />, title: 'Noble & Humble Office Staff' },
              { icon: <BookOpen size={36} strokeWidth={1.5} />, title: 'Clear Balanced Modules & Teaching Methods' },
              { icon: <Smile size={36} strokeWidth={1.5} />, title: 'Healthy Joyful Environment & Confident Students' },
              { icon: <Map size={36} strokeWidth={1.5} />, title: 'Assurance Of Covering All Aspects Of Driving' },
              { icon: <Lightbulb size={36} strokeWidth={1.5} />, title: 'Reasonable & Analytical Problem-Solving Techniques' },
              { icon: <ShieldCheck size={36} strokeWidth={1.5} />, title: 'Advanced Defensive Driving Techniques' }
            ].map((feature, i) => (
              <ScrollReveal 
                key={i} 
                delay={i * 0.1} 
              >
                <div className={styles.featureCard}>
                  <div className={styles.featureIcon}>{feature.icon}</div>
                  <h3>{feature.title}</h3>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Instructor Section */}
      <section className={styles.instructorSection}>
        <div className={styles.container}>
          <div className={styles.instructorGrid}>
            <ScrollReveal className={styles.instructorContent}>
              <h2>Expert In-Car Instruction</h2>
              <p>
                Our driving lessons aren't just about passing a test—they're about building lifelong skills for the road. 
                With patient, certified instructors by your side, you will learn defensive driving techniques, 
                hazard perception, and the confidence needed to handle any driving situation safely.
              </p>
              <p>
                Whether you're a complete beginner or looking to refresh your skills, our tailored in-car sessions 
                are designed to make you a confident and capable driver.
              </p>
              <Link href="/about" className="btn-secondary" style={{ marginTop: '1rem', display: 'inline-block' }}>Meet Your Instructor</Link>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <div className={styles.instructorImage}>
                <img src="/instructor_teaching.png" alt="Instructor teaching driving" style={{width: '100%', height: 'auto', display: 'block'}} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Strip */}
      <section className={styles.servicesStrip}>
        <div className={styles.container}>
          <ScrollReveal yOffset={20}>
            <ul className={styles.servicesList}>
              <li><Link href="/courses#basic">Basic Course</Link></li>
              <li><Link href="/courses#premium">Premium Course</Link></li>
              <li><Link href="/courses#ultimate">Ultimate Course</Link></li>
              <li><Link href="/courses#elite">Elite Course</Link></li>
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <ScrollReveal>
            <div className="section-header">
              <h2>Online Driving Packages</h2>
            </div>
          </ScrollReveal>
          <div className={styles.pricingGrid}>
            <ScrollReveal delay={0.1} className={styles.priceCard}>
              <h3>Basic</h3>
              <div className={styles.price}>$699</div>
              <ul className={styles.priceFeatures}>
                <li><CheckCircle2 size={16} color="#B23A2E" /> 15 Hours In-Class</li>
                <li><CheckCircle2 size={16} color="#B23A2E" /> 10 Hours in Car</li>
              </ul>
              <Link href="/registration" className="btn-primary" style={{ marginBottom: '2rem' }}>Enroll Now</Link>
              <div className={styles.recommendedBox}>
                <h4>RECOMMENDED IF</h4>
                <p>You're reasonably comfortable as a driver and have some experience</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2} className={styles.priceCard} style={{border: '2px solid var(--color-primary)'}}>
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
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.3}>
            <div className={styles.centerAction}>
              <Link href="/courses" className="btn-secondary">See Full Pricing</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.section}>
        <div className={styles.container}>
          <ScrollReveal>
            <div className="section-header">
              <h2>What Our Students Say...</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <TestimonialCarousel testimonials={[
              { text: "I enjoyed and benefited from my time with Redstone Driving School's online courses, and I would recommend them to anyone who is looking to increase their knowledge before getting behind the wheel. The modules were clear, flexible, and easy to work with. Before taking the Basic course, I had driven only a handful of times and was anxious. After the online lessons, I was much more confident.", author: "Veronica Moreau" },
              { text: "From the moment I registered for their online program till I completed the course, it was a smooth experience. I took their basic insurance reduction program online. The content is very knowledgeable and has amazing coaching elements. It focuses on areas which need improvement. Highly recommended!", author: "Sundaraj Lakshmipathy" },
              { text: "Five stars definitely not adequate to give Redstone their due! Great experience; the online portal had me feeling comfortable and relaxed. I knew that I would do well on my written test because I felt well-prepared. The course gave many bits of information and advice which are not in the standard learner's manual. I highly recommend Redstone - it's a first class online driving school.", author: "Phillip Noel" }
            ]} />
          </ScrollReveal>
        </div>
      </section>

      {/* Bottom CTA Band */}
      <section className={styles.ctaBand}>
        <div className={styles.container}>
          <ScrollReveal>
            <h2>Master the Rules of the Road with Redstone</h2>
            <p>Start your online driving education today.</p>
            <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
              <a href="tel:403-763-9365" className="btn-secondary" style={{backgroundColor: '#fff', color: 'var(--color-primary)'}}>
                Call 403-763-9365
              </a>
              <Link href="/courses" className="btn-secondary" style={{color: '#fff', borderColor: '#fff'}}>
                View Courses
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
