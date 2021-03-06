import React, { Component } from "react";



class Signup extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      password: "",
      error: "",
      open: false,
    };
  }

  handleChange = (name) => (event) => {
    this.setState({ error: "" });
    this.setState({ [name]: event.target.value });
  };
  

  render() {
    const {
      firstname,
      lastname,
      phone,
      email,
      password,
      error,
      open,
    } = this.state;
    return (
      <div class="row mt-5">
        <div class="col-md-6 m-auto">
          <div class="card card-body">
            <h1 class="text-center mb-3">
              <i class="fas fa-user-plus"></i> Register
            </h1>
            <div
              class="alert alert-warning alert-dismissible fade show"
              role="alert"
              style={{ display: error ? "" : "none" }}
            >
              {error}
              <button
                type="button"
                class="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div
              class="alert alert-info fade show"
              role="alert"
              style={{ display: open ? "" : "none" }}
            >
              New account is suucessfully created. Please Sign in.
              <button
                type="button"
                class="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form action="/signup" method="POST">
              <div class="form-group">
                <label className="text-muted" for="firstname">
                  First Name
                </label>
                <input
                  onChange={this.handleChange("firstname")}
                  type="firstname"
                  id="firstname"
                  name="firstname"
                  class="form-control"
                  placeholder="Enter First Name"
                  value={firstname}
                />
              </div>
              <div class="form-group">
                <label className="text-muted" for="lastname">
                  Last Name
                </label>
                <input
                  onChange={this.handleChange("lastname")}
                  type="lastname"
                  id="lastname"
                  name="lastname"
                  class="form-control"
                  placeholder="Enter Last Name"
                  value={lastname}
                />
              </div>
              <div class="form-group">
                
              </div>
              <div class="form-group">
              </div>
              <div class="form-group">
                <label className="text-muted" for="phone">
                  Phone
                </label>
                <input
                  onChange={this.handleChange("phone")}
                  type="phone"
                  id="phone"
                  name="phone"
                  class="form-control"
                  placeholder="Enter Phone"
                  value={phone}
                />
              </div>
              <div class="form-group">
                <label className="text-muted" for="email">
                  Email
                </label>
                <input
                  onChange={this.handleChange("email")}
                  type="email"
                  id="email"
                  name="email"
                  class="form-control"
                  placeholder="Enter Email"
                  value={email}
                />
              </div>
              <div class="form-group">
                <label className="text-muted" for="password">
                  Password
                </label>
                <input
                  onChange={this.handleChange("password")}
                  type="password"
                  id="password"
                  name="password"
                  class="form-control"
                  placeholder="Create Password"
                  value={password}
                />
              </div>
              <button
                type="submit"
                class="btn btn-primary btn-block"
              >
                Register
              </button>
            </form>
            <p class="lead mt-4">
              Have An Account? <a href="/Login">Login</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
