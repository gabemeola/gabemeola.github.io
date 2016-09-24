import React, { Component, PropTypes } from "react";
import { connect } from 'react-redux';
import { chatSwitcher } from 'redux/modules/chat';
import { ChatIcon, ChatConvo } from 'components';

class ChatContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			unread: 0,
		}
	}
	handleChatSwitcher() {
		const { dispatch } = this.props;

		dispatch(chatSwitcher());
	}
	render() {
		return(
			<div className="notification-wrapper" style={this.props.route !== "/" ? { visibility: "visible", opacity: "1" } : { visibility: "hidden", opacity: "0" }}>
				<ChatIcon
					unread={this.state.unread}
					chatSwitch={() => this.handleChatSwitcher()}
				/>
				<ChatConvo
					isChatOpen={this.props.isChatOpen}
				/>
			</div>
		)
	}
}

ChatContainer.propTypes = {
	isChatOpen: PropTypes.bool.isRequired,
	unread: PropTypes.number
};

function mapStateToProps({chat}, props) {
	return {
		isChatOpen: chat.isChatOpen
	}
}

export default connect(
	mapStateToProps
)(ChatContainer);