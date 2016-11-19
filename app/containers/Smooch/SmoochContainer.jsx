import React, { Component } from "react";
const socket = io(SERVER_ADDRESS);

class SmoochContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			connections: [{text: 'tester'}]
		}
	}
	componentDidMount() {
		socket.on('newConnection', (data) => {
			console.warn('connection data', data);
			const newState = this.state.connections.slice();
			newState.push(data);
			this.setState({
				connections: newState
			})
		})
	}
	render() {
		return (
			<div>
				{this.state.connections.map((data, index) => {
				return <p key={index}>{data.text}</p>
			})}
			</div>
		)
	}
}

export default SmoochContainer;