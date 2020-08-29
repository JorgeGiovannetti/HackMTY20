import React, { Component } from "react";
import firebase from "firebase";
import { Card, Form, Input, Button, Divider, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const { Item } = Form;
const { Text } = Typography;

class Login extends Component {
  onFinish = (values) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then(() => {
        console.log("success");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "15%",
        }}
      >
        <Card style={{ maxWidth: 450, width: "100%" }}>
          <Form onFinish={this.onFinish}>
            <Item
              name="email"
              rules={[
                {
                  type: "email",
                  message: "Ingresa un correo válido",
                },
                { required: true, message: "Ingresa tu email" },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder="Email" />
            </Item>
            <Item
              style={{ marginTop: 10 }}
              name="password"
              rules={[{ required: true, message: "Ingresa tu password" }]}
            >
              <Input
                prefix={<LockOutlined />}
                type="password"
                placeholder="Password"
              />
            </Item>
            <Item style={{ marginTop: 20 }}>
              <Button block type="primary" htmlType="submit">
                Log in
              </Button>
            </Item>
          </Form>
          <Divider>
            <Text style={{ fontSize: 10 }} type="secondary">
              ¿Aún no tienes una cuenta?
            </Text>
          </Divider>
        </Card>
      </div>
    );
  }
}

export default Login;
