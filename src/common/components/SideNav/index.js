import React, { Component } from "react";
import { Menu, Layout } from "../ReportsLayout/node_modules/antd";
import {
	VideoCameraOutlined,
	DatabaseOutlined,
	FormOutlined,
} from "@ant-design/icons";
import { Link, withRouter } from "react-router-dom";

const { Sider } = Layout;

class SideNav extends Component {
	render() {
		const {
			location: { pathname },
		} = this.props;

		return (
			<Sider>
				<div className="logo" />
				<Menu
					theme="light"
					mode="inline"
					selectedKeys={["/" + pathname.split("/")[1]]}
				>
					<Menu.Item key="/">
						<Link to="/"></Link>
						<VideoCameraOutlined />
						<span className="nav-text">Video Feed</span>
					</Menu.Item>
					<Menu.Item key="/Analytics">
						<Link to="/"></Link>
						<DatabaseOutlined />
						<span className="nav-text">Analytics</span>
					</Menu.Item>
					<Menu.Item key="/reports">
						<Link to="/"></Link>
						<FormOutlined />
						<span className="nav-text">Reports</span>
					</Menu.Item>
				</Menu>
			</Sider>
		);
	}
}

export default withRouter(SideNav);
