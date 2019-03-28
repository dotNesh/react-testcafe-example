import React from 'react';
import { Link } from 'react-router-dom';
import witch from '../SignupPage/scary-ripped-witch-silhouette-by-vexels.png';
import './Styles.scss';

class Login extends React.Component {
  componentDidMount() {
    document.title = 'Login Page';
  }

  render() {
    return (
      <div className="login-page">
        <div className="login-form">
          <div className="witch">
            <img src={witch} alt="witch" />
          </div>
          {/* {this.renderForm()} */}
        </div>
        <div className="loginpage-description">
          <div className="login-description-content">
            <h1>
            Hello, Friend!
            </h1>
            <p>
            Enter your personal details to start the journey with us.
            </p>
            <Link to="/register" className="btn"> Sign Up </Link>
          </div>
        </div>

      </div>
    );
  }
}

export default Login;
