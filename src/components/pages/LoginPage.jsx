import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import Cookies from 'js-cookie';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { authToken, setAuthToken } = useContext(AuthContext);

  const attemptLogin = async (e) => {
    e.preventDefault();

    //! should call call an API to verify username and password
    if (username && password) {
      console.log(username, password);
      const authToken = 'fdsojfspodijfosfjho';
      setAuthToken(authToken);
      Cookies.set('token', authToken);
    }
  };

  if (authToken) return <Redirect to="/" />;

  return (
    <form onSubmit={attemptLogin}>
      <div>
        <label htmlFor="username"></label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password"></label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button>Log in</button>
    </form>
  );
};

export default LoginPage;
