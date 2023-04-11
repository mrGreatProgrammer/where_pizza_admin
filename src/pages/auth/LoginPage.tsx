import React from "react";
import LoginForm from "../../compoents/form/auth/LoginForm";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen mt-36" >
      <h1 className="text-red-600 text-5xl" >LoginPage</h1>
      <div>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
