import React, { useEffect, useRef } from "react";
import anime from "animejs";
import "./styles/Ambience.css";

interface StaggeredGridAnimationProps {
	rows: number;
	columns: number;
}

const StaggeredGridAnimation: React.FC<StaggeredGridAnimationProps> = ({
	rows,
	columns,
}) => {
	const boxesRef = useRef<HTMLDivElement[]>([]);

	useEffect(() => {
		const boxes = boxesRef.current;

		if (boxes && boxes.length > 0) {
			anime
				.timeline({
					easing: "easeOutSine",
					duration: 15000,
				})
				.add({
					targets: boxes,
					translateY: [-100, 0],
					opacity: [0, 1],
					delay: anime.stagger(200, { grid: [rows, columns], from: "center" }), // Grid staggering effect
				});
		}
	}, [rows, columns]);

	const createGrid = () => {
		const grid = [];

		for (let i = 0; i < rows; i++) {
			for (let j = 0; j < columns; j++) {
				const index = i * columns + j;
				grid.push(
					<div
						key={index}
						ref={(el) => (boxesRef.current[index] = el!)}
						className="box"
					></div>
				);
			}
		}

		return grid;
	};

	return <div className="grid-container">{createGrid()}</div>;
};

export default StaggeredGridAnimation;
