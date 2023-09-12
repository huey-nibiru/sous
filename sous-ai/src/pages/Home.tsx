import Header from "../components/Header";
import Banner from "../components/Banner";
import ContentRow from "../components/RowContent";
import Carousel from "../components/Carousel";

const circleData = [
	{
		imageUrl: "image1.jpg",
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

export default function () {
	return (
		<>
			<Header />
			<Banner />
			<ContentRow />
			<Carousel circleData={circleData} interval={3000} />
			<Banner />
		</>
	);
}
