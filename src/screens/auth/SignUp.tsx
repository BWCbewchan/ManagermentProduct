import { Button, Card, Form, Input, Space, Typography } from "antd";
import { useState } from "react";
import { Link } from 'react-router-dom';
import SocialLogin from "./components/SocialLogin";
// import { Link } from "react-router-dom";
const { Title, Paragraph, Text} = Typography;

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRemember, setIsRemember] = useState(false);
  const [from] = Form.useForm();
  const handleLogin = (values: {name:String, email: String; password: String }) => {
    console.log(values);
  };
  return (
    <div>
      <Card style={{marginTop: "50%"}}>
        <div className="text-center">
          <Title level={2}>Create an account</Title>
          <Paragraph type="secondary">
            Start your 30-day free trial.
          </Paragraph>
          <Form
            layout="vertical"
            form={from}
            onFinish={handleLogin}
            disabled={isLoading}
            size="large"
          >
            <Form.Item
              name={"name"}
              label={"Name"}
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
                },
              ]}
            >
              <Input placeholder="Enter your name" allowClear  type="name"></Input>
            </Form.Item>
            <Form.Item
              name={"email"}
              label={"Email"}
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input placeholder="Enter your email" allowClear type="email"></Input>
            </Form.Item>

            <Form.Item
              name={"password"}
              label={"Password"}
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password placeholder="Enter your password" maxLength={100} type="password"></Input.Password>
            </Form.Item>
          </Form>

          <div className="mt-4">
            <Button
              onClick={() => from.submit()}
              type="primary"
              style={{ width: "100%" }}
              size="large"
            >
              Sign Up
            </Button>
          </div>
        </div>
        <SocialLogin />
        <div className="text-center mt-3 ">
            <Space>
              <Text type="secondary">Already have an account? </Text>
              <Link to={"/"}>Login</Link>
            </Space>
        </div>
      </Card>
    </div>
  );
}

export default SignUp
