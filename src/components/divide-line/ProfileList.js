import React from "react";
// import connect from "react-redux";
import Link from "../Link";
import "./ProfileList.css";
import ImageList from "../ImageList";

class ProfileList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "Likes",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    console.log(event.target.dataset.type);
    this.state = {
      type: event.target.dataset.type,
    };
  }

  render() {
    return (
      <section class="profile-list-container">
        <ul class="profile-navbar" onClick={this.handleClick}>
          <li data-type="Likes">
            <Link label="Likes"></Link>
          </li>
          <li data-type="Collections">
            <Link label="Collections"></Link>
          </li>
          <li data-type="Uploads">
            <Link label="Uploads"></Link>
          </li>
        </ul>
        <ImageList term={this.state.type}></ImageList>
      </section>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {}
// }

export default ProfileList;
