export var customWindow: object | any = window;
export const isAndroid = () => Boolean(customWindow.hasOwnProperty("epcr"));
export const androidCloseWebViewFragment = () => customWindow.controls.androidCloseWebViewFragment();
