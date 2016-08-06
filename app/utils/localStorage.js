import q from 'q';
const HTML5_SUPPORT = typeof Storage !== void(0);

function newCookie(name, value, days) {
	const date = new Date();
	date.setTime(date.getTime()+(days*24*60*60*1000));
	const expires = "; expires="+date.toGMTString();

	document.cookie = name+"="+value+expires+"; path=/";
}

function getCookie(name) {
	var regexp = new RegExp("(?:^" + name + "|;\s*"+ name + ")=(.*?)(?:;|$)", "g");
	var result = regexp.exec(document.cookie);
	return (result === null) ? null : result[1];
}

function eraseCookie(name) {
	newCookie(name,"",-1);
}



export function createStorage(key, value) {
	const defer = q.defer();
	if(HTML5_SUPPORT) {
		localStorage[key] = value;
		defer.resolve("New Storage Created: ", localStorage[key])
	} else {
		newCookie(key, value, 365);
		defer.resolve(`${key} Cookie Created`);
	}
	return defer.promise;
}

export function getStorage(key) {
	const defer = q.defer();
	if(HTML5_SUPPORT) {
		console("Storage item: ", localStorage[key]);
		defer.resolve(localStorage[key]);
	} else {
		defer.resolve(getCookie(key))
	}
	return defer.promise;
}

export function deleteStorage(key) {
	const defer = q.defer();
	if(HTML5_SUPPORT) {
		localStorage.removeItem(key);
		defer.resolve(`Removed storage ${key}`)
	} else {
		eraseCookie(key);
		defer.resolve(`${key} Cookie Deleted`);
	}
	return defer.promise;
}