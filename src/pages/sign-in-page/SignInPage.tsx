import React, { FC, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useInput } from '../../hooks/input-hook/UseInput';
import { signIn } from '../../services/postData';
import mainStyle from '../../styles/main.module.scss';
import { registerPath } from '../../constants/navbar';
import { useAppDispatch } from '../../hooks/redux';
import { writeTokenForAuthUser } from '../../redux/actions/userActions';

const SignInPage: FC = () => {
  const emailText = 'email';
  const passwordText = 'password';
  const enterText = 'Enter your ';
  const signInText = 'Sign in';
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [error, setError] = useState<string>('');

  const { value: email, bind: bindEmail, reset: resetEmail } = useInput('');

  const {
    value: password,
    bind: bindPassword,
    reset: resetPassword,
  } = useInput('');

  const handleSubmit = async () => {
    try {
      const token = await signIn(email, password);

      dispatch(writeTokenForAuthUser(token));
      resetEmail();
      resetPassword();
      navigate('/');
    } catch (e: any) {
      if (Boolean(e.response.data.errors['email or password'])) {
        setError('Email or password is invalid');
      }
    }
  };

  return (
    <div className={mainStyle.formContainer}>
      {error && <span className={mainStyle.errorMessage}>{error}</span>}
      <h1 className={mainStyle.title}>{signInText}</h1>
      <Link to={registerPath} className={mainStyle.link}>
        Need an account?
      </Link>
      {error && <span className={mainStyle.error}>{error}</span>}
      <form className={mainStyle.form} onSubmit={handleSubmit}>
        <label>
          {enterText} {emailText}:
          <br />
          <input placeholder={emailText} type="email" {...bindEmail} required />
        </label>
        <label>
          {enterText} {passwordText}:
          <br />
          <input
            placeholder={passwordText}
            type="password"
            {...bindPassword}
            required
          />
        </label>
        <button className={mainStyle.greenBtn} type="submit">
          {signInText}
        </button>
      </form>
    </div>
  );
};

export default SignInPage;
