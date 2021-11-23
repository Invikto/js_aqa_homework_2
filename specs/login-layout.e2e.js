const logInTheApp = require("../utils/log-in-the-app.js").logInTheApp;

describe('Navigation menu', function () {

	before('Log in the app', async function () {
		await logInTheApp();
	});

	it('All menu items have non-red background-color', async function () {
		const menuItems = await $('#first-nav-block').$$('li');
		for (const item of menuItems) {
			item.moveTo();
			await browser.pause(500);
			const backgroundColor = await item.getCSSProperty('background-color');
			const text = await item.$('a').getText();
			if (backgroundColor.value === 'rgba(255,0,0,1)') {
				throw new Error(`The menu item ${text} has wrong color!`);
			}
		}
	});

});
