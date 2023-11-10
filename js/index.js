import { blogPosts } from './data.js';
import { createHeroPostItem, createPostItem } from './functions.js';

const reverseChronoPosts = blogPosts.sort((postA, postB) => {
    const dateA = new Date(postA.publishedDate);
    const dateB = new Date(postB.publishedDate);
    return dateB - dateA;
});

let trackedIndex = 0;
const loadPostsQty = 3;

document.getElementById('btn-view-more').addEventListener('click', () => {
    loadPosts();
});

function loadPosts() {
    const startIndex = trackedIndex;
    const endIndex = trackedIndex + loadPostsQty;
    trackedIndex = endIndex;
    
    const postsToDisplay = startIndex === 0 ? reverseChronoPosts.slice(startIndex, trackedIndex += 1) 
        : reverseChronoPosts.slice(startIndex, endIndex);

    if (postsToDisplay.length > 3) {
        document.getElementById('hero-container').append(createHeroPostItem(postsToDisplay[0]));
        document.getElementById('recent-posts').append(...postsToDisplay.slice(1).map((post) => createPostItem(post)));
    } else {
        document.getElementById('recent-posts').append(...postsToDisplay.map((post) => createHeroPostItem(post)));
    }
}

// Load initial set of posts
loadPosts();