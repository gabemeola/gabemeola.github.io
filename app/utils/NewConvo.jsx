import React, { PropTypes } from "react";

function NewConvo({conversation}) {
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
		<div>{convo}</div>
	);
}

NewConvo.propTypes = {
	conversation: PropTypes.array.isRequired
};

export default NewConvo;