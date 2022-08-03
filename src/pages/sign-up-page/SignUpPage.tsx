import React, { FC, useReducer } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { useInput } from '../../hooks/input-hook/UseInput';
import BASE_URL from '../../utils/baseUrl';
import mainStyle from '../../styles/main.module.scss';
import { loginPath } from '../../constants/navbar';

const SignUpPage: FC = () => {
  const usernameText = 'username';
  const emailText = 'email';
  const passwordText = 'password';
  const enterText = 'Enter your ';
  const signUpText = 'Sign up';
  const navigate = useNavigate();

  const reducer = (state = '', action: any) => {
    switch (action.type) {
      case 'username':
        return 'Username ' + action.payload;
      case 'email':
        return 'Email ' + action.payload;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, '');

  const passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const {
    value: username,
    bind: bindUsername,
    reset: resetUsername,
  } = useInput('');

  const { value: email, bind: bindEmail, reset: resetEmail } = useInput('');

  const {
    value: password,
    bind: bindPassword,
    reset: resetPassword,
  } = useInput('');

  const handleSubmit = async () => {
    try {
      await axios.post(`${BASE_URL}/users`, {
        user: {
          email: `${email}`,
          password: `${password}`,
          username: `${username}`,
        },
      });
      resetUsername();
      resetEmail();
      resetPassword();
      navigate('/');
    } catch (e: any) {
      e.response.data.errors.email &&
        dispatch({ type: 'email', payload: e.response.data.errors.email[0] });
      e.response.data.errors.username &&
        dispatch({
          type: 'username',
          payload: e.response.data.errors.username[0],
        });
    }
  };

  return (
    <div className={mainStyle.formContainer}>
      {state && <span className={mainStyle.errorMessage}>{state}</span>}
      <h1 className={mainStyle.title}>{signUpText}</h1>
      <Link to={loginPath} className={mainStyle.link}>
        Have an account?
      </Link>
      {state && <span className={mainStyle.error}>{state}</span>}
      <form className={mainStyle.form} onSubmit={handleSubmit}>
        <label>
          {enterText} {usernameText}:
          <input
            placeholder={usernameText}
            type="text"
            {...bindUsername}
            required
          />
        </label>
        <label>
          {enterText} {emailText}:
          <input placeholder={emailText} type="email" {...bindEmail} required />
        </label>
        <label>
          {enterText} {passwordText}:
          <input
            placeholder={passwordText}
            type="password"
            {...bindPassword}
            required
          />
          {!bindPassword.value.match(passwordRegExp) && (
            <span>
              The password must contain minimum eight characters, at least one
              letter and one number
            </span>
          )}
        </label>
        <button className={mainStyle.greenBtn} type="submit">
          {signUpText}
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
