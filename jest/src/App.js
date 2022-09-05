import { useEffect, useState } from 'react';
import { getUser } from './api';
import { useTranslation } from 'react-i18next';
import logo from './logo.svg';
import './App.css';
import './i18';

const languages = [
	{
		label: 'AZE',
		value: 'az-AZ',
	},
	{
		label: 'ENG',
		value: 'en-GB',
	},
	{
		label: 'RUS',
		value: 'ru-RU',
	},
];

function App() {
	const { t, i18n } = useTranslation();
	const [user, setUser] = useState();

	useEffect(() => {
		(async function () {
			const data = await getUser();
			console.log(data);
			setUser(data);
		})();
	}, []);

	const changeLang = (lang) => {
		console.log(i18n.changeLanguage);
		i18n.changeLanguage(lang);
	};

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				{user && (
					<h1 title='hello' data-testid='test-id'>
						{user.name /** attr(title) */}
					</h1>
				)}
				<hr />
				<h1>{t('welcome')}</h1>
				<select
					defaultValue={i18n.language}
					onChange={({ target: { value } }) => changeLang(value)}
				>
					{languages.map(({ label, value }) => (
						<option value={value}>{label}</option>
					))}
				</select>

				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn Svelte
				</a>
			</header>
		</div>
	);
}

export default App;
