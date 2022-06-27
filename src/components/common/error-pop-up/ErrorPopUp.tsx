import React from 'react';
import mainStyle from '../../../styles/main.module.scss';

const ErrorPopUp = () => {
  return (
    <>
      <span>Something went wrong. It seems we couldn't upload the data.</span>
      <span aria-haspopup="dialog" className={mainStyle.errorMessage}>
        Oops... It seems we couldn't upload the data. Try again
      </span>
    </>
  );
};

export default ErrorPopUp;
