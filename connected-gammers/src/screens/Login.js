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
     <Header title="Login" />
     <div>
      <form className="form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder="Username"></input>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Password"></input>
          </div>
      </form>
     </div>
     <footer className="footer">
        <button>Go back</button>
        <button>Login</button>
     </footer>
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