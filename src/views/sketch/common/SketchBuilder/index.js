import React from "react";
import { Stage, Layer, Circle, Text } from "react-konva";
import Container from "../../../../common/components/Container";

function generateShapes() {
	return [...Array(10)].map((_, i) => ({
		id: i.toString(),
		x: Math.random() * window.innerWidth,
		y: Math.random() * window.innerHeight,
		rotation: Math.random() * 180,
		isDragging: false,
	}));
}

const INITIAL_STATE = generateShapes();

const SketchBuilder = ({ diameter, quota, tables }) => {
	const [circles, setCircles] = React.useState(INITIAL_STATE);

	const handleDragCirclet = (e) => {
		const id = e.target.id();
		setCircles(
			circles.map((circle) => {
				return {
					...circle,
					isDragging: circle.id === id,
				};
			})
		);
	};
	const handleDragEnd = (e) => {
		setCircles(
			circles.map((circle) => {
				return {
					...circle,
					isDragging: false,
				};
			})
		);
	};

	return (
		<Container style={{ marginRight: "10%" }}>
			<Stage width={window.innerWidth * 0.75} height={window.innerHeight}>
				<Layer>
					{circles.map((circle) => (
						<Circle
							key={circle.id}
							id={circle.id}
							x={circle.x}
							y={circle.y}
							radius={window.innerWidth / 50}
							fill="#89b717"
							opacity={0.8}
							draggable
							rotation={circle.rotation}
							shadowColor="black"
							shadowBlur={10}
							shadowOpacity={0.6}
							shadowOffsetX={circle.isDragging ? 10 : 5}
							shadowOffsetY={circle.isDragging ? 10 : 5}
							scaleX={circle.isDragging ? 1.2 : 1}
							scaleY={circle.isDragging ? 1.2 : 1}
							onDragCirclet={handleDragCirclet}
							onDragEnd={handleDragEnd}
						/>
					))}
				</Layer>
			</Stage>
		</Container>
	);
};

export default SketchBuilder;
