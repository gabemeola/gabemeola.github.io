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

export function chatSwitcher() { // Simple Chat Open / Close Switch Thunk
	return function(dispatch, getState) {
		const chatStatus = getState().chat.isChatOpen;

		chatStatus ? dispatch(closeChat()) : dispatch(openChat());
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