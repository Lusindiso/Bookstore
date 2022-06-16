import { booksActions } from "./books";

export const fetchBooksData = () => async (dispatch) => {
	const fetchData = async () => {
		const response = await fetch(
			"https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/5ZyxeaNJQ7Ur6KUQjhUz/books"
		);
		const data = await response.json();
		return data;
	};
	try {
		const data = await fetchData();
		dispatch(booksActions.replaceBook(data));
	} catch (error) {
		throw new Error("error");
	}
};
