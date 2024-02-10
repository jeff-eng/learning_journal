import { blogPosts } from './data.js';
import { createPostItem, setYear } from './functions.js';
import { Post } from './Post.js';

const reverseChronoPosts = blogPosts.map(postData => {
    const { id, title, publishedDate, webpFilepath, jpgFilepath, imgDescription, postHtmlString } = postData;
    return new Post(id, title, publishedDate, webpFilepath, jpgFilepath, imgDescription, postHtmlString);
}).sort((postA, postB) => {
    const dateA = new Date(postA.publishedDate);
    const dateB = new Date(postB.publishedDate);
    return dateB - dateA;
});

document.getElementById('about-recent-posts').append(...reverseChronoPosts.slice(1, 4).map((post) => createPostItem(post)));

// Dynamically set year
setYear();