import SmoochCore from "smooch-core"
import createHash from "./createHash";
import q from "q";

let smoochUserEmail;
let deviceId;
const smooch = new SmoochCore({
	appToken: "3nf36hcp4oj7ab8f52uvmkleb"
});


export function initSmooch(email) {
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