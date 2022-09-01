import styles from "./Logo.module.scss";

export const Logo = (size: any) => {
  return (
    <div className={styles.logo}>
      <p className={styles.logoZaplanuj}>Zaplanuj</p>
      <p className={styles.logoPosilek}>Posiłek</p>
    </div>
  );
};
