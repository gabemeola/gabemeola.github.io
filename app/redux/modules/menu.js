import preventScroll from "utils/preventScroll";

const OPEN_NAV = 'OPEN_NAV';
const CLOSE_NAV = 'CLOSE_NAV';

const initialState = {
	isNavOpen: false,
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

export function navSwitcher() { // Simple Nav Open / Close Switch Thunk
	return function(dispatch, getState) {
		const navStatus = getState().menu.isNavOpen;

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
		default:
			return state
	}
}