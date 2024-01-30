import logo from './logo.svg';
import './App.css';

export const App = () => {
	const currentYear = new Date().getFullYear();
	const appDiv = document.createElement('div');
	appDiv.className = 'App';

	const header = document.createElement('header');
	header.className = 'App-header';

	const image = document.createElement('img');
	image.src = logo;
	image.className = 'App-logo';
	image.alt = 'logo';

	const paragraph = document.createElement('p');
	const code = document.createElement('code');
	code.textContent = 'src/App.js';
	paragraph.appendChild(document.createTextNode('Edit '));
	paragraph.appendChild(code);
	paragraph.appendChild(document.createTextNode(' and save to reload.'));

	const link = document.createElement('a');
	link.className = 'App-link';
	link.href = 'https://reactjs.org';
	link.target = '_blank';
	link.rel = 'noopener noreferrer';
	link.textContent = 'Learn React';

	const yearParagraph = document.createElement('p');
	yearParagraph.textContent = currentYear;

	header.appendChild(image);
	header.appendChild(paragraph);
	header.appendChild(link);
	header.appendChild(yearParagraph);
	appDiv.appendChild(header);

	return appDiv;
};
