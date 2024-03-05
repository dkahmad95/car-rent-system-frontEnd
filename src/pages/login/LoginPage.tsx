import LoginForm from "../../ui/loginPage/LoginForm";

const LoginPage = () => {
  return (
    <main className="min-h-screen flex justify-center items-center bg-gray-50">
      {/* Image container */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          src="https://i.pinimg.com/564x/f5/30/e1/f530e19d3bac5790ef02a4b6695b4efc.jpg"
          alt=""
        />
      </div>

      {/* Form container */}
      <div className="relative z-10 flex justify-center items-center flex-col gap-y-8 lg:flex-row lg:justify-around">
        {/* Form */}
        <div className="w-80">
          <LoginForm />
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
