import { blogPosts } from './data.js';
import { createPostItem } from './functions.js';

const reverseChronoPosts = blogPosts.sort((postA, postB) => {
    const dateA = new Date(postA.publishedDate);
    const dateB = new Date(postB.publishedDate);
    return dateB - dateA;
});

document.getElementById('about-recent-posts').append(...reverseChronoPosts.slice(1, 4).map((post) => createPostItem(post)));