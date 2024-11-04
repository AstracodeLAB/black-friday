import { useState, useEffect } from 'react';
import '../styles/Countdown.scss';

const BlackFridayCountdown = () => {
	const targetDate = new Date('2024-11-29T00:00:00'); // Fecha de Black Friday
	const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

	useEffect(() => {
		const intervalId = setInterval(() => {
			const now = new Date();
			const difference = targetDate - now;

			if (difference <= 0) {
				clearInterval(intervalId);
			} else {
				const days = Math.floor(difference / (1000 * 60 * 60 * 24));
				const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
				const minutes = Math.floor((difference / (1000 * 60)) % 60);
				const seconds = Math.floor((difference / 1000) % 60);
				setTimeLeft({ days, hours, minutes, seconds });
			}
		}, 1000);

		return () => clearInterval(intervalId); // Limpia el intervalo al desmontar el componente
	}, []);

	return (
		<section className='countdown'>
			<article className='countdown__item'>
				<p className='countdown__item-number'>{timeLeft.days}</p>

				<p className='countdown__item-word'>días</p>
			</article>
			<article className='countdown__item'>
				<p className='countdown__item-number'>{timeLeft.hours}:</p>

				<p className='countdown__item-word'>horas</p>
			</article>
			<article className='countdown__item'>
				<p className='countdown__item-number'>{timeLeft.minutes}:</p>

				<p className='countdown__item-word'>minutos</p>
			</article>
			<article className='countdown__item'>
				<p className='countdown__item-number'>{timeLeft.seconds}</p>

				<p className='countdown__item-word'>segundos</p>
			</article>
		</section>
	);
};

export default BlackFridayCountdown;
