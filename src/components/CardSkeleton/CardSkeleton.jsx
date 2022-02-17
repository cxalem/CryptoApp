import React from "react";
import './CardSkeleton.css'

const CardSkeleton = () => (
  <>
    <div className="skeletonCard">
      <div className="skeleton-container">
        <div className="skeleton-img"></div>
        <div className="skeleton-text"></div>
        <div className="skeleton-text"></div>
      </div>
      <div className="skeleton-price"></div>
    </div>
  </>
);

export { CardSkeleton };
