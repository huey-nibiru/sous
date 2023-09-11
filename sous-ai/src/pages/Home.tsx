import Header from "../components/Header";
import ContentRow from "../components/ContentRow";
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
					imageUrl="your-image-url.jpg"
					heading="Circle Heading"
					paragraph="This is a paragraph inside the circle."
				/>
			</div>
		</>
	);
}
