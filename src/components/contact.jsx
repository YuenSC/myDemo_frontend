import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div>
        <div style={{ marginTop: 30 }} className="row">
          <div className="col-3">
            <h1>Name:</h1>
          </div>
          <div className="col-3">
            <h2>Yuen Sing Chun, Calvin</h2>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-3">
            <h1>Contact Numbers:</h1>
          </div>
          <div className="col-3">
            <h2>5168 7161</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
