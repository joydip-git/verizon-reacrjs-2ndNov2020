import React, { Component } from 'react'
import ClickCounter from './ClickCounter'
import HoverCounter from './HoverCounter'

class Counter extends Component {
    state = {
        count: 0
    }
    increaseCountHandler = () => {
        this.setState(ps => {
            return {
                count: ps.count + 1
            }
        })
    }
    render() {
        return (
            <div>
                <ClickCounter count={this.state.count} handler={this.increaseCountHandler} />
                <br />
                <br />
                <HoverCounter count={this.state.count} handler={this.increaseCountHandler} />
            </div>
        )
    }
}

export default Counter
