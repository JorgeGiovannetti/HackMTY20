import { Table, Space } from "antd";
import firebase from "firebase";
import React, { useState, useEffect } from "react";

const ReportsLayout = () => {
	const columns = [
		{
			title: "Type",
			dataIndex: "error",
			key: "error",
			render: (text) => <div>{text}</div>,
		},
		{
			title: "TimeStamp",
			dataIndex: "timestamp",
			key: "timestamp",
		},
		{
			title: "Store",
			dataIndex: "store",
			key: "store",
		},
		{
			title: "Action",
			key: "action",
			render: (text, record) => (
				<Space size="middle">
					<a href>Delete</a> {/* TODO (Abdo): Delete from firebase */}
				</Space>
			),
		},
	];

	const getMessages = () => {
		const messagesRef = firebase.database().ref(`/reports`).limitToLast(100);
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
			}
		});
	};

	const [dataSource, setDataSource] = useState();
	useEffect(() => {
		getMessages();
	}, []);

	return <Table columns={columns} dataSource={dataSource} />;
};

export default ReportsLayout;
