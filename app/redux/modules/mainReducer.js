const OPEN_MENU = 'OPEN_MENU';
const CLOSE_MENU = 'CLOSE_MENU';

const initialState = {
	isMenuOpen: false,
	error: ''
};

function openMenu() {
	return {
		type: OPEN_MENU
	}
}

function closeMenu() {
	return {
		type: CLOSE_MENU
	}
}

export default function mainReducer(state = initialState, action) {
	switch (action.type) {
		case OPEN_MENU:
			return {
				...state,
				isMenuOpen: true
			};
		case CLOSE_MENU:
			return {
				...state,
				isMenuOpen: false
			};
		default:
			return state
	}
}