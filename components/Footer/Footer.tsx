import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Column 1: About/Logo */}
          <div className={styles.col}>
            <h3 className={styles.logo}>Redstone Driving School</h3>
            <p className={styles.desc}>
              Personalized, patient instruction from a certified Class 5 instructor. Learn to drive with confidence.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.links}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/courses">Courses & Pricing</Link></li>
              <li><Link href="/reviews-faq">Reviews & FAQ</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Service Area & Info */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Service Area</h4>
            <ul className={styles.links}>
              <li>Calgary</li>
              <li>Airdrie</li>
              <li>Chestermere</li>
              <li>Cochrane</li>
              <li>Crossfield</li>
              <li>Okotoks</li>
              <li>Strathmore</li>
            </ul>
            <h4 className={styles.colTitle} style={{marginTop: '1.5rem'}}>Payment Methods</h4>
            <p className={styles.desc}>E-Transfer, Cash</p>
          </div>

          {/* Column 4: Contact */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Contact Us</h4>
            <p className={styles.contactItem}>
              <strong>Phone/Text:</strong><br/>
              <a href="tel:403-763-9365">403-763-9365</a>
            </p>
            <p className={styles.contactItem}>
              <strong>Email:</strong><br/>
              <a href="mailto:info@redstonedriving.com">info@redstonedriving.com</a>
            </p>
            <p className={styles.contactItem}>
              <strong>Hours:</strong><br/>
              Available Every Day
            </p>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p>&copy; {new Date().getFullYear()} Redstone Driving School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
