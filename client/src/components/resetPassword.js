import React from 'react';
import './../styles/resetPassword.css';
import './../images/download.png';

const ResetPassword = () => {
  return (
      <div className="reset-password-page">
        <div className="reset-password-form">
          <h2>Reset Password</h2>
          <form>
            <input type="text" placeholder="current password" />
            <input type="password" placeholder="new password" />
            <input type="password" placeholder="confirm password" />
            <button type="submit"><strong>Reset</strong></button>
          </form>
        </div>
      </div>
  );
};

export default ResetPassword;
