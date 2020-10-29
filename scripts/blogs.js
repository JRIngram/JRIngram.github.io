function loadBlogList(){
    var blogs = blogsList.blogs;
    var blogListHTML = ''
    for(var i = 0; i < blogs.length; i++){
        console.log(blogs[i].title);
        blogListHTML += '<a href="#' + blogs[i].date + '"><article>' +
                '<p class="blogListTitle">' + blogs[i].title + '</p>' + 
                '<p class="blogListDate">' + blogs[i].date + '</p>' + 
                '<p class="teaser">' + blogs[i].teaser + '</p>' +
            '</article></a>'
    }
    document.getElementById('blogList').innerHTML = blogListHTML;
}

window.onload = function() {
    loadBlogList();
}

