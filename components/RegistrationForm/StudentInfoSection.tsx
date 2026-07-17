import React from 'react';
import styles from '../../app/registration/page.module.css';

export default function StudentInfoSection() {
  return (
    <>
      <h3 className={styles.sectionTitle}>Student Information</h3>
      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.formGroup}>
            <label htmlFor="lastName">Last Name <span className={styles.required}>*</span></label>
            <input id="lastName" type="text" name="lastName" required />
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.formGroup}>
            <label htmlFor="firstName">First Name <span className={styles.required}>*</span></label>
            <input id="firstName" type="text" name="firstName" required />
          </div>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.formGroup}>
            <label htmlFor="dob">DOB <span className={styles.required}>*</span></label>
            <input id="dob" type="date" name="dob" required />
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.formGroup}>
            <label htmlFor="gender">Gender <span className={styles.required}>*</span></label>
            <select id="gender" name="gender" required>
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
            <label htmlFor="licenseClass">License Class <span className={styles.required}>*</span></label>
            <input id="licenseClass" type="text" name="licenseClass" required />
          </div>
        </div>
        <div className={styles.col} style={{flex: 1}}>
          <div className={styles.formGroup}>
            <label htmlFor="licenseNumber">License Number</label>
            <input id="licenseNumber" type="number" name="licenseNumber" />
          </div>
        </div>
        <div className={styles.col} style={{flex: 1}}>
          <div className={styles.formGroup}>
            <label htmlFor="conditionCode">Condition Code</label>
            <input id="conditionCode" type="text" name="conditionCode" />
          </div>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.formGroup}>
            <label htmlFor="issueDate">Issue Date</label>
            <input id="issueDate" type="date" name="issueDate" />
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.formGroup}>
            <label htmlFor="expiryDate">Expiry Date</label>
            <input id="expiryDate" type="date" name="expiryDate" />
          </div>
        </div>
      </div>
    </>
  );
}
