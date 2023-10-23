import "./RowContent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBowlFood,
	faUtensils,
	faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons"; // Import the FontAwesome icons (Replace with your desired icons)

// iconData is an array of objects containing icon and text data

const iconData = [
	{
		icon: faBowlFood,
		text: "🥦  Customized for You: Tell us your restrictions, allergies, and preferences.",
	},
	{
		icon: faUtensils,
		text: "🍽️  Tailored Deliciousness: Enjoy meals that adhere to your dietary needs, minus the compromise on taste.",
	},
	{
		icon: faPeopleGroup,
		text: "📋  Adaptable and Inclusive: Vegan, gluten-free, keto? Your plan, your way.",
	},
];

// IconRow is a React component that displays a row of icons and their descriptions
const IconRow = () => {
	return (
		<>
			<br />
			<div className="icon-row">
				{iconData.map((item, index) => (
					<div className="icon-container" key={index}>
						<FontAwesomeIcon icon={item.icon} size="5x" />
						<p>{item.text}</p>
					</div>
				))}
			</div>
		</>
	);
};

export default IconRow;
