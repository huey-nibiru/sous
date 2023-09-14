import Header from "../components/Header";
import Banner from "../components/Banner";
import ContentRow from "../components/RowContent";
import { Carousel, circleData } from "../components/Carousel";
import "./styles/Footer.css";

export default function () {
	return (
		<>
			<Header />
			<Banner />
			<ContentRow />
			<Carousel circleData={circleData} interval={1000} />
			<div className="footer-pad">
				<footer className="footer">Sous</footer>
			</div>
		</>
	);
}
