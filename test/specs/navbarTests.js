const expectChai = require("chai").expect;
const homepageURL = "file:///E:/Users/Jamie/Documents/Programming/JRIngram.github.io/index.html";
const blogListURL = "file:///E:/Users/Jamie/Documents/Programming/JRIngram.github.io/blogs-list.html"
const blogPageURL = "file:///E:/Users/Jamie/Documents/Programming/JRIngram.github.io/blog.html#07-11-2020-my-hacktoberfest-2020-contributions";

describe('Navbar tests', () => {
    beforeEach(() => {
        browser.url(homepageURL);
    });

    describe('Home page', () => {
        it('Home link should keep user to the current page', () => {
            const homePageLink = $('=Home'); 
            console.log(homePageLink);
            homePageLink.click();
            const title = $('h1');
            expectChai(title.getText()).to.equal('Jamie Ingram');
            expect(title.isDisplayed()).toBe(true);
        });

        it('Blog link should take user to the blog list', () => {
            const blogListLink = $('=Blogs');
            blogListLink.click();
            const title = $('h1');
            expectChai(title.getText()).to.equal('Blogs');
            expect(title.isDisplayed()).toBe(true);
        });
    });

    describe('Blog List', () => {
        beforeEach(() => {
            browser.url(blogListURL);
        });

        it('Blog link should take user to the current page', () => {
            const blogListLink = $('=Blogs');
            blogListLink.click();
            const title = $('h1');
            expectChai(title.getText()).to.equal('Blogs');
            expect(title.isDisplayed()).toBe(true);
        });

        it('Home link should keep user to the home page', () => {
            const homePageLink = $('=Home');
            homePageLink.click();
            const title = $('h1');
            expectChai(title.getText()).to.equal('Jamie Ingram');
            expect(title.isDisplayed()).toBe(true);
        });
    });

    describe('Blog page', () => {
        beforeEach(() => {
            browser.url(blogPageURL);
        });

        it('Home link should take the user to the home page', () => {
            const homePageLink = $('=Home');
            homePageLink.click();
            const title = $('h1');
            expectChai(title.getText()).to.equal('Jamie Ingram');
            expect(title.isDisplayed()).toBe(true);
        });

        it('Blog link should take user to the current page', () => {
            const blogListLink = $('=Blogs');
            blogListLink.click();
            const title = $('h1');
            expectChai(title.getText()).to.equal('Blogs');
            expect(title.isDisplayed()).toBe(true);
        });
    });
});