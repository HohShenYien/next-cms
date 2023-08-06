import getAuthLayout from "@/layouts/AuthLayout";
import { NextPageWithAttributes } from "../_app";
import LoginForm from "@/features/Auth/components/LoginForm";

const LoginPage: NextPageWithAttributes = () => {
  return (
    <div>
      <LoginForm />
    </div>
  );
};

LoginPage.isPublic = true;
LoginPage.getLayout = getAuthLayout;

export default LoginPage;
