import React from 'react';

export const LoginForm = () => {
  return (
    <form action="">
      <div>
        <input type="text" placeholder="login" />
      </div>
      <div>
        <input type="password" placeholder="password" />
      </div>
      <div>
        <input type="checkbox" /> remember me
      </div>
      <div>
        <button>login</button>
      </div>
    </form>
  );
};
