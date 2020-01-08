import React from 'react';
import Header from '../component/Header';


const Registration = () => (
    <div>
        <Header title="Registration" />
        
        <form className="form" id="signup" name="signup" method="POST" acrion="/cgdb/users">
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                    <input className="form-control " id="" type="email" name="email" placeholder="Email" aria-describedby="emailHelp"/>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                    <input className="form-control " id="" type="password" name="password" placeholder="password" aria-describedby="emailHelp" />
                    <small id="emailHelp" class="form-text text-muted">Do Not Forget. At this time we cannot recover. </small>
                </div>
            </div>
            <div className="form-row">
                <label htmlFor="firstname" className="col-sm col-form-label">Name
                    <div className="form-row">
                        <div className="form-group col-sm">
                            <input className="form-control " id="" type="text" name="firstname" placeholder="First Name" aria-describedby="firstnameHelp"/>
                            <small id="firstnameHelp" class="form-text text-muted">Will not be visable to others.</small>
                        </div>
                        <div className="form-group col-sm">
                            <input className="form-control " id="" type="text" name="lastname" placeholder="Last Name" aria-describedby="lastnameHelp"/>
                            <small id="lastnameHelp" class="form-text text-muted">Will not be visable to others.</small>
                        </div>
                    </div>
                </label>
                <label htmlFor="username" className="col-sm col-form-label">Username
                    <div className="form-group col-sm-6">    
                        <input className="form-control " id="" type="text" name="username" placeholder="username" aria-describedby="emailHelp"/>
                        <small id="emailHelp" class="form-text text-muted">Public Name that will be view by others</small>
                    </div>
                </label>
            </div>
            
            <div className="form-row">
                <div className="col-sm-2">
                    <button type="button" className="btn btn-primary mb-2">Go back</button>
                </div>
                <div className="col-sm-2">
                    <button type="submit" className="btn btn-primary mb-2">Signup</button>
                </div>
            </div>
            
            
        </form>
    </div>
);

export default Registration;



/*============================
Old Code [Orignal, Protype, Draft] 
==============================
import ReactDOM from 'react-dom';
import registrationImg from "../../registrationImg.svg";

export class Registration extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header"><Header title="Registration" /></div>
        <div className="content">
          <div className="image">
            { <img src={registrationImg} /> }
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

============================*/