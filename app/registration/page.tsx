'use client';

import { useState } from 'react';
import Hero from '@/components/Hero/Hero';
import styles from './page.module.css';

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
City: ${data.city} (Town: ${data.cityTown || 'N/A'})
Province: ${data.province}
Postal Code: ${data.postalCode}

*Course Selection*
Course: ${data.course}
Car Rental for Basic Road Test: ${data.carRental}
Online 15hrs Course: ${data.onlineCourse}
Estimated Road Test Date: ${data.estimatedTestDate}
Preferred Start Date: ${data.preferredStartDate}

*Agreement & Payment*
Student Signature: ${data.studentSignature} (${data.studentDate})
Parent/Guardian Signature: ${data.parentSignature} (${data.parentDate})
Payment Option: ${data.paymentOption}`;

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = '13688873300'; // Test number: +1 (368) 887-3300
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');

    setStatus('success');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      <Hero 
        title="Registration"
        subtitle="Ready to start driving? Get in touch with us today to book your first lesson or ask any questions."
        imageUrl="/registration_hero_bg.png"
      />

      <section className={styles.section}>
        <div className={styles.container}>
          
          <div className={styles.formCard}>
            <form onSubmit={handleSubmit}>
              
              <h3 className={styles.sectionTitle}>Student Information</h3>
              <div className={styles.row}>
                <div className={styles.col}>
                  <div className={styles.formGroup}>
                    <label>Last Name <span className={styles.required}>*</span></label>
                    <input type="text" name="lastName" required />
                  </div>
                </div>
                <div className={styles.col}>
                  <div className={styles.formGroup}>
                    <label>First Name <span className={styles.required}>*</span></label>
                    <input type="text" name="firstName" required />
                  </div>
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.col}>
                  <div className={styles.formGroup}>
                    <label>DOB <span className={styles.required}>*</span></label>
                    <input type="date" name="dob" required />
                  </div>
                </div>
                <div className={styles.col}>
                  <div className={styles.formGroup}>
                    <label>Gender <span className={styles.required}>*</span></label>
                    <select name="gender" required>
                      <option value="">Please select an option</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.col} style={{flex: 1}}>
                  <div className={styles.formGroup}>
                    <label>License Class <span className={styles.required}>*</span></label>
                    <input type="text" name="licenseClass" required />
                  </div>
                </div>
                <div className={styles.col} style={{flex: 1}}>
                  <div className={styles.formGroup}>
                    <label>License Number</label>
                    <input type="number" name="licenseNumber" />
                  </div>
                </div>
                <div className={styles.col} style={{flex: 1}}>
                  <div className={styles.formGroup}>
                    <label>Condition Code</label>
                    <input type="text" name="conditionCode" />
                  </div>
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.col}>
                  <div className={styles.formGroup}>
                    <label>Issue Date</label>
                    <input type="date" name="issueDate" />
                  </div>
                </div>
                <div className={styles.col}>
                  <div className={styles.formGroup}>
                    <label>Expiry Date</label>
                    <input type="date" name="expiryDate" />
                  </div>
                </div>
              </div>

              <h3 className={styles.sectionTitle}>Contact Information</h3>
              <div className={styles.formGroup}>
                <label>Parent/Guardian Name <span className={styles.required}>*</span></label>
                <input type="text" name="parentGuardianName" required />
              </div>

              <div className={styles.formGroup}>
                <label>Address <span className={styles.required}>*</span></label>
                <input type="text" name="address" required />
              </div>

              <div className={styles.row}>
                <div className={styles.col}>
                  <div className={styles.formGroup}>
                    <label>City</label>
                    <select name="city">
                      <option value="Calgary">Calgary</option>
                      <option value="Airdrie">Airdrie</option>
                      <option value="Chestermere">Chestermere</option>
                      <option value="Strathmore">Strathmore</option>
                      <option value="Cochrane">Cochrane</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                </div>
                <div className={styles.col}>
                  <div className={styles.formGroup}>
                    <label>City/Town</label>
                    <input type="text" name="cityTown" />
                  </div>
                </div>
                <div className={styles.col}>
                  <div className={styles.formGroup}>
                    <label>Province</label>
                    <select name="province">
                      <option value="Alberta">Alberta</option>
                    </select>
                  </div>
                </div>
                <div className={styles.col}>
                  <div className={styles.formGroup}>
                    <label>Postal Code <span className={styles.required}>*</span></label>
                    <input type="text" name="postalCode" required />
                  </div>
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.col}>
                  <div className={styles.formGroup}>
                    <label>Phone (cell) <span className={styles.required}>*</span></label>
                    <input type="tel" name="phoneCell" required />
                  </div>
                </div>
                <div className={styles.col}>
                  <div className={styles.formGroup}>
                    <label>Phone (home)</label>
                    <input type="tel" name="phoneHome" />
                  </div>
                </div>
                <div className={styles.col}>
                  <div className={styles.formGroup}>
                    <label>Email <span className={styles.required}>*</span></label>
                    <input type="email" name="email" required />
                  </div>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label>Courses and Brush Up Sessions (Scroll Down for More Options) <span className={styles.required}>*</span></label>
                <select name="course" required className={styles.largeSelect}>
                  <option value="">Please select an option</option>
                  <option value="Basic ($699)">Basic ($699)</option>
                  <option value="Premium ($969)">Premium ($969)</option>
                  <option value="Ultimate ($1349)">Ultimate ($1349)</option>
                  <option value="Elite ($899)">Elite ($899)</option>
                  <option value="---">---</option>
                  <option value="One Lesson - 2 Hours ($149)">One Lesson - 2 Hours ($149)</option>
                  <option value="On-line Course Only ($100)">On-line Course Only ($100)</option>
                  <option value="Not Sure">Not Sure</option>
                </select>
                <span className={styles.helpText}>All our packages are exclusive of GST & Service Charge</span>
              </div>

              <div className={styles.row}>
                <div className={styles.col}>
                  <div className={styles.formGroup}>
                    <label>Car Rental for Basic Road Test ($99) <span className={styles.required}>*</span></label>
                    <div className={styles.radioGroup}>
                      <label className={styles.radioLabel}><input type="radio" name="carRental" value="Yes" required /> Yes</label>
                      <label className={styles.radioLabel}><input type="radio" name="carRental" value="No" required /> No</label>
                    </div>
                  </div>
                </div>
                <div className={styles.col}>
                  <div className={styles.formGroup}>
                    <label>Opting for an Online 15hrs Course ($100) <span className={styles.required}>*</span></label>
                    <div className={styles.radioGroup}>
                      <label className={styles.radioLabel}><input type="radio" name="onlineCourse" value="Yes" required /> Yes</label>
                      <label className={styles.radioLabel}><input type="radio" name="onlineCourse" value="No" required /> No</label>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.col}>
                  <div className={styles.formGroup}>
                    <label>Estimated Road Test Date <span className={styles.required}>*</span></label>
                    <input type="date" name="estimatedTestDate" required />
                  </div>
                </div>
                <div className={styles.col}>
                  <div className={styles.formGroup}>
                    <label>Preferred Start Date for Car Driving Classes <span className={styles.required}>*</span></label>
                    <input type="date" name="preferredStartDate" required />
                    <span className={styles.helpText}>depending on the available slots.</span>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '3rem', marginBottom: '3rem', borderTop: '1px solid #eee', paddingTop: '2rem' }}>
                <h5 style={{ textAlign: 'center', padding: '20px 0px', fontWeight: 600, fontSize: '1.25rem' }}>TERMS & CONDITIONS</h5>
                
                <div style={{ fontSize: '0.9rem', color: '#555', lineHeight: '1.6' }}>
                  <p><strong>For School:</strong></p>
                  <p style={{ marginBottom: '1rem' }}>
                    • Vehicles being used for driving lessons must follow the guidelines as per Alberta Transportation such as brake & gas pedals for instructor, visual signs and regular maintenance/log reports, etc.<br />
                    • Instructor must ensure to clean and sanitize the vehicle before every class as per Alberta Health Services guidelines.<br />
                    • Instructor will pick-up and drop-off the student at the agreed location within the city limits at no extra cost.<br />
                    • Instructor must be attentive at all times during the class.<br />
                    • Instructor must share the feedback of every class before dropping off the student.<br />
                    • School must reschedule the lesson of any student if it got cancelled due to any unforeseen situation such as problem in vehicle, sick call from Instructor/Student with doctor’s note, etc.
                  </p>

                  <p><strong>For Students/Parents:</strong></p>
                  <p style={{ marginBottom: '1rem' }}>
                    • Parents/Guardians must inform the School about any medical, physical, or mental health problems which could directly relate to student performance. Failure to provide this information could be considered negligence.<br />
                    • Student must ensure to keep the driving license with them during the class and have to show when requested.<br />
                    • The use of tobacco products is not allowed while driving or also riding as a passenger. Students that arrive for a drive session in an intoxicated or drug induced condition will not be allowed to drive and, may be dropped from the course without refund.<br />
                    • All fees are payable in advance before the first training session. All payments can be made using a debit card, cash or e-transfer.<br />
                    • A fee of $99 will be charged and must be paid before the next class in case of no show by the student or any cancellation or rescheduling within 24 hours of the scheduled class.<br />
                    • At least 24 hours’ notice is required before making any change to the existing schedule.<br />
                  </p>
                  <p style={{ fontWeight: 'bold' }}>By signing below, I consent to having read the contract. Also, I am confirming complete understanding and agreement to all terms and conditions in this contract.</p>
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.col}>
                  <div className={styles.formGroup}>
                    <label>Student Signature <span className={styles.required}>*</span></label>
                    <input type="text" name="studentSignature" placeholder="print your name here" className={styles.signatureInput} required />
                  </div>
                </div>
                <div className={styles.col}>
                  <div className={styles.formGroup}>
                    <label>Date <span className={styles.required}>*</span></label>
                    <input type="date" name="studentDate" className={styles.signatureInput} required />
                  </div>
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.col}>
                  <div className={styles.formGroup}>
                    <label>Parent/Guardian Signature <span className={styles.required}>*</span></label>
                    <input type="text" name="parentSignature" placeholder="print your name here" className={styles.signatureInput} required />
                  </div>
                </div>
                <div className={styles.col}>
                  <div className={styles.formGroup}>
                    <label>Date <span className={styles.required}>*</span></label>
                    <input type="date" name="parentDate" className={styles.signatureInput} required />
                  </div>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label>Payment Option <span className={styles.required}>*</span></label>
                <div className={styles.radioGroup}>
                  <label className={styles.radioLabel}><input type="radio" name="paymentOption" value="Pay Now (Credit Card/Debit Card)" required /> Pay Now (Credit Card/Debit Card)</label>
                  <label className={styles.radioLabel}><input type="radio" name="paymentOption" value="Pay Later (Cash/Cheque/E-transfer)" required /> Pay Later (Cash/Cheque/E-transfer)</label>
                </div>
              </div>

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
