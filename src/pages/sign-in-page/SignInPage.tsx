import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useInput } from '../../hooks/input-hook/UseInput';
import BASE_URL from '../../utils/baseUrl';

const SignInPage: FC = () => {
  const emailText = 'email';
  const passwordText = 'password';
  const navigate = useNavigate();

  const [error, setError] = useState<string>('');

  const { value: email, bind: bindEmail, reset: resetEmail } = useInput('');

  const {
    value: password,
    bind: bindPassword,
    reset: resetPassword,
  } = useInput('');

  const handleSubmit = async () => {
    try {
      await axios.post(`${BASE_URL}/users/login`, {
        user: {
          email: `${email}`,
          password: `${password}`,
        },
      });
      resetEmail();
      resetPassword();
      navigate('/');
    } catch (e: any) {
      e.response.data.errors['email or password'] &&
        setError('Email or password is invalid');
    }
  };

  return (
    <>
      {error && <span>{error}</span>}
      <form onSubmit={handleSubmit}>
        <label>
          {emailText}:
          <input placeholder={emailText} type="email" {...bindEmail} required />
        </label>
        <label>
          {passwordText}:
          <input
            placeholder={passwordText}
            type="password"
            {...bindPassword}
            required
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default SignInPage;
