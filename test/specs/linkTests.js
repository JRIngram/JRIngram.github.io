const URL = 'https://jringram.github.io';

describe('Contact links', () => {
    before(() => {
        browser.url(URL);
    });

    it('Goes to Github when clicking the GitHub link', () =>{
        const githubLinkSelector = $('a=GitHub');
        const githubProfileTitle = $('span=JRIngram');
        githubLinkSelector.click();
        browser.switchWindow('https://github.com/JRIngram');
        githubProfileTitle.waitForExist({ timeout: 5000 });
        browser.switchWindow(URL);
    });
});

describe('Project Links', () => {
    before(() => {
        browser.url(URL);
    });

    afterEach(() => {
        browser.switchWindow(URL); 
    });

    it('Travelling Salesman link takes user to the github page', () => {
        const projectLink = $('a=CI Travelling Salesman:');
        const expectedURL = 'https://github.com/JRIngram/CI-Travelling-Salesman';
        const projectTitle = $('a=CI-Travelling-Salesman');
        projectLink.click();
        browser.switchWindow(expectedURL);
        expect(projectTitle.isExisting()).toBe(true);
    });

    it('Word Guesser link takes user to the github page', () => {
        const projectLink = $('a=Word Guesser:');
        const expectedURL = 'https://github.com/JRIngram/Word_Guesser';
        const projectTitle = $('a=Word_Guesser');
        projectLink.click();
        browser.switchWindow(expectedURL);
        expect(projectTitle.isExisting()).toBe(true);
    });

    it('Maze gen link takes user to the github page', () => {
        const projectLink = $('a=Maze Generation:');
        const expectedURL = 'https://github.com/JRIngram/maze-gen';
        const projectTitle = $('a=maze-gen');
        projectLink.click();
        browser.switchWindow(expectedURL);
        expect(projectTitle.isExisting()).toBe(true);
    });

    it('Ratoban link takes user to the Itch.io page', () => {
        const projectLink = $('a=Ratoban:');
        const expectedURL = 'https://jringram.itch.io/ratoban';
        const projectTitle = $('h1=Ratoban');
        projectLink.click();
        browser.switchWindow(expectedURL);
        expect(projectTitle.isExisting()).toBe(true);
    });
});
