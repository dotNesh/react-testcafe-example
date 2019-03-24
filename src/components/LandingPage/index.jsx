import React from 'react';
import { Link } from 'react-router-dom';
import './Styles.scss';

class LandingPage extends React.Component {
  componentDidMount() {
    document.title = 'Home || Welcome';
  }

  render() {
    return (
      <div className="landing-container">
        <header className="content">
          <h1>Haunted House</h1>
        </header>
        <Link to="/register" className="btn"> Enter If You Dare </Link>
      </div>
    );
  }
}

export default LandingPage;
