import { blogPosts } from './data.js';
import { createPostItem } from './functions.js';

const reverseChronoPosts = blogPosts.sort((postA, postB) => {
    const dateA = new Date(postA.publishedDate);
    const dateB = new Date(postB.publishedDate);
    return dateB - dateA;
});

// Render feature post - most recent post (full article)
document.getElementById('feature-post-container').innerHTML = reverseChronoPosts.slice(0)[0].renderedHtml;
// Render recent post previews
document.getElementById('recent-posts').append(...reverseChronoPosts.slice(1, 4).map((post) => createPostItem(post)));