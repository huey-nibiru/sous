import "./styles/Banner.css";
import Header from "../components/Header";
import ContentRow from "../components/ContentRow";
import Circle from "../components/ContentCircle";

export default function () {
	return (
		<>
			<div className="home-page">
				<Header />
				<div className="banner-container">
					<img
						src="./src/assets/food_platter.png"
						alt="Your Image"
						className="banner-image"
					/>
				</div>
				<ContentRow />
				<Circle />
			</div>
		</>
	);
}
