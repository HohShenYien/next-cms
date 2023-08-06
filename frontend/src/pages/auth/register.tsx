import getAuthLayout from "@/layouts/AuthLayout";
import { NextPageWithAttributes } from "../_app";
import RegisterForm from "@/features/Auth/components/RegisterForm";

const RegisterPage: NextPageWithAttributes = () => {
  return (
    <div>
      <RegisterForm />
    </div>
  );
};

RegisterPage.isPublic = true;
RegisterPage.getLayout = getAuthLayout;

export default RegisterPage;
