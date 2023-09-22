// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Msanidi',
	imageBackground: true,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Good morning,',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Time to Hack!',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '5afbe66f7845ce44aae7ef859323647f', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '-1.286389',
	defaultLongitude: '36.817223',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/msanidi',
		},
		{
			id: '2',
			name: 'Mail',
			icon: 'mail',
			link: '#',
		},
		{
			id: '3',
			name: 'Todoist',
			icon: 'trello',
			link: '#',
		},
		{
			id: '4',
			name: 'Calendar',
			icon: 'calendar',
			link: '#',
		},
		{
			id: '5',
			name: 'Coffee',
			icon: 'coffee',
			link: '#',
		},
		{
			id: '6',
			name: 'Youtube',
			icon: 'youtube',
			link: '#',
		},
	],
	/**
	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://msanidi.online/',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://msanidi.online/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://msanidi.online/',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://msanidi.online/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://msanidi.online/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://msanidi.online/',
		},
	],
	**/

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'glasses',
			id: '1',
			links: [
				{
					name: 'Ahmia',
					link: 'https://ahmia.fi/',
				},
				{
					name: 'BitValve',
					link: 'https://www.bitvalve.com/',
				},
				{
					name: 'Dark.Fail',
					link: 'https://dark.fail/',
				},
				{
					name: 'SupportXMR',
					link: 'https://www.supportxmr.com/',
				},
			],
		},
		{
			icon: 'music',
			id: '2',
			links: [
				{
					name: 'Inspirational',
					link: '#',
				},
				{
					name: 'Classic',
					link: '#',
				},
				{
					name: 'Oldies',
					link: '#',
				},
				{
					name: 'Rock',
					link: '#',
				},
			],
		},
	]
	/**
	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/msanidi',
				},
			],
		},
	],**/
};
