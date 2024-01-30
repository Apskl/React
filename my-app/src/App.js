import logo from './logo.svg';
import './App.css';
import { createElement } from 'react';
export const App = () => {
	const currentYear = new Date().getFullYear();
	return /*#__PURE__*/ createElement(
		'div',
		{
			className: 'App',
		},
		/*#__PURE__*/ createElement(
			'header',
			{
				className: 'App',
			},
			/*#__PURE__*/ createElement('img', {
				src: logo,
				className: 'App-logo',
				alt: 'logo',
			}),
			/*#__PURE__*/ createElement('p', null, 'Edit ', /*#__PURE__*/ createElement('code', null, 'src/App.js'), ' save to reload.'),
			/*#__PURE__*/ createElement(
				'a',
				{
					className: 'App-link',
					href: 'https://reactjs.org',
					target: '_blank',
					rel: 'noopener',
				},
				'Learn React',
			),
			/*#__PURE__*/ createElement('p', null, currentYear),
		),
	);
};
