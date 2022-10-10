import styles from "./Button.module.scss";

type buttonProps = {
  children: string;
  onClick: any;
};

export const Button = (props: buttonProps) => {
  const { children, onClick } = props;

  return (
    <button
      onClick={onClick}
      className={styles.button}
    >
      {children}
    </button>
  );
};
