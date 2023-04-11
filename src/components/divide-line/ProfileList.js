import React from "react";
import Link from "../Link";
import "./ProfileList.css";

class ProfileList extends React.Component {
  render() {
    return (
      <section class="profile-list-container">
        <ul class="profile-navbar">
          <li>
            <Link>Likes</Link>
          </li>
          <li>
            <Link>Collections</Link>
          </li>
          <li>
            <Link>Uploads</Link>
          </li>
        </ul>
      </section>
    );
  }
}
