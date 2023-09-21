import "./RowContent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBowlFood,
	faUtensils,
	faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons"; // Replace with your desired icons

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
