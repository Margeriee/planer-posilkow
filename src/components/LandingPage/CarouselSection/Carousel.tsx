import {
  Children,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./Carousel.module.scss";

type carouselProps = {
  children: any;
};

export const Carousel = (props: carouselProps) => {
  const { children } = props;
  const [current, setCurrent] = useState(1);
  const [translateX, setTranslateX] = useState(0);
  const [paused, setPaused] = useState(false);
  const containerRef = useRef(null);

  const actionHandler = useCallback(
    (mode: string) => {
      // @ts-ignore
      containerRef.current.style.transitionDuration = "400ms";

      if (mode === "previous") {
        if (current <= 1) {
          setTranslateX(0);
          setCurrent(children.length);
        } else {
          // @ts-ignore
          setTranslateX(containerRef.current.clientWidth * (current - 1));
          setCurrent((prev) => --prev);
        }
      } else if (mode === "next") {
        if (current >= children.length) {
          setTranslateX(
            // @ts-ignore
            containerRef.current.clientWidth * (children.length + 1)
          );
          setCurrent(1);
        } else {
          // @ts-ignore
          setTranslateX(containerRef.current.clientWidth * (current + 1));
          setCurrent((prev) => ++prev);
        }
      }
    },
    [current, children]
  );

  useEffect(() => {
    const transitionEnd = () => {
      if (current <= 1) {
        // @ts-ignore
        containerRef.current.style.transitionDuration = "0ms";
        // @ts-ignore
        setTranslateX(containerRef.current.clientWidth * current);
      }

      if (current >= children.length) {
        // @ts-ignore
        containerRef.current.style.transitionDuration = "0ms";
        // @ts-ignore
        setTranslateX(containerRef.current.clientWidth * children.length);
      }
    };

    document.addEventListener("transitionend", transitionEnd);

    return () => {
      document.removeEventListener("transitionend", transitionEnd);
    };
  }, [current, children]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        actionHandler("next");
      }
    }, 5000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const slides = useMemo(() => {
    if (children.length > 1) {
      let items = Children.map(children, (child, index): any => (
        <li key={index} className={styles.slide}>
          {child}
        </li>
      ));

      return [
        <li key={children.length + 1} className={styles.slide}>
          {children[children.length - 1]}
        </li>,
        ...items,
        <li key={children.length + 2} className={styles.slide}>
          {children[0]}
        </li>,
      ];
    }

    return <li className={styles.slide}>{children[0]}</li>;
  }, [children]);

  useLayoutEffect(() => {
    // @ts-ignore
    setTranslateX(containerRef.current.clientWidth * current);
  }, []);

  return (
    <div
      className={styles.root}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <ul
        ref={containerRef}
        className={styles.carousel}
        style={{
          transform: `translate3d(${-translateX}px, 0, 0)`,
        }}
      >
        {slides}
      </ul>
      <FontAwesomeIcon
        className={`${styles.button} ${styles.buttonLeft}`}
        onClick={() => actionHandler("previous")}
        icon={faAngleLeft}
      />
      <FontAwesomeIcon
        className={`${styles.button} ${styles.buttonRight}`}
        onClick={() => actionHandler("next")}
        icon={faAngleRight}
      />
    </div>
  );
};
