import React, { Component } from "react";

class Contact extends Component {
  state = {
    personalInfo: [
      { label: "Name", data: "Yuen Sing Chun, Calvin" },
      { label: "Phone No.", data: "5168 7161" },
      { label: "Email", data: "scyuenab@gmail.com" },
      {
        label: "Github of this website",
        data: "https://github.com/YuenSC/myDemo",
      },
    ],
  };
  render() {
    return (
      <div className="container">
        {this.state.personalInfo.map(({ label, data }) => (
          <React.Fragment key={label}>
            <div style={{ marginTop: 30 }} className="row">
              <div className="col-3">
                <h1>{`${label} : `}</h1>
              </div>
              <div className="col-3">
                <h2>{data}</h2>
              </div>
            </div>
            <hr />
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export default Contact;
