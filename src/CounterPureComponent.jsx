import React, { PureComponent } from 'react'

export default class CounterPureComponent extends PureComponent {
  render() {
    console.log("Counter Pure Component Render!!");
    return (
      <>
        <div>Counter : {this.props.count}</div>
        <button onClick={this.props.onIncrement} >Click</button>
      </>
    )
  }
}
