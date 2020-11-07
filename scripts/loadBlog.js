function getBlogData() {
    var blogs = blogsList.blogs;
    var currentURL = window.location.href;
    var requestedURL = currentURL.split('#')[1];
    var blog = '';
    for(var i = 0; i < blogs.length; i++){
        var hyphenatedTitle = blogs[i].title.toLowerCase().replaceAll(' ', '-');
        var blogURL = blogs[i].date + '-' + hyphenatedTitle;
        if(requestedURL == blogURL){
            console.log("GOOOOT HERE LADDIE")
            blog = blogs[i];
            break;
        }
    }
    return blog;
}

function loadBlog(){
    var blog = getBlogData();
    var HTMLString = '<header class="blogHeader"><h1>' + blog.title + '</h1>' + 
        '<p class="blogDate">' + blog.date + '</p>' +
        '<p class="blogTeaser">' + blog.teaser + '</p></header>';
    for(var i = 0; i < blog.content.length; i++){
        HTMLString += blog.content[i];
    }
    document.getElementById('blogContent').innerHTML = HTMLString;
}

window.onload = function(){
    loadBlog();
}