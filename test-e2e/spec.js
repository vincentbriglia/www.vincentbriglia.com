describe('form default values', function () {

	beforeEach(function () {
		browser.get('/');
		browser.waitForAngular();
	});

	it('should say "jacksparrow" if "jacksparrow" is passed', function () {
		element(by.model('user.title')).clear().sendKeys('jacksparrow');
		expect(element(by.model('user.title')).getAttribute('value')).toEqual('jacksparrow');
	});
});