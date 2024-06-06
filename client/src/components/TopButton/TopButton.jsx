import { useState, useEffect } from 'react';
import style from './TopButton.module.css';
import { FaArrowUp } from "react-icons/fa";

const TopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  return (
    <>
      {isVisible && (
        <button onClick={scrollToTop} className={style.arrow}>
            <FaArrowUp/>
        </button>
      )}
    </>
  );
};

export default TopButton;
