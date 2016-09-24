const OPEN_CHAT = 'OPEN_CHAT';
const CLOSE_CHAT = 'CLOSE_CHAT';

const initialState = {
	isChatOpen: false,
	error: ''
};

function openChat() {
	return {
		type: OPEN_CHAT
	}
}

function closeChat() {
	return {
		type: CLOSE_CHAT
	}
}

export default function chat(state = initialState, action) {
	switch (action.type) {
		case OPEN_CHAT:
			return {
				...state,
				isChatOpen: true
			};
		case CLOSE_CHAT:
			return {
				...state,
				isChatOpen: false
			};
		default:
			return state
	}
}