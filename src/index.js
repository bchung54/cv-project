import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const APPLICANT = {
	contact: {
		name: 'John Doe',
		currTitle: 'Administrative Assistant',
		email: 'jobs@jobbymcjobface.com',
		phone: '(555) 555-5555',
		location: 'London, UK'
	},
	experience: {
		work: [
			{
				placeName: 'Disney',
				subTitle: 'Janitor',
				timePeriod: {
					from: {
						month: 'Jan',
						year: 2010
					},
					to: {
						month: 'May',
						year: 2015
					}
				},
				location: {
					city: 'Denver',
					state: 'CO'
				},
				items: ['Manage facilities', 'Park cars', '']
			},
			{
				placeName: 'Amazon',
				subTitle: 'CEO',
				timePeriod: {
					from: {
						month: 'Jan',
						year: 2020
					},
					to: {
						month: 'May',
						year: 2020
					}
				},
				location: {
					city: 'New York City',
					state: 'NY'
				},
				items: ['Created totally legit online bookstore out of my garage', 'Make money', '']
			}
		],
		education: [
			{
				placeName: 'University Name',
				subTitle: 'Degree (e.g. BS), Majors (e.g. Literature)',
				timePeriod: {
					from: {
						month: 'Jan',
						year: 2015
					},
					to: {
						month: 'Jan',
						year: 2015
					}
				},
				location: {
					city: 'Cambridge',
					state: 'MA'
				},
				items: [
					'List your honors like summa cum laude or Economics Honors Society',
					'Studied abroad in City, Country during spring/fall 20YY semester',
					'Any other fun stuff like varsity sports, fraternity/sorority, or something that gives you a little color'
				]
			}
		]
	},
	personals: {
		skills: ['PPT', 'Excel'],
		interests: ['basketball', 'computers']
	}
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App applicant={APPLICANT} />
	</React.StrictMode>
);
