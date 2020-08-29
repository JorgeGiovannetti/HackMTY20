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
        <Container>
          <RadarGraph />
        </Container>

        <Container>
          <LineGraph />
        </Container>
      </Row>
      <Row>
        <BarGraph />
      </Row>
    </div>
  </AppLayout>
);

export default Analytics;
