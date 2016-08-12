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
	const defer = q.defer();
	const { platform } = window.navigator;
	deviceId = createHash(email + platform, true);
	console.log(deviceId);
	smooch.appUsers.init({
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
		defer.resolve(res);
	});
	return defer.promise;
}

export function updateSmooch(email, name) {
	const defer = q.defer();
	smooch.appUsers.update(smoochUserEmail, {
		email: email,
		givenName: name
	}).then((res) => {
		defer.resolve(res);
	});
	return defer.promise;
}


export function postSmooch(text) {
	const defer = q.defer();
	smooch.conversations.sendMessage(smoochUserEmail, {
		text: text,
		role: "appUser",
		_clientSent: new Date(),
		deviceId: deviceId
	}).then((res) => {
		console.log(res);
		defer.resolve(res);
	});
	return defer.promise;
}


export function getSmooch() {
	const defer = q.defer();
	smooch.conversations.get(smoochUserEmail)
		.then((res) => {
			console.log("Get Smooch: ", res);
			defer.resolve(res);
		});
	return defer.promise;
}

export function checkExistingSmoochStore() {
	const defer = q.defer();
	getStorage("smoochUserEmail").then((res) => {
			if(res) {
				smoochUserEmail = res;
				defer.resolve(true);
			} else {
				defer.resolve(false);
			}
	});
	return defer.promise;
}