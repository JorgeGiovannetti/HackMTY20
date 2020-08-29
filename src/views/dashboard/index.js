import React from "react";
import Cam from "../../templates";
import Feed from "./feed";
import AppLayout from "../../common/components/AppLayout";

const Dashboard = () => (
  <AppLayout>
    <Cam />
    <Feed />
  </AppLayout>
);

export default Dashboard;
