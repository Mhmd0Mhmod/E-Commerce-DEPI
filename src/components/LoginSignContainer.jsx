import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

function LoginSignContainer() {
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(true);
  return (
    <div>
      <div className="w-9/12 mx-auto  flex justify-center items-center mb-10">
        <div
          onClick={() => {
            setIsLoginFormOpen(true);
          }}
          className={`w-1/2 text-center pb-2   border-b-2 cursor-pointer  ${
            isLoginFormOpen
              ? "text-primary-main border-primary-main"
              : "text-gray-717171 border-gray-717171"
          } text-lg md:text-2xl`}
        >
          login
        </div>
        <div
          onClick={() => {
            setIsLoginFormOpen(false);
          }}
          className={`w-1/2 text-center pb-2 cursor-pointer border-b-2  ${
            !isLoginFormOpen
              ? "text-primary-main border-primary-main"
              : "text-gray-717171 border-gray-717171"
          } text-lg md:text-2xl`}
        >
          create account
        </div>
      </div>
      <div className="flex overflow-hidden ">
        <LoginForm hidden={isLoginFormOpen} />
        <SignUpForm hidden={isLoginFormOpen} />
      </div>
    </div>
  );
}

export default LoginSignContainer;
