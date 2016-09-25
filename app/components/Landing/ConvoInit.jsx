import React, { Component, PropTypes } from "react";
import { connect } from 'react-redux';
import { SmoochChats, SmoochInput } from "components";
import { getSmooch, postSmooch, checkExistingSmoochStore } from "utils/smoochUtils";
// import { handleNewUserMessage, convoFlow } from "./botUtils";
import { botFlow, newPost } from 'redux/modules/smooch';

const script = [
	`Hello, my name is GabeBot.`,
	`What is your name?`,
	`Great! Feel free to take a look at my current work!`,
	`This conversation is persistent, but what is your email in case we get disconnected?`
];

class ConvoInit extends Component {
	constructor(props) {
		super(props);
		this.state = {
			conversation: [],
			userName: undefined,
			userEmail: undefined,
			convoScript: script,
			inputDisabled: false,
			scriptMarker: 0,
			isSmoochInit: false
		}
	}
	handlePost(text) {
		const { dispatch } = this.props;
		console.log('newPost ran');
		dispatch(newPost(text));
	}
	componentDidUpdate() {
		const chatElem = document.getElementsByClassName("smooch-chat");
		for (let i = 0; i < chatElem.length; i++) { // Scroll to Bottom of chat on update
			chatElem[i].scrollTop = chatElem[i].scrollHeight
		}
	}
	componentDidMount() {
		const chatElem = document.getElementsByClassName("smooch-chat");
		for (let i = 0; i > chatElem.length; i++) { // Scroll to Bottom of chat on update
			chatElem[i].scrollTop = chatElem[i].scrollHeight
		}
	}
	render() {
		return(
			<div className="smooch">
				<SmoochChats
					conversation={this.props.conversation}
				/>
				<SmoochInput
					onTextSubmit={(text) => setTimeout(this.handlePost(text), 600)}
					isDisabled={this.props.inputDisabled}
				/>
			</div>
		)
	}
}

ConvoInit.propTypes = {
	conversation: PropTypes.array.isRequired,
	inputDisabled: PropTypes.bool.isRequired,
	isSmoochInit: PropTypes.bool.isRequired
};

function mapStateToProps({smooch}, props) {
	return {
		conversation: smooch.conversation,
		inputDisabled: smooch.inputDisabled,
		isSmoochInit: smooch.isSmoochInit
	}
}

export default connect(
	mapStateToProps
)(ConvoInit);