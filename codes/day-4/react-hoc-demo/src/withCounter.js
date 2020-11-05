import React, { Component } from "react";

const withCounter = (WrappedComponent, initialCount) => {

    class WithCounter extends Component {
        state = {
            count: initialCount
        }
        increaseCountHandler = () => {
            this.setState(ps => {
                return {
                    count: ps.count + 1
                }
            })
        }
        render() {
            //console.log(this.props)
            return <WrappedComponent
                count={this.state.count}
                handler={this.increaseCountHandler}
                {...this.props} />;
        }
    }

    return WithCounter;
}
export default withCounter;