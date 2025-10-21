import { useState, useEffect } from 'react';
import '../styles/CookiesBanner.scss';

const CookiesBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('cookiesAccepted');
    if (!accepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  const handleDeny = () => {
    localStorage.setItem('cookiesDenied', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className='cookies-banner'>
      <p>
        Usamos cookies para mejorar tu experiencia en nuestra web. Al continuar navegando, aceptas nuestra política de
        cookies.
      </p>
      <button className='cookies-banner__button' onClick={handleAccept}>
        Aceptar
      </button>
      <button className='cookies-banner__button cookies-banner__button--deny' onClick={handleDeny}>
        Denegar
      </button>
    </div>
  );
};

export default CookiesBanner;
