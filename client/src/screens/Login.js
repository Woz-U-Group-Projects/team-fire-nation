import React from "react";
import Header from '../component/Header';
// import loginImg from "../../login.svg";

/*___________________
   Usefyl Links.
   * Bootstrap:
   ** https://getbootstrap.com/docs/4.4/components/forms/
  ___________________

___________________*/

const Login = () => (
  <div>
    <div className="container-fluid">
    <Header title="Login" />
      <form className="form">
        <div className="row">
          <div className="col ml-auto offset-sm-3">
            <div className="form-group col-md">  
              <label htmlFor="username" className="col-sm col-form-label">Username</label>  
              <input className="form-control " id="" type="text" name="username" placeholder="username" aria-describedby="emailHelp"/>
              <small id="emailHelp" class="form-text text-muted">The Username used on account creation</small>
            </div>
            <div className="form-group col-md">
              <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
              <input className="form-control " id="" type="password" name="password" placeholder="password" aria-describedby="emailHelp" />
              <small id="emailHelp" class="form-text text-muted">Do Not Forget. At this time we cannot recover.</small>
            </div>
          </div>
        </div>
        <div className="form-group row just">
          <div class="col-sm-2">
            <button type="button" className="btn btn-primary mb-2">Go back</button>
          </div>
          <div class="col-sm-2">
            <button type="submit" className="btn btn-primary mb-2">Login</button>
          </div>
        </div>
      </form>  
    </div>
  </div>
    
);

export default Login;

/*============================
Old Code [Orignal, Protype, Draft] 
==============================
 export class Login extends React.Component {
   constructor(props) {
     super(props);
   }

   render() {
     return (
       

<div className="base-container" ref={this.props.containerRef}>     
  { <div className="header">Login</div> }
  <div className="content">
    <div className="image">
      { <img src={loginImg} /> }
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
    </div>
  </div>
  <div className="footer">
    <button type="button" className="btn">
      Login
    </button>
    <button type="button" className="btn">
      Go back
    </button>
  </div>
</div>

     
     );
   }
 }

============================*/