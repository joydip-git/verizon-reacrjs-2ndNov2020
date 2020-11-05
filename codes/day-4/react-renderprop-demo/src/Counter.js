import React, { Component } from 'react'

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
        //this.render()
        return (
            <div>
                {this.props.render(this.state.count, this.increaseCountHandler)}
            </div>
        )
    }
}

export default Counter
