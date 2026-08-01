import Button from "@/components/common/Button";
import { LayoutHero } from "@/components/Layout/Layout";
import Partners from "@/components/Partners";
import { ROUTES } from "@/constants/routes";
import styles from "./not-found.module.scss";

export default function NotFound() {
  return (
    <LayoutHero>
      <div className={styles.pageShell}>
        <main className={styles.mainContent}>
          <section className={styles.heroCard}>
            <p className={styles.kicker}>404</p>
            <h1 className={styles.title}>Stránka nebyla nalezena</h1>
            <p className={styles.description}>
              Odkaz nejspíš vede na starou nebo neexistující adresu. Vraťte se
              na hlavní stránku.
            </p>
            <div className={styles.actions}>
              <Button
                href={ROUTES.HOME}
                variant="primary"
                size="medium"
                className={styles.homeButton}
              >
                ZPĚT NA HLAVNÍ STRÁNKU
              </Button>
            </div>
          </section>
        </main>
        <Partners />
      </div>
    </LayoutHero>
  );
}