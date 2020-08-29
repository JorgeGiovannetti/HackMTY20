import React from "react";
import SideNav from "../SideNav";

const AppLayout = ({ children }) => (
  <div style={{ display: "flex" }}>
    <SideNav />
    <div style={{ display: "flex", flexDirection: "column" }}>{children}</div>
  </div>
);

export default AppLayout;
