import Header from "../components/Header";
import Banner from "../components/Banner";
import ContentRow from "../components/RowContent";
import { Carousel, circleData } from "../components/Carousel";
import RedBoxWithImage from "../components/Trial";
import "./styles.css";

export default function () {
	return (
		<>
			<Header />
			<Banner />
			<ContentRow />
			<RedBoxWithImage
				imageUrl="your-image-url.jpg"
				linkUrl="https://typeform.com"
			/>

			<Carousel circleData={circleData} interval={1000} />
			<div className="footer-pad">
				<footer className="footer">Sous</footer>
			</div>
		</>
	);
}
