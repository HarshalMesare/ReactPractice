import React from 'react';
import LoginForm from './LoginForm';
import styles from './LoginPage.module.css'

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className={styles.loginContainer}>
        <div className={styles.inputContainer}>
        </div>
        <div className="right-container">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
