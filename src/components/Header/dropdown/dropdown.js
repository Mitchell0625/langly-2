import React from 'react';

const dropdown = WrappedComponent => {
  class Dropper extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        toggle: false
      };
      this.openClose = this.openClose.bind(this);
    }
    openClose = () => {
      this.setState(() => ({ toggle: !this.state.toggle }));
      console.log(this.state.toggle);
    };
    render() {
      const otherProps = {
        toggle: this.state.toggle,
        toggler: this.openClose
      };
      return (
        <div>
          <WrappedComponent {...otherProps} {...this.props} />
        </div>
      );
    }
  }
  return Dropper;
};

export default dropdown;
