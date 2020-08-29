import React from "react";

const Cam = ({ width, height }) => (
  <img
    src="http://localhost:5000/video_feed"
    alt="Video"
    style={{ width: width ? width : "70%", height: height ? height : "100%" }}
  />
);

export default Cam;
