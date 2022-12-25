import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { signup } from "../actions/auth";

import Layout from "../components/Layout";

import FormContainer from "../components/forms/FormContainer";
import Input from "../components/forms/Input";
import Button from "../components/forms/Button";

const LOGIN_DATA = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

function Signup() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [signupForm, setSignupForm] = useState(LOGIN_DATA);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setSignupForm({ ...signupForm, [name]: value });
  };

  const onSignup = () => {
    dispatch(signup(signupForm, history));
  };

  return (
    <Layout>
      <div className="flex items-center justify-center pt-5">
        <FormContainer
          title="Sign up"
          description="Please enter following details"
        >
          <Input
            key="firstName"
            type="text"
            name="firstName"
            placeholder="First name"
            onChange={handleOnChange}
          />
          <Input
            key="lastName"
            type="text"
            name="lastName"
            placeholder="Last name"
            onChange={handleOnChange}
          />
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
          <Button name="Signup" onClick={() => onSignup()} />
        </FormContainer>
      </div>
    </Layout>
  );
}

export default Signup;
