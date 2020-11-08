var blogsList = { 
        blogs: [
        {
            "title": "My Hacktoberfest 2020 Contributions",
            "date": "08-11-2020",
            "teaser": "Find out how I contributed to open source for Hacktoberfest 2020!",
            "content": [
                "<p>Hacktoberfest is a festival celebrating open source, and intends to get people involved with the joy that is open source technology. It's open to anyone, be that Developers, QA Engineers, Designers, Technical Writers, or just those curious about technology!</p>",
                "<p>I've enjoyed Hacktoberfest for many years, and have been actively taking part in since 2016.</p>",
                "<p>The rules for Hacktoberfest are simple. Make 4 pull requests (PRs) to an open source repository on GitHub and don't make small spammy PRs. Once these are done you win a t-shirt or get a tree planted in your name!</p>",
                '<p>Well, these were the original rules...</p>',
                '<p>Hacktoberfest has come under some criticism this year, due to a spammy PRs: small changes to text or even PRs which were blatantly just there to get the swag.</p>',
                "<p>So some changes came about during Hacktoberfest 2020. Repositories had to actively say they were accepting Hacktoberfest PRs (or that they were happy for a PR to contribute toward a person's Hacktoberfest count). This would make the lives of open source maintainers easier, as they wouldn't have to wade through an ocean of spammy PRs on their repositories.</p>",
                '<p>With that preamble out of the way, I would like to outline my contributions to open source for Hacktoberfest!</p>',
                '<h2 id="hacktoberfest-contributions">Hacktoberfest Contributions</h2>',
                '<h3 id="adding-a-licence-file-to-cucumber-html-report">Adding a LICENCE file to cucumber-html-report</h3>',
                '<p><a href="https://github.com/leinonen/cucumber-html-report">cucumber-html-report</a> is a legacy library which creates HTML reports from Cucumber test runs. Now, whilst it is no longer maintained, other developers may wish to fork this legacy library to create a better version or perhaps fix bugs in their local version.</p>',
                '<p>An issue with this was that although in the <code>package.json</code> file it stateed that it is released under a MIT licence, this',
                "wasn't clear. I added a <code>LICENCE.md</code> file to make this more clear, ",
                'and hopefully save some people some time. This resolves <a href="https://github.com/leinonen/cucumber-html-report/issues/81">issue #81</a> of this library.</p>',
                '<h3 id="fixing-styling-for-visualise-spotify">Fixing styling for visualise-spotify</h3>',
                '<p><a href="https://github.com/clarebuckley/visualise-spotify">visualise-spotify</a> is a web-app created by two friends of mine. This uses the Spotify API and displayes to the users some information about them, such as their top artists and top songs.</p>',
                '<p>This open source web-app had some issues open to fix some styling:</p>',
                '<ul>',
                '<li><a href="https://github.com/clarebuckley/visualise-spotify/issues/6">Issue #6 - Ensuring consistent styling across different pages</a> as different pages had very different styles, which may cause some confusion to the user.</li>',
                '<li><a href="https://github.com/clarebuckley/visualise-spotify/issues/8">Issue #8 - Ensure album images are the same size</a> as different album images came through as different sized images.</li>',
                '</ul>',
                '<p>Both of these involved some tweaks to the HTML and CSS, and also fixed some minor typos within the web-app.</p>',
                '<h3 id="add-further-error-handling-to-maze-generation">Add further error handling to maze-generation</h3>',
                '<p><a href="https://github.com/JRIngram/maze-gen">maze-generation</a> is a node package I wrote to allow users to generate mazes of different sizes using different algorithms. This is <a href="https://www.npmjs.com/package/maze-generation">availble on NPM</a>.</p>',
                '<p>I realised that further error handling could be added to this to stop some errors that may occur, especially if people tried to make their mazes too big!</p>',
                '<p>Because of this, one of my PRs for Hacktoberfest was to add addtional error handling and then release version 2.1.0 of maze-generation.</p>',
            ]
        },
    ]
}