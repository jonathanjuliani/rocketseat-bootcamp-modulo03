import React, { Component } from "react";

class TechList extends Component {
  state = {
    techs: ["NodeJS", "ReactJS", "ReactNative"]
  };

  render() {
    return (
      <ul>
        <li>NodeJS</li>
        <li>ReactJS</li>
        <li>React Native</li>
      </ul>
    );
  }
}
export default TechList;
