const logInTheApp = require("../utils/log-in-the-app.js").logInTheApp;

describe('Header', function () {

	before('Log in the app', async function () {
		await logInTheApp();
	});

	it('There is a hidden clickable button', async function () {
		const header = await $('header');
		await browser.execute(function (element) {
			element.remove();
		}, header);
		const alertButton = await $('//button[text()="alert"]');
		await browser.execute(function (element) {
			element.click();
		}, alertButton);
		await browser.acceptAlert();
	});

});
