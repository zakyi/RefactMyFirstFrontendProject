import React from "react";
import { RxAvatar } from "react-icons/rx";
import { connect } from "react-redux";
import "./UserInfo.css";

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="user-info-container">
        <section class="user-info">
          <div class="avatar-container">
            <RxAvatar />
          </div>
          <div class="info-container">
            <h3>{this.props.userData.userName}</h3>
            <span class="inline-block">{this.props.userData.email}</span>
            <ul class="like-collection-count-container">
              <li>{this.props.userData.likes.length} likes</li>
              <li>{this.props.userData.collections.length} adds</li>
              <li>0 publishes</li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    userData: state.userData,
    page: state.page,
  };
};

// const mapDispatchToProps = {
//   increment: () => (dispatch) => {
//     dispatch();
//   },
// };

export default connect(mapStateToProps, {})(UserInfo);
// export default connect()(UserInfo);
