import React, {useState} from 'react'
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(auth => {
            history.push('/')
        }).catch(error => alert(error.message))

        //FIREBASE LOGIN
    }


    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            console.log(auth);
            if (auth) {
                history.push('/')
            }
        }).catch(error => alert(error.message));

      //FIREBASE REGISTER
    };

    return (
      <div className="login">
        <Link to="/">
          <img
            className="login__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG21.png"
            alt="website-logo"
          />
        </Link>

        <div className="login__container">
          <h1>Sign-In</h1>
          <form>
            <h5>E-mail</h5>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h5>Password</h5>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              className="login__signInButton"
              onClick={signIn}
            >
              Sign In
            </button>
          </form>
          <p>
            By creating an account, you agree to Amazon's Conditions of Use and
            Privacy Notice.
          </p>
          <button className="login__registerButton" onClick={register}>
            Create you Amazon account
          </button>
        </div>
      </div>
    );
}

export default Login
