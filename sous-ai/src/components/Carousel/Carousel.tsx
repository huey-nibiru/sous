import React, { useState, useEffect } from "react";
import CircleComponent, {
	CircleComponentProps,
} from "../CircleContent/CircleContent"; // Import your CircleComponent and its props interface

import "./Carousel.css"; // You can style the carousel component with CSS
import touchscreen from "../../assets/touchscreen.png";
import dinner_table from "../../assets/dinner_table.png";
import basket from "../../assets/basket.png";
import planner from "../../assets/planner.png";
import cooking from "../../assets/cooking.png";

// Define the interface for the Carousel component's props
interface CarouselProps {
	circleData: CircleComponentProps[]; // An array of circle data to display in the carousel
	interval: number; // Interval in milliseconds for transitioning between circles
}

// Define an array of circle data to be displayed in the carousel
const circleData = [
	{
		imageUrl: touchscreen,
		img_alt: "touchscreen",
		heading: "1. Personalize Your Profile",
		paragraph:
			"Tell us about your dietary preferences, restrictions, and goals. Whether you're vegan, gluten-free, or aiming to lose weight, we've got you covered!",
	},
	{
		imageUrl: dinner_table,
		img_alt: "dinner table",
		heading: "2. Explore Your Meal Options",
		paragraph:
			"Once your profile is set, choose from a world of culinary possibilities. Browse through your personalized meal options for breakfast, lunch, dinner, and snacks.",
	},
	{
		imageUrl: planner,
		img_alt: "planner",
		heading: "3. Plan",
		paragraph:
			"When you're ready to hit the grocery store, our app generates a shopping list tailored to your meal plan. No more guesswork – shop with confidence!",
	},
	{
		imageUrl: cooking,
		img_alt: "cooking",
		heading: "4. Cook & Enjoy",
		paragraph:
			"Enjoy the flavors of your custom-made dishes. Nourish your body while indulging in meals that align with your dietary needs.",
	},
	{
		imageUrl: basket,
		img_alt: "basket",
		heading: "5. Make Smart Shopping Lists",
		paragraph:
			"When you're ready to hit the grocery store, our app generates a shopping list tailored to your meal plan. No more guesswork – shop with confidence!",
	},
	// Add more circle data as needed
];

// Define the Carousel component as a functional React component
const Carousel: React.FC<CarouselProps> = ({ circleData, interval }) => {
	// State to keep track of the currently displayed circle
	const [currentIdx, setCurrentIdx] = useState(0);

	// Use an effect to handle automatic transitioning between circles
	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentIdx((prevIdx) => (prevIdx + 1) % circleData.length);
		}, interval);

		// Cleanup the interval when the component unmounts
		return () => {
			clearInterval(intervalId);
		};
	}, [circleData, interval]);

	return (
		<div className="carousel-container">
			{/* Map through the circle data and render each circle in the carousel */}
			{circleData.map((circle, idx) => (
				<div
					key={idx}
					className={`carousel-circle ${idx === currentIdx ? "active" : ""}`}
				>
					{/* Render the CircleComponent with the data from the circleData array */}
					<CircleComponent
						imageUrl={circle.imageUrl}
						img_alt={circle.img_alt}
						heading={circle.heading}
						paragraph={circle.paragraph}
					/>
				</div>
			))}
		</div>
	);
};

// Export the Carousel component and the circleData array for use in other parts of your application
export { Carousel, circleData };
