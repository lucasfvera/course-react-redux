export const increment = (n = 1) => {
	return {
		type: "INCREMENT",
		payload: n,
	};
};
export const decrement = (n = 1) => {
	return {
		type: "DECREMENT",
		data: n,
	};
};
export const login = () => {
	return {
		type: "SIGN_IN",
	};
};
