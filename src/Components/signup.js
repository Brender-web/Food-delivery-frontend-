// import React,{Component} from 'react';
// 
// import axios from 'axios';

// class Signup extends Component{
//   constructor(props) {
//     super(props);
//     this.state = {
//       username:"",
//       email:"",
//       phonenumber:"",
//       password:"",
//     };
//   }
//   handleuserName = (event) => {
//     this.setState({
//       username: event.target.value,
//     });
//   };
//   handleEmail = (event) => {
//     this.setState({
//       email: event.target.value,
//     });
//   };
//   handlePhonenumber = (event) => {
//     this.setState({
//       phonenumber: event.target.value,
//     });
//   };
//   handlePassword = (event) => {
//     this.setState({
//       password: event.target.value,
//     });
//   };
//  handleSubmit = (event) => {
//     event.preventDefault();

//     const userObject = {
//       username: this.state.name,
//       email: this.state.email,
//       phonenumber: this.state.phonenumber,
//       password: this.state.password,
//     };
//     axios
//     .post("http://localhost:8080/signup", userObject)
//     .then((response) => {
//       console.log(response.data);

//       this.props.history.push("/");
//     })
//     .catch((error) => {
//       console.log(error);

//     });
//   };
//     render() {
//       return (
//         <div className="wrapper">
//           <form className="form" onSubmit={this.handleSubmit}>
//             <div>
//               {!this.state.name && this.state.error && (
//                 <p>{this.state.error.response.data.errors.name.message}</p>
//               )}
//               <label htmlFor="name">Name</label>
//               <input
//                 type="text"
//                 placeholder="name"
//                 value={this.state.name}
//                 onChange={this.handleName}
//               />
//             </div>
//             <div>
//               {!this.state.email && this.state.error &&(
//                 <p>{this.state.error.response.data.errors.email.message}</p>
//               )}
//               <label htmlFor="email">Email</label>
//               <input
//                 type="text"
//                 placeholder="email"
//                 value={this.state.email}
//                 onChange={this.handleEmail}
//               />
//             </div>
//             <div>
//               {!this.state.phonenumber && this.state.error &&(
//                 <p>{this.state.error.response.data.errors.phonenumber.message}</p>
//               )}
//               <label htmlFor="email">Phonenumber</label>
//               <input
//                 type="number"
//                 placeholder="phonenumber"
//                 value={this.state.phonenumber}
//                 onChange={this.handlePhonenumber}
//               />
//             </div>
//             <div>
//               {!this.state.password && this.state.error &&(
//                 <p>{this.state.error.response.data.errors.password.message}</p>
//               )}
//               <label htmlFor="email">Password</label>
//               <input
//                 type="password"
//                 placeholder="password"
//                 value={this.state.password}
//                 onChange={this.handlePassword}
//               />
//             </div>
//             <button>CREATE ACCOUNT</button>
//       </form>
//   </div>
//       );
//     };
//   };
// export default Signup;



import React, { Component } from 'react';
import './signup.css';
import axios from 'axios';


class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleuserName = (event) => {
    this.setState({
      username: event.target.value,
    });
  };


  handleEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handlePhonenumber = (event) => {
    this.setState({
      phonenumber: event.target.value,
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
      username: this.state.username,
      email: this.state.email,
      phonenumber: this.state.phonenumber,
      password: this.state.password,
    };
    axios
      .post("http://localhost:8080/signup", userObject)
      .then((response) => {
        console.log(response.data);

        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error);

      });
  };
  render() {
    return (
      <div className="wrapper">
        <form className="form" onSubmit={this.handleSubmit}>


          <div>
            {!this.state.name && this.state.error && (
              <p>{this.state.error.response.data.errors.name.message}</p>
            )}
            <label htmlFor="name">Name</label>
            <input type="text"
              placeholder="name"
              value={this.state.name}
              onChange={this.handleuserName}
            />
          </div>

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
            {!this.state.phonenumber && this.state.error && (
              <p>{this.state.error.response.data.errors.phonenumber.message}</p>
            )}
            <label htmlFor="email">Phonenumber</label>
            <input
              type="number"
              placeholder="phonenumber"
              value={this.state.phonenumber}
              onChange={this.handlePhonenumber}
            />
          </div>
          <div>
            {!this.state.password && this.state.error && (
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
          <button>Sign Up</button>
        </form>
      </div>
    );
  }
};
export default Signup;