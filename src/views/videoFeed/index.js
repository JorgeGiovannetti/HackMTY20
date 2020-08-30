import React from "react";
import { PageHeader, Row } from "antd";
import AppLayout from "../../common/components/AppLayout";
import Cam from "../../templates";
import Feed from "./feed";

const VideoFeed = () => (
  <AppLayout>
    <PageHeader title="Video Feed" />
    <Row>
      <Cam style={{ minWidth: "50%", marginRight: "5%" }} />
      <Feed />
    </Row>
  </AppLayout>
);

export default VideoFeed;
