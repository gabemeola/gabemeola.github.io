import React, { PropTypes } from 'react';
import NewConvo from "../../utils/NewConvo";

function SmoochChats({conversation}) {
	return (
		<div className="smooch-chat">
			<NewConvo
				conversation={conversation}
			/>
		</div>
	)
}

SmoochChats.propTypes = {
	conversation: PropTypes.array
};

SmoochChats.defaultProps = {

};

export default SmoochChats;