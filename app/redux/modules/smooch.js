import { getSmooch, postSmooch, checkExistingSmoochStore } from "utils/smoochUtils";
import { handleNewUserMessage, convoFlow } from "components/Landing/botUtils";

let name = '';
const script = [
	`Hello, my name is GabeBot.`,
	`What is your name?`,
	`Great ${name}! Feel free to take a look at my current work!`,
	`This conversation is persistent, but what is your email in case we get disconnected?`
];

const initialState = {
	conversation: [],
	userName: undefined,
	userEmail: undefined,
	convoScript: script,
	inputDisabled: false,
	scriptMarker: 0,
	isSmoochInit: false
};

export default function chat(state = initialState, action) {
	switch (action.type) {
		default:
			return state;
	}
}