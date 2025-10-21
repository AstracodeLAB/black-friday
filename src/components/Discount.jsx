import { useState } from 'react';
import '../styles/Discount.scss';

const Discount = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
      setEmail('');
      setSubmitted(false);
    }, 2500);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (email.trim() === '') return;
  //   // Aquí podrías conectar con tu backend o una automatización de correo
  //   setSubmitted(true);
  //   setTimeout(() => {
  //     setIsOpen(false);
  //     setEmail('');
  //     setSubmitted(false);
  //   }, 2500);
  // };

  return (
    <>
      <div className='discount__container'>
        <p className='discount__text'>
          Obtén tu <span>20% de descuento</span>
        </p>
        <button className='discount__button' onClick={() => setIsOpen(true)}>
          ¡Lo quiero!
        </button>
      </div>

      {isOpen && (
        <div className='modal'>
          <div className='modal__overlay' onClick={() => setIsOpen(false)}></div>
          <div className='modal__content'>
            {!submitted ? (
              <>
                <h3 className='modal__title'>Recibe tu código de descuento</h3>
                

                <form name='discount' method='POST' data-netlify='true' className='modal__form' onSubmit={handleSubmit}>
                  {/* Campo oculto requerido por Netlify */}
                  <input type='hidden' name='form-name' value='discount' />
                  <input
                    type='email'
                    name='email'
                    placeholder='Introduce tu email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className='modal__input'
                  />
                  <button type='submit' className='modal__submit'>
                    Enviar
                  </button>
                </form>
              </>
            ) : (
              <p className='modal__success'>¡Código enviado a tu correo! 🎉</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Discount;
