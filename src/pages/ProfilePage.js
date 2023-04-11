import React from "react";
import UserInfo from "../components/user-info/UserInfo";
import ProfileList from "../components/divide-line/ProfileList";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
  }

  incrementCounter(e) {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  decrementCounter(e) {
    this.setState({
      counter: this.state.counter - 1,
    });
  }

  /**
   * The render() function should be pure, meaning that it
   * does not modify component state, it returns the same
   * result each time it’s invoked,    * and it does not di-
   * rectly interact with the browser.
   *
   * If you need to interact with the browser, perform your work
   * in componentDidMount() or the other lifecycle methods instead.
   * Keeping render() pure makes components easier to think about.
   *
   * @returns
   *
   * @memberOf ProfilePage
   */
  render() {
    return (
      <>
        <UserInfo />
        <ProfileList />
        {/* <ClassDemo></ClassDemo> */}
        {/* <h1>{this.state.counter}</h1>
        <button onClick={this.incrementCounter}>+</button>
        <button onClick={this.decrementCounter}>-</button> */}
      </>
    );
  }
}

export default ProfilePage;
