import React from "react";
import RegisterForm from "../../compoents/form/auth/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen mt-36">
      <h1>RegisterPage</h1>
      <div>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
