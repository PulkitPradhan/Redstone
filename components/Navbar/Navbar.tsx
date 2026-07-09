import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.topbar}>
        <div className={styles.topbarInner}>
          <div className={styles.contactInfo}>
            <a href="tel:403-763-9365">Call or Text: 403-763-9365</a>
            <span className={styles.divider}>|</span>
            <a href="mailto:infor@redstonedrivingschool.com">infor@redstonedrivingschool.com</a>
          </div>
          <div className={styles.socialIcons}>
            {/* Social icon placeholders */}
            <span className={styles.socialPlaceholder}>FB</span>
            <span className={styles.socialPlaceholder}>IG</span>
          </div>
        </div>
      </div>
      <nav className={styles.navbar}>
        <div className={styles.navInner}>
          <Link href="/" className={styles.logo}>
            <div className={styles.logoPlaceholder}>
              Redstone Driving School
            </div>
          </Link>
          
          <ul className={styles.navLinks}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/courses">Courses & Pricing</Link></li>
            <li><Link href="/reviews-faq">Reviews & FAQ</Link></li>
            <li>
              <Link href="/contact" className="btn-primary">Book Now</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
