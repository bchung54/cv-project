import './App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import Section, { Personal } from './components/Section';

class App extends Component {
	render() {
		const workExp = [
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
				items: [
					{
						text: 'Manage facilities',
						subItems: ['Open facilities', 'Close facilities']
					},
					{
						text: 'Park cars',
						subItems: ['Drive cars fast', 'Fit tight spaces']
					}
				]
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
				items: [
					{
						text: 'Created totally legit online bookstore out of my garage',
						subItems: ['Sold 10 copies of 2003 Physics textbook']
					},
					{
						text: 'Make money',
						subItems: ['Gain market share by undercutting all third party vendors']
					}
				]
			}
		];

		const eduExp = [
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
					{
						text: 'List your honors like summa cum laude or Economics Honors Society'
					},
					{
						text: 'Studied abroad in City, Country during spring/fall 20YY semester'
					},
					{
						text: 'Any other fun stuff like varsity sports, fraternity/sorority, or something that gives you a little color'
					}
				]
			}
		];
		return (
			<div className="App">
				<Header
					name="John Doe"
					currTitle="Janitor"
					email="blah@blah.com"
					phone="(555)555-5555"
					location="London, UK"
				/>
				<Section title="Work Experience" experiences={workExp} />
				<Section title="Education" experiences={eduExp} />
				<Personal
					title="Skills & Interests"
					skills={['PPT', 'Excel']}
					interests={['basketball', 'computers']}
				/>
			</div>
		);
	}
}

export default App;
