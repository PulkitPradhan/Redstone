import React from 'react';
import styles from '../../app/registration/page.module.css';

export default function ContactInfoSection() {
  return (
    <>
      <h3 className={styles.sectionTitle}>Contact Information</h3>
      <div className={styles.formGroup}>
        <label htmlFor="parentGuardianName">Parent/Guardian Name <span className={styles.required}>*</span></label>
        <input id="parentGuardianName" type="text" name="parentGuardianName" required />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="address">Address <span className={styles.required}>*</span></label>
        <input id="address" type="text" name="address" required />
      </div>

      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.formGroup}>
            <label htmlFor="city">City</label>
            <select id="city" name="city">
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
            <label htmlFor="cityTown">City/Town</label>
            <input id="cityTown" type="text" name="cityTown" />
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.formGroup}>
            <label htmlFor="province">Province</label>
            <select id="province" name="province">
              <option value="Alberta">Alberta</option>
            </select>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.formGroup}>
            <label htmlFor="postalCode">Postal Code <span className={styles.required}>*</span></label>
            <input id="postalCode" type="text" name="postalCode" required />
          </div>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.formGroup}>
            <label htmlFor="phoneCell">Phone (cell) <span className={styles.required}>*</span></label>
            <input id="phoneCell" type="tel" name="phoneCell" required />
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.formGroup}>
            <label htmlFor="phoneHome">Phone (home)</label>
            <input id="phoneHome" type="tel" name="phoneHome" />
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email <span className={styles.required}>*</span></label>
            <input id="email" type="email" name="email" required />
          </div>
        </div>
      </div>
    </>
  );
}
