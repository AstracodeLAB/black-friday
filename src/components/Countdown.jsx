import { useState, useEffect } from 'react';

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

		return () => clearInterval(intervalId);
	}, []);

	return (
		<div>
			<p>{`${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}</p>
		</div>
	);
};

export default BlackFridayCountdown;
