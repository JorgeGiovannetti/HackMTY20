import React from "react";
import { PageHeader } from "antd";
import AppLayout from "../../common/components/AppLayout";
import Cam from "../../templates";
import Feed from "./feed";

const VideoFeed = () => (
	<AppLayout>
		<PageHeader title="Video Feed" />
		<Cam />
		<Feed />
	</AppLayout>
);

export default VideoFeed;
