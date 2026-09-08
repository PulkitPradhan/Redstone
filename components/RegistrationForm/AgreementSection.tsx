import React from 'react';
import styles from '../../app/registration/page.module.css';

export default function AgreementSection() {
  return (
    <>
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
            • All fees are payable in advance before the first training session. All payments can be made using cash or e-transfer.<br />
            • A fee of $99 will be charged and must be paid before the next class in case of no show by the student or any cancellation or rescheduling within 24 hours of the scheduled class.<br />
            • At least 24 hours’ notice is required before making any change to the existing schedule.<br />
          </p>
          <p style={{ fontWeight: 'bold' }}>By signing below, I consent to having read the contract. Also, I am confirming complete understanding and agreement to all terms and conditions in this contract.</p>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.formGroup}>
            <label htmlFor="studentSignature">Student Signature <span className={styles.required}>*</span></label>
            <input id="studentSignature" type="text" name="studentSignature" placeholder="print your name here" className={styles.signatureInput} required />
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.formGroup}>
            <label htmlFor="studentDate">Date <span className={styles.required}>*</span></label>
            <input id="studentDate" type="date" name="studentDate" className={styles.signatureInput} required />
          </div>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.formGroup}>
            <label htmlFor="parentSignature">Parent/Guardian Signature <span className={styles.required}>*</span></label>
            <input id="parentSignature" type="text" name="parentSignature" placeholder="print your name here" className={styles.signatureInput} required />
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.formGroup}>
            <label htmlFor="parentDate">Date <span className={styles.required}>*</span></label>
            <input id="parentDate" type="date" name="parentDate" className={styles.signatureInput} required />
          </div>
        </div>
      </div>

      <div className={styles.formGroup}>
        <fieldset className={styles.radioGroupContainer}>
          <legend>Payment Option <span className={styles.required}>*</span></legend>
          <div className={styles.radioGroup}>
            <label className={styles.radioLabel}><input type="radio" name="paymentOption" value="E-Transfer" required /> E-Transfer</label>
            <label className={styles.radioLabel}><input type="radio" name="paymentOption" value="Cash" required /> Cash</label>
          </div>
        </fieldset>
      </div>
    </>
  );
}
