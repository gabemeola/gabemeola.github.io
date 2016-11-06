import SmoochCore from "smooch-core"
import createHash from "./createHash";
import q from "q";
import { createStorage, getStorage }  from "./localStorage";


let smoochUserEmail;
let deviceId;
const smooch = new SmoochCore({
	appToken: "3nf36hcp4oj7ab8f52uvmkleb"
});


export function initSmooch(email, name) {
	const { platform } = window.navigator;
	deviceId = createHash(email + platform, true);
	console.log(deviceId);
	return smooch.appUsers.init({
		device: {
			id: deviceId,
			platform: 'web',
			appVersion: '1.0'
		},
		userId: email + '/' + platform
	}).then((res) => {
		console.log("Smooch returns: ", res);
		smoochUserEmail = res.appUser._id;
		createStorage("smoochUserEmail", smoochUserEmail)
			.then((res) => console.warn(res));
		return res;
	});
}

export function updateSmooch(email, name) {
	return smooch.appUsers.update(smoochUserEmail, {
		email: email,
		givenName: name
	}).then((res) => {
		return res;
	});
}


export function postSmooch(text) {
	return smooch.appUsers.sendMessage(smoochUserEmail, {
		text: text,
		role: "appUser",
		_clientSent: new Date(),
		deviceId: deviceId
	}).then((res) => {
		console.log(res);
		return res;
	});
}


export function getSmooch() {
	return smooch.appUsers.getMessages(smoochUserEmail)
		.then((res) => {
			console.log("Get Smooch: ", res);
			return res.messages;
		});
}

export function checkExistingSmoochStore() {
	return getStorage("smoochUserEmail").then((res) => {
			if(res) {
				smoochUserEmail = res;
				return true;
			} else {
				return false;
			}
	});
}

export function removeInitThread(messages) {
	var formattedMessages = messages.slice(); // Return new array
	formattedMessages.shift(); // Remove First Test Init Message(s)
	return formattedMessages;
}

export function createNewThread(text, name, role) {
	return {
		text,
		name,
		role
	};
}