import React, { Component } from "react";
import ReactDOM from "react-dom";
import UserList from "./UserList";
import "./styles.css";
const userList = [
  { email: "abcd@gmail.com", gender: "male" },
  { email: "xyz@gmail.com", gender: "female" }
];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { userType: "1" };
  }

  handleUserType = e => {
    this.setState({ userType: e.target.value });
  };

  render() {
    const { userType } = this.state;
    return (
      <form>
        <div className="account-type">
          <input
            type="radio"
            onChange={this.handleUserType}
            value="1"
            checked={userType === "1"}
          />
          <label htmlFor="radioOne" className="radio">
            radio 1
          </label>
          <input
            type="radio"
            value="2"
            onChange={this.handleUserType}
            checked={userType === "2"}
          />
          <label htmlFor="radioTwo" className="radio">
            radio 2
          </label>
          //https://stackoverflow.com/questions/57507156/component-not-re-rendering-after-onchange-event/57507517#57507517
          <UserList userList={userList} />
        </div>
      </form>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
