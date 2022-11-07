import React,{Component} from 'react';
import axios from 'axios';


class Login extends Component{
  constructor(props) {
    super(props);
    this.state = {
      email:"",
      password:"",
    };
  }
  handleEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  handlePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const userObject = {
      
      email: this.state.email,
      password: this.state.password,
    };
    axios
      .post("http://localhost:8080/login", userObject)
      .then((response) => {
        console.log(response.data);
        
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
        
      });
  };
    render(){
      return (
  <div className="wrapper">
          <form className="form" onSubmit={this.handleSubmit}>
            <div>
              {!this.state.email && this.state.error && (
                <p>{this.state.error.response.data.errors.email.message}</p>
              )}
              <label htmlFor="email">Email</label>
              <input
                type="text"
                placeholder="email"
                value={this.state.email}
                onChange={this.handleEmail}
              />
            </div>
            <div>
              {!this.state.password && this.state.error &&(
                <p>{this.state.error.response.data.errors.password.message}</p>
              )}
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.handlePassword}
              />
            </div>
            <button>LOGIN</button>
      </form>
  </div>
      );
    }
  };
export default Login;