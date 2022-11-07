import React,{Component} from 'react';
import  axios  from 'axios';

class Order extends Component{
  constructor(props) {
    super(props);
    this.state = {
      username:"",
      location:"",
      phonenumber:"",
      item:"",
    };
  }
  handleUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handleLocation = (event) => {
    this.setState({
      location: event.target.value,
    });
  };
  handlePhonenumber = (event) => {
    this.setState({
      phonenumber: event.target.value,
    });
  };
  handleItem = (event) => {
    this.setState({
      item: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const userObject = {
      username: this.state.username,
      email: this.state.email,
      phonenumber: this.state.phonenumber,
      item: this.state.item,
    };
    axios
      .post("http://localhost:8080/order", userObject)
      .then((response) => {
        console.log(response.data);
        
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
        
      });
  }
    render() {
      return (
        <div className="wrapper">
          <form className="form" onSubmit={this.handleSubmit}>
            <div>
              {!this.state.username && this.state.error && (
                <p>{this.state.error.response.data.errors.username.message}</p>
              )}
              <label htmlFor="name">Username</label>
              <input
                type="text"
                placeholder="username"
                value={this.state.username}
                onChange={this.handleUsername}
              />
            </div>
            <div>
              {!this.state.location && this.state.error &&(
                <p>{this.state.error.response.data.errors.location.message}</p>
              )}
              <label htmlFor="location">Location</label>
              <input
                type="text"
                placeholder="location"
                value={this.state.location}
                onChange={this.handleLocation}
              />
            </div>
            <div>
              {!this.state.phonenumber && this.state.error &&(
                <p>{this.state.error.response.data.errors.phonenumber.message}</p>
              )}
              <label htmlFor="phonenumber">Phonenumber</label>
              <input
                type="number"
                placeholder="phonenumber"
                value={this.state.phonenumber}
                onChange={this.handlePhonenumber}
              />
            </div>
            <div>
              {!this.state.item && this.state.error &&(
                <p>{this.state.error.response.data.errors.item.message}</p>
              )}
              <label htmlFor="item">Item</label>
              <input
                type="text"
                placeholder="item"
                value={this.state.item}
                onChange={this.handleItem}
              />
            </div>
            <button>Make your Order</button>
      </form>
  </div>
      );
    };
  };
export default Order;