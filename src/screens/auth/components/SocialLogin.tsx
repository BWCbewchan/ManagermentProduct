import { Button } from "antd";

const SocialLogin = () => {
  return (
    <Button className="mt-4" style={{width:"100%"}} size="large"
      icon={
        <img
          width="24"
          height="24"
          src="https://img.icons8.com/fluency/48/google-logo.png"
          alt="google-logo"
        />
      }
    >Google</Button>
  );
};

export default SocialLogin;
