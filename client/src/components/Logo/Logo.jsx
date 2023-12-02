import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Logo/icon2.png';
import style from './Logo.module.css';

const Logo = () => {
  const [isFixed, setIsFixed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsFixed(scrollY === 0);
    };

    // Agrega un manejador de scroll después de montar el componente
    window.addEventListener('scroll', handleScroll);

    // Limpia el evento de scroll al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Deja la dependencia vacía para que solo se ejecute una vez al montar

  return (
    <div className={`${style.containerLogo} ${isFixed ? style.fixed : ''}`}>
      <Link to='/'>
        <img src={logo} alt='Logo' className={style.logoImg} />
      </Link>
    </div>
  );
};

export default Logo;
