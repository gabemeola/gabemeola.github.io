import SmoochCore from "smooch-core"
import createHash from "./createHash";

let smooch = new SmoochCore({
	appToken: "3nf36hcp4oj7ab8f52uvmkleb"
});

export function init(email) {
	let smoochId = createHash(email + window.navigator.platform, true);
	console.log(smoochId);
	smooch.appUsers.init({
		device: {
			id: smoochId,
			platform: 'web',
			appVersion: '1.0'
		},
		userId: email
	}).then((res) => console.log("Smooch returns: ", res));
}