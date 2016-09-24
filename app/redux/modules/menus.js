import preventScroll from "utils/preventScroll";

const OPEN_NAV = 'OPEN_NAV';
const CLOSE_NAV = 'CLOSE_NAV';
const OPEN_CHAT = 'OPEN_CHAT';
const CLOSE_CHAT = 'CLOSE_CHAT';

const initialState = {
	isNavOpen: false,
	isChatOpen: false,
	error: ''
};

export function openNav() {
	return {
		type: OPEN_NAV
	}
}

export function closeNav() {
	return {
		type: CLOSE_NAV
	}
}

export function openChat() {
	return {
		type: OPEN_CHAT
	}
}

export function closeChat() {
	return {
		type: CLOSE_CHAT
	}
}

export function navSwitcher() { // Simple Nav Open / Close Switch Thunk
	return function(dispatch, getState) {
		const navStatus = getState().menus.isNavOpen;

		if(navStatus === true) { // Also prevents scrolling when nav is open
			preventScroll.enable();
			dispatch(closeNav());
		} else {
			preventScroll.disable();
			dispatch(openNav());
		}
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