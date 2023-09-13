import React, { Component } from "react";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      errors: {
        username: "",
        email: "",
        password: "",
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (event) => {
    const errorMsg = {};
    if (this.state.username === "") {
      errorMsg.username = "Field required, please fill in your username.";
    }
    if (!this.validateEmail(this.state.email)) {
      errorMsg.email = "Invalid Email";
    }
    if (this.state.password.length < 5) {
      errorMsg.password =
        "Password must be more than 5 characters or incorrect password";
    }

    if (Object.keys(errorMsg).length > 0) {
      this.setState({
        errors: errorMsg,
      });
    } else {
      alert(`Welcome ${this.state.username}`);
    }
    event.preventDefault();
  };

  validateEmail(email) {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="logForm">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <p style={{ color: "blue" }}>{this.state.errors.username}</p>
          </div>
          <div className="logForm">
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <p style={{ color: "blue" }}>{this.state.errors.email}</p>
          </div>
          <div className="logForm">
            <label>Password</label>
            <input
              type="text"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <p style={{ color: "blue" }}>{this.state.errors.password}</p>
          </div>
          <div className="logForm">
            <button type="submit" className="btn">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
