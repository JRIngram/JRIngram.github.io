describe('Title', () => {
    it('should have the correct title', () => {
        browser.url('https://jringram.github.io');
        expect(browser).toHaveTitle('Jamie Ingram | Software Developer');
    })
});

describe('Correct sections exist', () => {
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
})
