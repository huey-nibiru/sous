import Header from "../components/Header";
import ContentRow from "../components/RowContent";
import CircleComponent from "../components/CircleContent";

export default function () {
	return (
		<>
			<div className="home-page">
				<Header />
			</div>
			<div className="content-row">
				<ContentRow />
			</div>
			<div>
				<CircleComponent
					imageUrl=""
					heading="1. Personalize Your Profile"
					paragraph="Tell us about your dietary preferences, restrictions, and goals. 
					Whether you're vegan, gluten-free, or aiming to lose weight, we've got you covered!"
				/>
			</div>
		</>
	);
}
