const expectChai = require('chai').expect;

const URL = 'https://jringram.github.io';

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
        const subtitle = $('#subtitle');
        expectChai(title.getText()).to.equal('Jamie Ingram');
        expectChai(subtitle.getText()).to.equal('Software Developer')
        expect(title.isDisplayed()).toBe(true);
        expect(subtitle.isDisplayed()).toBe(true);
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