import { FormEvent, useState } from "react";
import Button from "../sharedComponents/Button";
import Input from "../sharedComponents/Input";


import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../redux/store";
import { login } from "../../redux/apiCalls/LoginAPI";


const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { isFetching, error } = useSelector(
    (state: RootState) => state.user
  );

  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    login(dispatch, { username, password });
    setUsername("");
    setPassword("");
  };
  return (
    <div className=" flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
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
                onChange={(e) => setUsername(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
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

            {error ===true  && (
              <span className="text-red-500 ">Wrong User Name Or Password!</span>
            )}
          <div>
            <Button
              disabled={isFetching}
              className={isFetching ? 'cursor-not-allowed' : 'cursor-pointer'}
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
