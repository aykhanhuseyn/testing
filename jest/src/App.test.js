import { render, screen } from '@testing-library/react';
import App from './App';
import { getUser } from './api';

test('renders learn react link', () => {
	render(<App />);
	const linkElement = screen.getByText(/learn (react|svelte)/i);
	expect(linkElement).toBeInTheDocument();
});

test('loads user data', async () => {
	render(<App />);

	const title = await screen.findByTestId('test-id');
	expect(title).toBeInTheDocument();
});

test('check user data', async () => {
	const data = await getUser();

	expect(data.address.street).toEqual('Kulas Light');

	expect(data).toEqual({
		address: {
			street: 'Kulas Light',
			suite: 'Apt. 556',
			city: 'Gwenborough',
			zipcode: '92998-3874',
			geo: {
				lat: '-37.3159',
				lng: '81.1496',
			},
		},
		company: {
			name: 'Romaguera-Crona',
			catchPhrase: 'Multi-layered client-server neural-net',
			bs: 'harness real-time e-markets',
		},
		email: 'Sincere@april.biz',
		id: 1,
		name: 'Leanne Graham',
		phone: '1-770-736-8031 x56442',
		username: 'Bret',
		website: 'hildegard.org',
	});
});
