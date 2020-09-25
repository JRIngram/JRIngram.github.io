const { expect } = require("chai");

const URL = "file:///E:/Users/Jamie/Documents/Programming/JRIngram.github.io/index.html";

describe('Contact links', () => {
    before(() => {
        browser.url(URL);
    });

    afterEach(() => {
        browser.closeWindow();
        browser.switchWindow(URL); 
    });

    it('Goes to Github when clicking the GitHub link', () =>{
        const githubLinkSelector = $('a=GitHub');
        const githubProfileTitle = $('span=JRIngram');
        githubLinkSelector.click();
        browser.switchWindow('https://github.com/JRIngram');
        githubProfileTitle.waitForExist({ timeout: 5000 });
    });
});

describe('Project Links', () => {
    before(() => {
        browser.url(URL);
    });

    afterEach(() => {
        browser.closeWindow();
        browser.switchWindow(URL); 
    });

    describe('Unit Convert App', () => {
        it('Unit convertor app link takes user to the github page', () => {
            const projectLink = $('a=Unit Convertor App:');
            const expectedURL = 'https://github.com/JRIngram/UnitConvertApp';
            const projectTitle = $('a=UnitConvertApp');
            projectLink.click();
            browser.switchWindow(expectedURL);
            expect(projectTitle.isExisting()).to.equal(true);
        });
    })

    describe('Travelling Sales Man', () => {
        it('Travelling Salesman link takes user to the github page', () => {
            const projectLink = $('a=CI Travelling Salesman:');
            const expectedURL = 'https://github.com/JRIngram/CI-Travelling-Salesman';
            const projectTitle = $('a=CI-Travelling-Salesman');
            projectLink.click();
            browser.switchWindow(expectedURL);
            expect(projectTitle.isExisting()).to.equal(true);
        });

        it('takes the user to the computational intelligence page on Wikipedia when the computational intelligence link is clicked', () => {
            const wikiLink = $('a=computational intelligence');
            const expectedURL = 'https://en.wikipedia.org/wiki/Computational_intelligence';
            const pageTitle = 'Computational intelligence';
            wikiLink.click();
            browser.switchWindow(expectedURL);
            expect($('#firstHeading').getText()).to.equal(pageTitle);
        });
    })

    describe('Word Guesser', () => {
        it('Word Guesser link takes user to the github page', () => {
            const projectLink = $('a=Word Guesser:');
            const expectedURL = 'https://github.com/JRIngram/Word_Guesser';
            const projectTitle = $('a=Word_Guesser');
            projectLink.click();
            browser.switchWindow(expectedURL);
            expect(projectTitle.isExisting()).to.equal(true);
        });

        it('takes the user to the Hamming distance page on Wikipedia when the Hamming distance link is clicked', () => {
            const wikiLink = $('a=Hamming distance');
            const expectedURL = 'https://en.wikipedia.org/wiki/Hamming_distance';
            const pageTitle = 'Hamming distance';
            wikiLink.click();
            browser.switchWindow(expectedURL);
            expect($('#firstHeading').getText()).to.equal(pageTitle);
        });
    });

    describe('Mazegen', () => {
        it('Maze gen link takes user to the github page', () => {
            const projectLink = $('a=Maze Generation:');
            const expectedURL = 'https://github.com/JRIngram/maze-gen';
            const projectTitle = $('a=maze-gen');
            projectLink.click();
            browser.switchWindow(expectedURL);
            expect(projectTitle.isExisting()).to.equal(true);
        });
    });

    describe(('Ratoban'), () => {
        it('Ratoban link takes user to the Itch.io page', () => {
            const projectLink = $('a=Ratoban:');
            const expectedURL = 'https://jringram.itch.io/ratoban';
            const projectTitle = $('h1=Ratoban');
            projectLink.click();
            browser.switchWindow(expectedURL);
            expect(projectTitle.isExisting()).to.equal(true);
        });

        it('takes the user to the Sokoban page on Wikipedia when the Sokoban link is clicked', () => {
            const wikiLink = $('a=Sokoban');
            const expectedURL = 'https://en.wikipedia.org/wiki/Sokoban';
            const pageTitle = 'Sokoban';
            wikiLink.click();
            browser.switchWindow(expectedURL);
            expect($('#firstHeading').getText()).to.equal(pageTitle);
        });
    })

});
