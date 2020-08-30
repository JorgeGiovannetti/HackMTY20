import React, { Component } from "react";
import firebase from "firebase";
import {
  Card,
  Form,
  Row,
  Input,
  Button,
  Divider,
  Typography,
  Image,
} from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Posty from "./posty.png";

const { Item } = Form;
const { Title, Text } = Typography;

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
        <Image
          width={200}
          src={Posty}
          style={{
            position: "absolute",
            top: "8%",
            right: "45%",
          }}
        />

        <Title
          style={{
            position: "absolute",
            top: "23%",
            color: "#369BFA",
            right: "45%",
          }}
        >
          OSTy
        </Title>
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
