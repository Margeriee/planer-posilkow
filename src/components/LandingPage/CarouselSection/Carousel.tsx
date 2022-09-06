// import React, { useEffect, useState } from "react";
// import { useSwipeable } from "react-swipeable";
import {
  Children,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import styles from "./Carousel.module.scss";

type carouselProps = {
  children: any; //ToDo: change any
};

// export const Carousel = (props: carouselProps) => {
//   const { children } = props;
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [paused, setPaused] = useState(false);

//   const updateIndex = (newIndex: number) => {
//     if (newIndex < 0) {
//       newIndex = React.Children.count(children) - 1;
//     } else if (newIndex >= React.Children.count(children)) {
//       newIndex = 0;
//     }

//     setActiveIndex(newIndex);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (!paused) {
//         updateIndex(activeIndex + 1);
//       }
//     }, 5000);

//     return () => {
//       if (interval) {
//         clearInterval(interval);
//       }
//     };
//   });

//   const handlers = useSwipeable({
//     onSwipedLeft: () => updateIndex(activeIndex + 1),
//     onSwipedRight: () => updateIndex(activeIndex - 1),
//   });

//   return (
//     <div
//       {...handlers}
//       className={styles.carousel}
//       onMouseEnter={() => setPaused(true)}
//       onMouseLeave={() => setPaused(false)}
//     >
//       <div
//         className={styles.inner}
//         style={{ transform: `translateX(-${activeIndex * 100}%)` }}
//       >
//         {React.Children.map(children, (child, index) => {
//           return React.cloneElement(child, { width: "100%" });
//         })}
//       </div>
//       <div className={styles.indicators}>
//         <button
//           onClick={() => {
//             updateIndex(activeIndex - 1);
//           }}
//         >
//           Prev
//         </button>
//         {/* {React.Children.map(children, (child, index) => {
//           return (
//             <button
//               className={`${index === activeIndex ? "active" : ""}`}
//               onClick={() => {
//                 updateIndex(index);
//               }}
//             >
//               {index + 1}
//             </button>
//           );
//         })} */}
//         <button
//           onClick={() => {
//             updateIndex(activeIndex + 1);
//           }}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

export const Carousel = (props: carouselProps) => {
  const { children } = props;
  const containerRef = useRef(null);
  const [current, setCurren] = useState(1);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const ref = containerRef.current;
    console.log(ref);
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

  // useLayoutEffect(() => {
  //   setTranslateX(containerRef.current.clientWidth * current);
  // }, []);

  return (
    <div className={styles.root}>
      <ul
        // ref={ref}
        className={styles.carousel}
        style={{ transform: `translate3d(${-translateX}px, 0, 0)` }}
      >
        {slides}
      </ul>
    </div>
  );
};
