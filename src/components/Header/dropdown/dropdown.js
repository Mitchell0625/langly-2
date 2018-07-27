import React from "react";

const dropdown = WrappedComponent => {
  class Dropper extends React.Component {
    state = {
      toggle: false
    };
    openClose = () => {
      this.setState(() => ({ toggle: !this.state.toggle }));
    };
    render() {
      return <WrappedComponent toggler={this.openClose} {...this.props} />;
    }
  }
};

export default dropdown;
