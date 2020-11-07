const expectChai = require('chai').expect;
const URL = "file:///E:/Users/Jamie/Documents/Programming/JRIngram.github.io/index.html";

describe('Title', () => {
    before(() => {
        browser.url(URL);
    });

    it('should have the correct title', () => {
        browser.url(URL);
        expect(browser).toHaveTitle('Jamie Ingram | Software Developer');
    })
});

describe('Headings', () => {
    before(() => {
        browser.url(URL);
    });

    it('Should display the page title and subtitle', () => {
        const title = $('h1');
        expectChai(title.getText()).to.equal('Jamie Ingram');
        expect(title.isDisplayed()).toBe(true);
    });
});

describe('Correct sections exist', () => {
    before(() => {
        browser.url(URL);
    });

    it('About Me', () => {
        const aboutSection = '#aboutMe';
        expect($(aboutSection).isExisting()).toBe(true);
    });

    it('Technologies', () => {
        const technologySection = '#techologies';
        expect($(technologySection).isExisting()).toBe(true);

    });

    it('Projects', () => {
        const projectSection = '#projects';
        expect($(projectSection).isExisting()).toBe(true);
    });

    it('Contact', () => {
        const contactSection = '#contactMe';
        expect($(contactSection).isExisting()).toBe(true);
    });
});