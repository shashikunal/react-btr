import React, { Component } from "react";

const Profiles = WrappedProfiles => {
  class ProfileData extends Component {
    state = {
      trainer: "shishira",
      skills: ["java", "j2ee", "spring", "javascript"],
      designation: "Java Trainer",
      salary: 32000000,
      city: "bangalore",
    };
    render() {
      return <WrappedProfiles profile={this.state} />;
    }
  }
  return ProfileData;
};

export default Profiles;
