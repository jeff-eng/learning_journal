import { blogPosts } from './data.js';
import { createHeroPostItem, createPostItem, setYear } from './functions.js';
import { Post } from './Post.js';

const reverseChronoPosts = blogPosts.sort((postA, postB) => {
    const dateA = new Date(postA.publishedDate);
    const dateB = new Date(postB.publishedDate);
    return dateB - dateA;
});

let trackedIndex = 0;
const loadPostsQty = 3;

// Infinite scroll - auto-load posts when scrolling to bottom of page
window.onscroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
        loadPosts();
    }
};

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
        document.getElementById('recent-posts').append(...postsToDisplay.map((post) => createPostItem(post)));

        for (let i = 0; i < loadPostsQty; i++) {
            const postObj = new Post();

            reverseChronoPosts.push(postObj);
        }
    }

}

// Load initial set of posts
loadPosts();
// Dynamically set year
setYear();