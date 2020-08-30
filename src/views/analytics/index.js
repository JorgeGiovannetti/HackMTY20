import React, { useState, useEffect } from "react";
import firebase from "firebase";
import AppLayout from "../../common/components/AppLayout";
import Container from "../../common/components/Container";
import { Row, PageHeader } from "antd";
import LineGraph from "./components/lineGraph";
import BarGraph from "./components/barGraph";
import RadarGraph from "./components/radarGraph";
const moment = require("moment");

function barGraph(data) {
  if (data === undefined) {
    return null;
  } else {
    let barData = [];
    for (var i = 1; i < 25; i++) {
      barData.push({ name: i.toString() + ":00", Infractions: 0 });
    }
    for (var i = 0; i < data.length; i++) {
      const hours = new Date(moment.unix(data[i].timestamp)).getHours();
      barData[hours - 1].Infractions = barData[hours - 1].Infractions + 1;
    }
    console.log(barData);
    return barData;
  }
}

function lineGraph(data) {
  if (data === undefined) {
    return null;
  } else {
    let barData = [];
    for (var i = 1; i < 25; i++) {
      var min = 10;
      var max = 30;
      var random = Math.floor(Math.random() * (+max - +min)) + +min;
      barData.push({ name: i.toString() + ":00", real: 0, expected: random });
    }
    for (var i = 0; i < data.length; i++) {
      const hours = new Date(moment.unix(data[i].timestamp)).getHours();
      barData[hours - 1].real = barData[hours - 1].real + 1;
    }
    return barData;
  }
}

const Analytics = () => {
  const getMessages = async () => {
    const messagesRef = firebase.database().ref(`/reports`).limitToLast(1000);
    messagesRef.on("value", (snapshot) => {
      let messagesObj = snapshot.val();
      let messages = [];
      if (messagesObj !== null) {
        Object.keys(messagesObj).forEach((key) =>
          messages.push(messagesObj[key])
        );
        messages = messages.map((message) => {
          return {
            error: message.error,
            store: message.store,
            timestamp: message.timestamp,
          };
        });
        setDataSource(messages);
        setGraphSource(barGraph(messages));
        setLineSource(lineGraph(messages));
      }
    });
  };
  const [dataSource, setDataSource] = useState();
  const [graphSource, setGraphSource] = useState();
  const [lineSource, setLineSource] = useState();

  useEffect(() => {
    getMessages();
  }, []);
  return (
    <AppLayout>
      <PageHeader title="Analytics" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Row>
          <Container width="38vw" height="40vh">
            <RadarGraph />
          </Container>

          <Container width="38vw" height="40vh">
            <LineGraph data={lineSource} />
          </Container>
        </Row>
        <Row>
          <Container width="77vw" height="40vh">
            <BarGraph data={graphSource} />
          </Container>
        </Row>
      </div>
    </AppLayout>
  );
};

export default Analytics;
