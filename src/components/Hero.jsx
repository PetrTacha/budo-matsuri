import React from "react";
import styles from '@/components/Hero.module.scss';

const Hero = () => {
  return (
    <section className={`${styles.row} ${styles.greyRow}`}>
      <div className="container mx-auto flex items-center justify-center flex-col relative z-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center">Welcome to Our Website</h1>
        <p className="text-lg lg:text-xl mb-8 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button className="bg-white text-blue-500 py-2 px-6 rounded-full shadow-lg hover:bg-blue-400 transition duration-300 ease-in-out">Get Started</button>
      </div>
      <div className={`absolute inset-0 z-0 ${styles.bgOverlay}`}></div> {/* Overlay */}
      {/* <style jsx>{`
        .bg-overlay {
          background-image: url('/bg-wave.png') ;
          background-color: transparent;
          background-repeat: repeat;
          background-size: auto;
          opacity: 0.30;
          // background-color: transparent;
        }
        .grey-row{
           background: #F5F5F5;
          //background-color: black;
        }
      `}</style> */}
    </section>
  );
};

export default Hero;
