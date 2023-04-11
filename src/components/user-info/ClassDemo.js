import React from "react";
import { RxAvatar } from "react-icons/rx";
import { connect } from "react-redux";
import { setCurrentPath } from "../../store";

class ClassDemo extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind.this();
  }

  handleClick = () => {
    this.props.setCurrentPath("/");
  };

  render() {
    return (
      <>
        <button onCLick={this.handleCLick}>Go back to main page</button>
      </>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    page: state.page,
  };
};

// const mapDispatchToProps = {
//   backToMainPage: () => (dispatch) => {
//     dispatch(setCurrentPath("/"));
//   },
// };

export default connect(mapStateToProps, { setCurrentPath })(ClassDemo);
