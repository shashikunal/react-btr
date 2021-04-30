import React, { Component } from "react";

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      address: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    let { firstname, lastname, email, phone, address } = this.state;
    return (
      <section className="card container my-4">
        <article className="card-body">
          <h4 className="text-uppercase">Contact us</h4>
          <form onSubmit={this.handleSubmit}>
            <main className="row">
              <div className="col-md-3">
                <input
                  type="text"
                  name="firstname"
                  value={firstname}
                  placeholder="firstname"
                  onChange={this.handleChange}
                  className="form-control"
                />
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  name="lastname"
                  value={lastname}
                  placeholder="lastname"
                  onChange={this.handleChange}
                  className="form-control"
                />
              </div>
              <div className="col-md-3">
                <input
                  type="email"
                  name="email"
                  value={email}
                  placeholder="email"
                  onChange={this.handleChange}
                  className="form-control"
                />
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={this.handleChange}
                  placeholder="phone number"
                  className="form-control"
                />
              </div>

              <div className="col-md-12 my-2">
                <textarea
                  name="address"
                  value={address}
                  cols="30"
                  rows="10"
                  className="form-control"
                  onChange={this.handleChange}
                ></textarea>
              </div>
              <div className="col-md-12">
                <button className="btn btn-success">contact us</button>
              </div>
            </main>
          </form>
        </article>
      </section>
    );
  }
}

export default ContactForm;
