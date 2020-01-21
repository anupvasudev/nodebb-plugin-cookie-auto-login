
const appURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'http://localhost:3000';
const forumURL = process.env.NODE_ENV === 'development' ? 'http://localhost:4567' : 'http://localhost:4567';

module.exports = {
	appURL: appURL,
	forumURL: forumURL,
	logLevel: process.env.NODE_ENV === 'production' ? 'info' : 'debug'
};
