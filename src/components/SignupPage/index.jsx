import React from 'react';
import { Link } from 'react-router-dom';
import witch from './scary-ripped-witch-silhouette-by-vexels.png';
import './Styles.scss';

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      password: '',
      confirmPassword: '',
    };
  }

  componentDidMount() {
    document.title = 'Signup Page';
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { history } = this.props;
    history.push('/login');
  }

  renderSubmitButton() {
    const {
      firstName, lastName, password, confirmPassword,
    } = this.state;
    return (
      <div>
        { password && confirmPassword && firstName && lastName && password === confirmPassword
          ? (
            <div className="form-group">
              <button
                type="submit"
                className="signup-button enabled"
              >
              Get Started
              </button>
            </div>
          ) : (
            <div className="form-group">
              <button
                type="submit"
                className="signup-button disabled"
                disabled
              >
              Get Started
              </button>
            </div>
          ) }
      </div>
    );
  }

  renderForm() {
    const {
      firstName, lastName, password, confirmPassword,
    } = this.state;
    return (
      <div className="form-container">
        <h1 className="signup-title">Create Account</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">
                  First Name
              <input type="text" placeholder="First Name" name="firstName" id="firstName" value={firstName} onChange={this.handleChange} />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="lastName">
                  Last Name
              <input type="text" placeholder="Last Name" name="lastName" id="lastName" value={lastName} onChange={this.handleChange} />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="Password">
                  Password
              <input type="password" placeholder="Password" name="password" id="password" value={password} onChange={this.handleChange} />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">
                  Confirm Password
              <input type="password" placeholder="Confirm Password" name="confirmPassword" id="confirmPassword" value={confirmPassword} onChange={this.handleChange} />
            </label>
          </div>
          {this.renderSubmitButton()}
        </form>
      </div>
    );
  }

  render() {
    return (
      <div className="signup-page">
        <div className="page-description">
          <div className="description-content">
            <h1>
              Welcome Back
            </h1>
            <p>
              To keep connected to us please login with your personal info.
            </p>
            <Link to="/login" className="login-btn"> Login </Link>
          </div>
        </div>
        <div className="signup-form">
          <div className="witch">
            <img src={witch} alt="witch" />
          </div>
          {this.renderForm()}
        </div>
      </div>
    );
  }
}

export default Signup;
