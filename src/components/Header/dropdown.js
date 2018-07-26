import React from "react";

const dropdown = WrappedComponent => {
    class extends React.Component{
        state={
            toggle: false
        }
        openClose = () => {
            this.setState(()=> ({toggle: !this.state.toggle}))
        }
        render(){
            return (<WrappedComponent {...this.props} />)
        }
    }
};

export default dropdown;