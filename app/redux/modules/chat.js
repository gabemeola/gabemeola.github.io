const OPEN_CHAT = 'OPEN_CHAT';
const CLOSE_CHAT = 'CLOSE_CHAT';
const INCREASE_UNREAD_COUNT = 'INCREASE_UNREAD_COUNT';
const CLEAR_UNREAD_COUNT = 'CLEAR_UNREAD_COUNT';

const initialState = {
	isChatOpen: false,
	unreadCount: 0,
	error: ''
};

/* Action Creators */
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

function increaseUnreadCount() {
	return {
		type: INCREASE_UNREAD_COUNT
	}
}

function clearUnreadCount() {
	return {
		type: CLEAR_UNREAD_COUNT
	}
}

/* Thunks */
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
		case INCREASE_UNREAD_COUNT:
			return {
				...state,
				unreadCount: state.unreadCount + 1
			};
		case CLEAR_UNREAD_COUNT:
			return {
				...state,
				unreadCount: 0
			};
		default:
			return state
	}
}