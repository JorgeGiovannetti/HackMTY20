import React from "react";
import AppLayout from "../../common/components/AppLayout";
import Container from "../../common/components/Container";
import { Row } from "antd";
import LineGraph from "./components/lineGraph";
import BarGraph from "./components/barGraph";
import RadarGraph from "./components/radarGraph";

const Analytics = () => (
  <AppLayout>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Row>
        <Container width="40vw" height="40vh">
          <RadarGraph />
        </Container>

        <Container width="40vw" height="40vh">
          <LineGraph width="50%" />
        </Container>
      </Row>
      <Row>
        <Container width="80vw" height="40vh">
          <BarGraph />
        </Container>
      </Row>
    </div>
  </AppLayout>
);

export default Analytics;
