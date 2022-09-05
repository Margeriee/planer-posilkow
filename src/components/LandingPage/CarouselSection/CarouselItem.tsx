import styles from "./CarouselItem.module.scss";

export const CarouselItem = ({ children, width }: any) => {
  return (
    <div className={styles["carousel-item"]} style={{ width: width }}>
      {children}
    </div>
  );
};
