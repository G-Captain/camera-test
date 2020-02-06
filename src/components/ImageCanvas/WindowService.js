
export default {

	windowFocused: false,

	mouseX: null,

	mouseY: null,

	initialize() {
		this.windowFocusCallbackHandler = this.windowFocusCallback.bind(this);
		window.addEventListener("focus", this.windowFocusCallbackHandler);

		this.windowBlurCallbackHandler = this.windowBlurCallback.bind(this);
		window.addEventListener("blur", this.windowBlurCallbackHandler);

		this.windowMouseMoveCallbackHandler = this.windowMouseMoveCallback.bind(this);
		window.addEventListener("mousemove", this.windowMouseMoveCallbackHandler);
	},

	dispose(translation) {
		window.removeEventListener("focus", this.windowFocusCallbackHandler);
		window.removeEventListener("blur", this.windowBlurCallbackHandler);
		window.removeEventListener("mousemove", this.windowMouseMoveCallbackHandler);
	},

    windowBlurCallback() {
    	this.windowFocused = false;
    },

    windowFocusCallback() {
		this.windowFocused = true;
    },

    windowMouseMoveCallback(event) {
    	this.mouseX = event.pageX;
    	this.mouseY = event.pageY;
	},

	getMouseX() {
		return this.mouseX;
	},

	getMouseY() {
		return this.mouseY;
	},

	isWindowFocused() {
		return this.windowFocused;
	}
};
