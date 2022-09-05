// import React, { useState } from "react";
// import { Colors, Section } from "../Common/Section";
// import { Type, Typography } from "../Common/Typography";
// import styles from "./Carousel.module.scss";

// export const Carousel = () => {
//   const [index, setIndex] = useState(0);

//   const carouselContent = [
//     {
//       title: "Text1",
//       text: "Lorem ipsum dolor sit ameta coś tam dalej jeszcze było, ale za nic nie pamięcam co to było. Jaiś tekst po łacinie z równomiernym rozkładem słów i liter, tak by był dobry jako przykład.",
//     },
//     {
//       title: "Text2",
//       text: "Lorem lorem ipsum dolor sit amet. Lorem ipsum coś tam dalej jeszcze było, ale za nic nie pamięcam co to było. Jaiś tekst po łacinie z równomiernym rozkładem słów i liter, tak by był dobry jako przykład.",
//     },
//     {
//       title: "Text3",
//       text: "Lorem ipsum dolor sit amet. Coś tam dalej jeszcze było, ale za nic nie pamięcam co.",
//     },
//   ];

//   const addIndexNumber = () => {
//     if (index === carouselContent.length - 1) {
//       setIndex(0);
//       return;
//     }
//     setIndex(index + 1);
//   };

//   const removeIndexNumber = () => {
//     if (index === 0) {
//       setIndex(carouselContent.length - 1);
//       return;
//     }
//     setIndex(index - 1);
//   };

//   return (
//     <Section backgroundColor={Colors.beige}>
//       <div className={styles.carousel}>
//         <button onClick={() => removeIndexNumber()}>Left</button>
//         <div className={styles.content}>
//           <Typography type={Type.BodyF20S24}>
//             {carouselContent[index].title}
//           </Typography>
//           <Typography type={Type.BodyF12S16}>
//             {carouselContent[index].text}
//           </Typography>
//         </div>
//         <button onClick={() => addIndexNumber()}>Right</button>
//         {/* <FontAwesomeIcon icon="fa-regular fa-caret-right" /> */}
//       </div>
//     </Section>
//   );
// };

import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

import "./Carousel.scss";

export const CarouselItem = ({ children, width }: any) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      {children}
    </div>
  );
};

export const Carousel = ({ children }: any) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 3000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  return (
    <div
      {...handlers}
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className="indicators">
        <button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          Prev
        </button>
        {React.Children.map(children, (child, index) => {
          return (
            <button
              className={`${index === activeIndex ? "active" : ""}`}
              onClick={() => {
                updateIndex(index);
              }}
            >
              {index + 1}
            </button>
          );
        })}
        <button
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};
