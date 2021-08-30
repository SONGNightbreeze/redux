import React, { Component } from 'react'
import store from '../../redux/store'
import {
	createIncrementAction,
	createDecrementAction,
	createIncrementAsyncAction
} from '../../redux/count_action'

export default class Count extends Component {

	increment = ()=>{
		const {value} = this.selectNumber
		store.dispatch(createIncrementAction(value*1))
	}
	decrement = ()=>{
		const {value} = this.selectNumber
		store.dispatch(createDecrementAction(value*1))
	}
	incrementIfOdd = ()=>{
		const {value} = this.selectNumber
		const count = store.getState()
		if(count % 2 !== 0){
			store.dispatch(createIncrementAction(value*1))
		}
	}
	incrementAsync = ()=>{
		const {value} = this.selectNumber
		store.dispatch(createIncrementAsyncAction(value*1,500))
	}

	render() {
		return (
			<div>
				<h1>count：{store.getState()}</h1>
				<select ref={c => this.selectNumber = c}>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>&nbsp;
				<button onClick={this.increment}>+</button>&nbsp;
				<button onClick={this.decrement}>-</button>&nbsp;
				<button onClick={this.incrementIfOdd}>+ if Odd</button>&nbsp;
				<button onClick={this.incrementAsync}>+ Async</button>&nbsp;
			</div>
		)
	}
}
