import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { signin } from "../redux/actions/auth";

import Layout from "../components/Layout";

import FormContainer from "../components/forms/FormContainer";
import Input from "../components/forms/Input";
import Button from "../components/forms/Button";

const LOGIN_DATA = {
  email: "",
  password: "",
};

function Login() {
  const dispatch = useDispatch();
  const {isLoading} = useSelector(state => state.auth)

  const history = useHistory();

  const [loginForm, setLoginForm] = useState(LOGIN_DATA);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setLoginForm({ ...loginForm, [name]: value });
  };

  const onLogin = () => {
    dispatch(signin(loginForm, history));
  };

  return (
    <Layout>
      <div className="flex items-center justify-center pt-5">
        <FormContainer
          title="Login"
          description="Please enter following credentials"
        >
          <Input
            key="email"
            type="text"
            name="email"
            placeholder="Email"
            onChange={handleOnChange}
          />
          <Input
            key="password"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleOnChange}
          />
          <Button name="Login" onClick={() => onLogin()} isLoading={isLoading}/>
        </FormContainer>
      </div>
    </Layout>
  );
}

export default Login;
