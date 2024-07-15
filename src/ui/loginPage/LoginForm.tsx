
import Button from "../sharedComponents/Button";
import Input from "../sharedComponents/Input";
import { useNavigate } from "react-router-dom";


const LoginForm = () => {

const navigate = useNavigate()


  return (
    <div className=" flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6"
      
         >
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="user" className="sr-only">
                User Name
              </label>
              
          
              <Input
                id="user"
                name="user"
                type="text"
                autoComplete="text"
                required={true}
                placeholder="User Name"
               
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required={true}
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <div className="text-sm">
              <span>No Account? </span>
              <a
                href="#"
                className="font-medium  text-indigo-600 hover:text-indigo-500 border-b-2 border-b-indigo-400"
              >
                Create One
              </a>
            </div>
          </div>

          
          <div>
            <Button
            onClick={()=>  navigate('/')}
             
            >
              Continue
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
