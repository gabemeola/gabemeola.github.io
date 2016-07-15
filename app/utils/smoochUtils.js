import SmoochCore from "smooch-core"
import createHash from "./createHash";
import q from "q";

let smoochUserEmail;
let deviceId;
let smooch = new SmoochCore({
	appToken: "3nf36hcp4oj7ab8f52uvmkleb"
});


export function initSmooch(email) {
	let defer = q.defer();
	deviceId = createHash(email + window.navigator.platform, true);
	console.log(deviceId);
	smooch.appUsers.init({
		device: {
			id: deviceId,
			platform: 'web',
			appVersion: '1.0'
		},
		userId: email
	}).then((res) => {
		console.log("Smooch returns: ", res);
		smoochUserEmail = res.appUser._id;
		defer.resolve(res);
	});
	return defer.promise;
}


export function postSmooch(text) {
	let defer = q.defer();
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
	let defer = q.defer();
	smooch.conversations.get(smoochUserEmail)
		.then((res) => {
			console.log("Get Smooch: ", res);
			defer.resolve(res);
		});
	return defer.promise;
}