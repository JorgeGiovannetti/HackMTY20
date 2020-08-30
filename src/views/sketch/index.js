import React from "react";
import AppLayout from "../../common/components/AppLayout";
import { PageHeader } from "antd";
import SketchBuilder from "./common/SketchBuilder";

const Sketch = () => (
	<AppLayout>
		<PageHeader title="Sketch" />
		<SketchBuilder />
	</AppLayout>
);

export default Sketch;
