import LoginForm from "../../ui/loginPage/LoginForm";

const LoginPage = () => {
  
  return (
    <main className=" min-h-screen flex justify-center items-center flex-col gap-y-8 lg:flex-row lg:justify-around bg-gray-50 h-full">
      <div className=" flex justify-center items-center  w-80 h-64">
        <div className="w-80 h-64">
          .
          <img src="public\assets\keys.png" alt="" />
        </div>
      </div>

      <LoginForm />
    </main>
  );
};

export default LoginPage;
