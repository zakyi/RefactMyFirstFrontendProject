import ImageList from "../components/ImageList";
import Profile from "../components/Profile";
import React from "react";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({
      counter: this.state.counter + 1,
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
        <Profile />
        <button onClick={this.handleClick}>{this.state.counter}</button>
      </>
    );
  }
}

export default ProfilePage;
