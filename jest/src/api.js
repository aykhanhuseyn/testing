export const getUser = async () => {
	const rawData = await fetch('https://jsonplaceholder.typicode.com/users/1');
	return await rawData.json();
};
