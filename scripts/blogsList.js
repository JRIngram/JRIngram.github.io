function loadBlogList(){
    var blogs = blogsList.blogs;
    var blogListHTML = ''
    for(var i = 0; i < blogs.length; i++){
        var hyphenatedTitle = blogs[i].title.toLowerCase().replaceAll(' ', '-');
        var blogURL = blogs[i].date + '-' + hyphenatedTitle;
        blogListHTML += '<a href="blog.html#' + blogURL + '"><article>' +
                '<h2>' + blogs[i].title + '</h2>' + 
                '<p class="blogDate">' + blogs[i].date + '</p>' + 
                '<p class="teaser">' + blogs[i].teaser + '</p>' +
            '</article></a>'
    }
    document.getElementById('blogList').innerHTML = blogListHTML;
}

window.onload = function() {
    loadBlogList();
}

