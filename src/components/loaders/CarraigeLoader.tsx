import React from "react";
import "./CarraigeLoader.scss";
import Image from "next/image";

const CarraigeLoader: React.FC = () => {
  return (
    <div className="carraige-loader-wrapper">
      <Image
        src="/images/carraige.gif"
        alt="carraige"
        width={256.5}
        height={132.354}
      />

      <div className="carraige-text-wrapper">
        <div className="carraige-text-wrapper-item">
          Clip, clop, clip, clop...
        </div>
        <div className="carraige-text-wrapper-item">
          By Jove, hold your horses!
        </div>
        <div className="carraige-text-wrapper-item">
          Patience, good fellow. Patience.
        </div>
        <div className="carraige-text-wrapper-item">
          Clip, clop, clip, clop...
        </div>
        <div className="carraige-text-wrapper-item">
          By Jove, hold your horses!
        </div>
        <div className="carraige-text-wrapper-item">
          Patience, good fellow. Patience.
        </div>
      </div>
    </div>
  );
};

export default CarraigeLoader;

