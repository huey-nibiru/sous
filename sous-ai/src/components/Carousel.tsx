import React, { useState, useEffect } from "react";
import CircleComponent from "./CircleContent"; // Import your CircleComponent and its props interface
import "./styles/Carousel.css"; // You can style the carousel component with CSS

interface CarouselProps {
	circleData: [];
	interval: number; // Interval in milliseconds for transitioning between circles
}
const circleData = [
	{
		imageUrl: "image1.png",
		heading: "1. Personalize Your Profile",
		paragraph:
			"Tell us about your dietary preferences, restrictions, and goals. Whether you're vegan, gluten-free, or aiming to lose weight, we've got you covered!",
	},
	{
		imageUrl: "image2.jpg",
		heading: "2. Explore Your Meal Options",
		paragraph:
			"Once your profile is set, choose from a world of culinary possibilities. Browse through your personalized meal options for breakfast, lunch, dinner, and snacks.",
	},
	{
		imageUrl: "image3.jpg",
		heading: "3. Plan",
		paragraph:
			"When you're ready to hit the grocery store, our app generates a shopping list tailored to your meal plan. No more guesswork – shop with confidence!",
	},
	{
		imageUrl: "image4.jpg",
		heading: "4. Cook & Enjoy",
		paragraph:
			"Enjoy the flavors of your custom-made dishes. Nourish your body while indulging in meals that align with your dietary needs.",
	},
	{
		imageUrl: "image5.jpg",
		heading: "5. Make Smart Shopping Lists",
		paragraph:
			"When you're ready to hit the grocery store, our app generates a shopping list tailored to your meal plan. No more guesswork – shop with confidence!",
	},
	// Add more circle data as needed
];
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

export { Carousel, circleData };
