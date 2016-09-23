const OPEN_NAV = 'OPEN_NAV';
const CLOSE_NAV = 'CLOSE_NAV';
const OPEN_CHAT = 'OPEN_CHAT';
const CLOSE_CHAT = 'CLOSE_CHAT';

const initialState = {
	isNavOpen: false,
	isChatOpen: false,
	error: ''
};

function openMenu() {
	return {
		type: OPEN_NAV
	}
}

function closeMenu() {
	return {
		type: CLOSE_NAV
	}
}

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

export default function menus(state = initialState, action) {
	switch (action.type) {
		case OPEN_NAV:
			return {
				...state,
				isNavOpen: true
			};
		case CLOSE_NAV:
			return {
				...state,
				isNavOpen: false
			};
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