import React, { useState, useEffect } from "react";
import CircleComponent, { CircleComponentProps } from "./CircleContent"; // Import your CircleComponent and its props interface
import "./styles/Carousel.css"; // You can style the carousel component with CSS

interface CarouselProps {
	circleData: CircleComponentProps[];
	interval: number; // Interval in milliseconds for transitioning between circles
}

const Carousel: React.FC<CarouselProps> = ({ circleData, interval }) => {
	const [currentIdx, setCurrentIdx] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentIdx((prevIdx) => (prevIdx + 1) % circleData.length);
		}, interval);

		return () => {
			clearInterval(intervalId);
		};
	}, [circleData, interval]);

	return (
		<div className="carousel-container">
			{circleData.map((circle, idx) => (
				<div
					key={idx}
					className={`carousel-circle ${idx === currentIdx ? "active" : ""}`}
				>
					<CircleComponent
						imageUrl={circle.imageUrl}
						heading={circle.heading}
						paragraph={circle.paragraph}
					/>
				</div>
			))}
		</div>
	);
};

export default Carousel;
