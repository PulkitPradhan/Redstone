import React from 'react';
import styles from '../../app/registration/page.module.css';

export default function CourseSelectionSection() {
  return (
    <>
      <div className={styles.formGroup}>
        <label htmlFor="course">Courses and Brush Up Sessions (Scroll Down for More Options) <span className={styles.required}>*</span></label>
        <select id="course" name="course" required className={styles.largeSelect}>
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
            <fieldset className={styles.radioGroupContainer}>
              <legend>Car Rental for Basic Road Test ($99) <span className={styles.required}>*</span></legend>
              <div className={styles.radioGroup}>
                <label className={styles.radioLabel}><input type="radio" name="carRental" value="Yes" required /> Yes</label>
                <label className={styles.radioLabel}><input type="radio" name="carRental" value="No" required /> No</label>
              </div>
            </fieldset>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.formGroup}>
            <fieldset className={styles.radioGroupContainer}>
              <legend>Opting for an Online 15hrs Course ($100) <span className={styles.required}>*</span></legend>
              <div className={styles.radioGroup}>
                <label className={styles.radioLabel}><input type="radio" name="onlineCourse" value="Yes" required /> Yes</label>
                <label className={styles.radioLabel}><input type="radio" name="onlineCourse" value="No" required /> No</label>
              </div>
            </fieldset>
          </div>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.formGroup}>
            <label htmlFor="estimatedTestDate">Estimated Road Test Date <span className={styles.required}>*</span></label>
            <input id="estimatedTestDate" type="date" name="estimatedTestDate" required />
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.formGroup}>
            <label htmlFor="preferredStartDate">Preferred Start Date for Car Driving Classes <span className={styles.required}>*</span></label>
            <input id="preferredStartDate" type="date" name="preferredStartDate" required />
            <span className={styles.helpText}>depending on the available slots.</span>
          </div>
        </div>
      </div>
    </>
  );
}
