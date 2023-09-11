import Header from "../components/Header";
import ContentRow from "../components/RowContent";
import CircleComponent from "../components/CircleContent";
import "../assets/touchscreen.png";

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
					imageUrl="file:///var/folders/fm/gf09nxpx12n_7pcjsnlx5yt00000gn/T/TemporaryItems/NSIRD_screencaptureui_WUHnav/Screen%20Shot%202023-09-11%20at%206.52.05%20PM.png"
					heading="1. Personalize Your Profile"
					paragraph="Tell us about your dietary preferences, restrictions, and goals. 
					Whether you're vegan, gluten-free, or aiming to lose weight, we've got you covered!"
				/>
			</div>
		</>
	);
}
