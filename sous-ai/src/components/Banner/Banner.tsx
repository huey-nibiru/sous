import "./Banner.css";

{
	/* This contains the home screen image of the assortment of foods contained in the header*/
}
export default function () {
	return (
		<>
			{/* Banner image*/}
			<div className="banner-container">
				<img
					className="banner-image"
					src="./src/assets/food_platter.png"
					alt="Food Platter"
				/>
			</div>
		</>
	);
}
