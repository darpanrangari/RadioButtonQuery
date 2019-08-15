import React, { Component } from "react";

import List from "./List";

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = { gender: null };
  }

  renderUser = toMap => {
    if (toMap) {
      return (
        <List
          key={toMap.length}
          users={toMap.filter(user => user.gender === this.state.gender)}
        />
      );
    } else return null;
  };

  renderSelect = () => {
    return (
      <select
        id="gender"
        value={this.state.gender}
        onChange={this.handleChange}
      >
        <option value="select">Select a gender</option>
        <option value="male">Males</option>
        <option value="female">Females</option>
      </select>
    );
  };

  handleChange = e => {
    this.setState({ gender: e.target.value });
  };

  render() {
    const { userList } = this.props;
    return (
      <div>
        {this.renderSelect()}
        <ul>{this.renderUser(userList)}</ul>
      </div>
    );
  }
}

export default UserList;
