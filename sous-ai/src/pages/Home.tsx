import "./styles/HomeImage.css";
import Header from "../components/Header";
import ContentRow from "../components/ContentRow";

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
			</div>
		</>
	);
}
