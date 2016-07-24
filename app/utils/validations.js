export function emailValidate(email) {
	var re = /\S+@\S+\.\S+/;
	return re.test(email);
}

export function blankString(string) {
	return (!string || /^\s*$/.test(string));
}