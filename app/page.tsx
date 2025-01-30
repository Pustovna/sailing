import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Link className={styles.link} href="/calendar">Календарь</Link>
      </main>
      <footer className={styles.footer}>
     
      </footer>
    </div>
  );
}
