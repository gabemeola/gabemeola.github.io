import React, { PropTypes } from 'react';

function SmoochChats({conversation}) {

	const convo = conversation.map((info, index) => {
		return (
			<p
				key={index}
				className={"smooch-chat-thread" + (info.role == "appUser" ? "smooch-chat-thread--appUser" : "smooch-chat-thread--appMaker")}
			>
				{info.text} - <span className="smooch-chat-name">{info.name}</span>
			</p>
		);
	});

	return (
		<div>
			<h3>Smooch Chats</h3>
			{convo}
		</div>
	)
}

SmoochChats.propTypes = {
	conversation: PropTypes.array
};

SmoochChats.defaultProps = {

};

export default SmoochChats;