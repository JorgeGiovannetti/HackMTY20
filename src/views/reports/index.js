import React from "react";
import AppLayout from "../../common/components/AppLayout";
import ReportsLayout from "../../common/components/ReportsLayout";
import { PageHeader } from "antd";

const Reports = () => (
	<AppLayout>
		<PageHeader title="Video Feed" />
		<ReportsLayout />
	</AppLayout>
);

export default Reports;
