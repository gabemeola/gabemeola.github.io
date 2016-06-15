const fixedElem = document.getElementById('app');
const keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
	e = e || window.event;
	if (e.preventDefault)
		e.preventDefault();
	e.returnValue = false;
}
function preventDefaultForScrollKeys(e) {
	if (keys[e.keyCode]) {
		preventDefault(e);
		return false;
	}
}

const PreventScroll = {
	disable() {
		fixedElem.addEventListener('touchmove', (e) => {
			e.preventDefault();
		}, false);
		fixedElem.addEventListener('DOMMouseScroll', preventDefault, false);
		fixedElem.onwheel = preventDefault; // modern standard
		fixedElem.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
		fixedElem.ontouchmove  = preventDefault; // mobile
		document.onkeydown  = preventDefaultForScrollKeys; //prevent scroll with keys
	},
	enable() {
		fixedElem.removeEventListener('touchmove', (e) => {
			e.preventDefault();
		}, false);
		fixedElem.removeEventListener('DOMMouseScroll', preventDefault, false);
		fixedElem.onmousewheel = document.onmousewheel = null;
		fixedElem.onwheel = null;
		fixedElem.ontouchmove = null;
		document.onkeydown = null;
	}
};

export default PreventScroll;