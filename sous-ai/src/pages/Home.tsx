import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import ContentRow from "../components/Rows/RowContent";
import { Carousel, circleData } from "../components/Carousel/Carousel";
import RedBoxWithImage from "../components/Trial/Trial";
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
