import React from "react";
import { useEffect, useRef, useState } from "react";
import { Card } from "../Card/Card";
import { CardSkeleton } from "../CardSkeleton/CardSkeleton";
import './LazyCard.css'

const LazyCard = (props) => {
  const [isShown, toggleShown] = useState();
  const trigger = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const isShowing = entries[0]?.isIntersecting;
      setTimeout(()=>{
          if (isShowing) {
            toggleShown(true);
          }
      }, 1000)
    });

    observer.observe(trigger.current);
    return () => {
      observer?.disconnect();
    };
  }, []);

  return isShown ? (<Card {...props} />) : (<div className="trigger" ref={trigger}><CardSkeleton /></div>);
};

export { LazyCard };
