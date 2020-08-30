import React, { useState } from "react";
import { Spin } from "antd";

const Cam = () => {
	const [camError, setCamError] = useState(false);
	const [loading, setLoading] = useState(true);

	const onCamError = () => setCamError(true);
	const onLoad = () => setLoading(false);

	return (
		<div style={{ marginRight: "5%", width: "70%" }}>
			{(camError || loading) && (
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						width: "500px",
						height: "500px",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					{camError ? (
						<img
							style={{ borderRadius: "15px" }}
							src={require("../common/img/VideoOffline.png")}
							alt="Video Offline"
						/>
					) : (
						<Spin size="large" />
					)}
				</div>
			)}
			<img
				style={{
					display: loading ? "none" : "block",
					borderRadius: "15px",
					width: "100%",
				}}
				src="http://localhost:5000/video_feed"
				alt="Video"
				onError={onCamError}
				onLoad={onLoad}
			/>
		</div>
	);
};

export default Cam;
