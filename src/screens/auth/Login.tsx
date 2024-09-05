import { Button, Card, Checkbox, Form, Input, Space, Typography } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import SocialLogin from "./components/SocialLogin";

const { Title, Paragraph, Text} = Typography;

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRemember, setIsRemember] = useState(false);
  const [from] = Form.useForm();
  const handleLogin = (values: { email: String; password: String }) => {
    console.log(values);
  };
  return (
    <div>
      <Card style={{marginTop: "50%"}}>
        <div className="text-center">
          <Title level={2}>Log in to your account</Title>
          <Paragraph type="secondary">
            Welcome back! Please enter your details.
          </Paragraph>
          <Form
            layout="vertical"
            form={from}
            onFinish={handleLogin}
            disabled={isLoading}
            size="large"
          >
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
              <Input allowClear maxLength={100} type="email"></Input>
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
              <Input.Password maxLength={100} type="password"></Input.Password>
            </Form.Item>
          </Form>

          <div className="row">
            <div className="col text-left">
              <Checkbox
                checked={isRemember}
                onChange={(val) => setIsRemember(val.target.checked)}
              >
                Remember
              </Checkbox>
            </div>
            <div className="col text-right">
              <Link to={"/forgot-password"}>Forgot Password?</Link>
            </div>
          </div>
          <div className="mt-4">
            <Button
              onClick={() => from.submit()}
              type="primary"
              style={{ width: "100%" }}
              size="large"
            >
              Login
            </Button>
          </div>
        </div>
        <SocialLogin />
        <div className="text-center mt-3">
            <Space>
              <Text type="secondary">Don't have an account? </Text>
              <Link to={"/sign-up"}>Sign Up</Link>
            </Space>
        </div>
      </Card>
    </div>
  );
};
export default Login;
