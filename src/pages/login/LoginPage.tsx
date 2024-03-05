import LoginForm from "../../ui/loginPage/LoginForm";

const LoginPage = () => {
  return (
    <main className=" min-h-screen flex justify-center items-center flex-col gap-y-8 lg:flex-row lg:justify-around bg-gray-50 h-full">
      <div className=" flex justify-center items-center  w-80 h-64">
        <div className="w-80 h-64 ">
          .
          <img
            className="rounded-[75px] object-cover"
            src="https://i.pinimg.com/564x/dc/07/e1/dc07e114c15ac93d042be32b6851a0db.jpg"
            alt=""
          />
        </div>
      </div>

      <LoginForm />
    </main>
  );
};

export default LoginPage;
