import React, { Component } from "react";
import { connect } from 'react-redux';
const socket = io.connect(SERVER_ADDRESS);

class SmoochContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			connections: [{text: 'tester'}]
		}
	}
	componentDidMount() {
		console.log('socket address', SERVER_ADDRESS + '/api/hook/' + this.props.smoochId);
		socket.on(this.props.smoochId, (data) => {
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

function mapStateToProps({smooch}, props) {
	return {
		smoochId: smooch.smoochId
	}
}

export default connect(
	mapStateToProps
)(SmoochContainer);