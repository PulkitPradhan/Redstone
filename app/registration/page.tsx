'use client';

import { useState } from 'react';
import Hero from '@/components/Hero/Hero';
import styles from './page.module.css';
import StudentInfoSection from '@/components/RegistrationForm/StudentInfoSection';
import ContactInfoSection from '@/components/RegistrationForm/ContactInfoSection';
import CourseSelectionSection from '@/components/RegistrationForm/CourseSelectionSection';
import AgreementSection from '@/components/RegistrationForm/AgreementSection';

export default function Registration() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Format the message for WhatsApp
    const message = `*New Registration Request*

*Student Info*
Name: ${data.firstName} ${data.lastName}
DOB: ${data.dob}
Gender: ${data.gender}
License Class: ${data.licenseClass}
License Number: ${data.licenseNumber || 'N/A'}
Condition Code: ${data.conditionCode || 'N/A'}
Issue Date: ${data.issueDate || 'N/A'}
Expiry Date: ${data.expiryDate || 'N/A'}

*Contact Info*
Parent/Guardian: ${data.parentGuardianName}
Email: ${data.email}
Cell Phone: ${data.phoneCell}
Home Phone: ${data.phoneHome || 'N/A'}
Address: ${data.address}
City/Town: ${data.cityTown || 'N/A'}
Province: ${data.province}
Postal Code: ${data.postalCode}

*Course Selection*
Course: ${data.course}
Car Rental for Basic Road Test: ${data.carRental}
Online 15 Hours Course: ${data.onlineCourse}
Estimated Road Test Date: ${data.estimatedTestDate}
Preferred Start Date: ${data.preferredStartDate}

*Agreement & Payment*
Student Signature: ${data.studentSignature} (${data.studentDate})
Parent/Guardian Signature: ${data.parentSignature} (${data.parentDate})
Payment Option: ${data.paymentOption}`;

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = '14037639365'; // Redstone Driving School Number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');

    setStatus('success');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      <Hero 
        title="Registration"
        subtitle="Ready to start your journey towards safe, defensive driving? Fill out the form below to book your first lesson or ask any questions."
        imageUrl="/registration_hero_bg.png"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          
          <div className={styles.formCard}>
            <form onSubmit={handleSubmit}>
              
              <StudentInfoSection />
              <ContactInfoSection />
              <CourseSelectionSection />
              <AgreementSection />

              <button type="submit" className={`btn-primary ${styles.submitBtn}`} disabled={status === 'loading'} style={{ backgroundColor: '#E4203C', color: 'white' }}>
                {status === 'loading' ? 'Submitting...' : 'Submit'}
              </button>

              {status === 'success' && (
                <div className={`${styles.formMessage} ${styles.success}`}>
                  Thank you! Your registration has been sent. We will contact you shortly.
                </div>
              )}
              {status === 'error' && (
                <div className={`${styles.formMessage} ${styles.error}`}>
                  Oops! Something went wrong. Please try calling or texting us instead.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
