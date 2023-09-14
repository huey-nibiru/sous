import Header from "../components/Header";
import Banner from "../components/Banner";
import ContentRow from "../components/RowContent";
import { Carousel, circleData } from "../components/Carousel";
import Footer from "../components/Footer";

export default function () {
	return (
		<>
			<Header />

			<Banner />
			<ContentRow />

			<Carousel circleData={circleData} interval={5000} />

			<Footer />
		</>
	);
}
