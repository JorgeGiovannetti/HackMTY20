import React, { useState, useEffect } from "react";
import { Form, Input, Button } from "antd";
import AppLayout from "../../common/components/AppLayout";
import { PageHeader } from "antd";
import SketchBuilder from "./common/SketchBuilder";

const Sketch = () => {
  const [measure, setMeasure] = useState();
  const [form] = Form.useForm();
  const [, forceUpdate] = useState();

  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = (values) => {
    setMeasure(values);
  };
  let action = null;
  if (measure !== undefined) {
    action = (
      <SketchBuilder
        diameter={measure.diameter}
        quota={measure.quota}
        tables={measure.tables}
      />
    );
  }
  return (
    <AppLayout>
      <PageHeader title="Sketch" />
      <Form
        form={form}
        name="horizontal_login"
        layout="inline"
        onFinish={onFinish}
      >
        <Form.Item
          name="diameter"
          rules={[{ required: true, message: "Please input your diameter!" }]}
        >
          <Input placeholder="Diameter (Meters)" />
        </Form.Item>
        <Form.Item
          name="quota"
          rules={[{ required: true, message: "Please input your quota!" }]}
        >
          <Input placeholder="Quota" />
        </Form.Item>
        <Form.Item
          name="tables"
          rules={[
            { required: true, message: "Please input your number of tables" },
          ]}
        >
          <Input placeholder="Num of Tables" />
        </Form.Item>
        <Form.Item shouldUpdate={true}>
          {() => (
            <Button
              type="primary"
              htmlType="submit"
              disabled={
                !form.isFieldsTouched(true) ||
                form.getFieldsError().filter(({ errors }) => errors.length)
                  .length
              }
            >
              Submit
            </Button>
          )}
        </Form.Item>
      </Form>
      {action}
    </AppLayout>
  );
};

export default Sketch;
