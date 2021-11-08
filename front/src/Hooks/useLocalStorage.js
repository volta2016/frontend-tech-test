import { useState } from "react";

export function useLocalStorage(key, initialValue) {
	const [storedValue, setStoredValue] = useState(() => {
		try {
			const item = window.localStorage.getItem(key);
			return item ? JSON.parse(item) : initialValue;
		} catch (err) {
			return initialValue;
		}
	});

	//get reference of storage element

	const setValue = (value) => {
		try {
			setStoredValue(value);
			window.localStorage.setItem(key, JSON.stringify(value));
		} catch (err) {
			console.log(err);
		}
	};

	return [storedValue, setValue];
}
