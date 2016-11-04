import React, { PropTypes } from 'react';

function SmoochChat({conversation}) {
	const convo = conversation.map((info, index) => {
		return (
			<p
				key={index}
				className={"smooch-chat-thread " + (info.role == "appUser" ? "smooch-chat-thread--appUser" : "smooch-chat-thread--appMaker")}
			>
				{info.text}<span className="smooch-chat-name">{info.name}</span>
			</p>
		);
	});

	return (
		<div className="smooch-chat">
			<div>{convo}</div>
		</div>
	)
}

SmoochChat.propTypes = {
	conversation: PropTypes.array
};

SmoochChat.defaultProps = {

};

export default SmoochChat;