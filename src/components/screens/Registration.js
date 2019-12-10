import React from 'react';
import ReactDOM from 'react-dom';
import registrationImg from "../../registrationImg.svg";

export class Registration extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Registration</div>
        <div className="content">
          <div className="image">
            <img src={registrationImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <label htmlFor="firstname">First name</label>
              <input type="text" name="firstname" placeholder="First Name" />
            </div>
            <div className="form-group">
              <label htmlFor="lastname">Last Name</label>
              <input type="text" name="lastname" placeholder="Last Name" />
            </div>
          </div>
        </div>
        <div className="footer">
        <button type="button" className="btn">
            Go back
          </button>
          <button type="button" className="btn">
            Signup
          </button>
        </div>
      </div>
    );
  }
}