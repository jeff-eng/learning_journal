import { blogPosts } from './data.js';
import { createBasicElement } from './functions.js';

const htmlElementTable = {
    article: 'article'
};

const reverseChronoPosts = blogPosts.sort((postA, postB) => {
    const dateA = new Date(postA.publishedDate);
    const dateB = new Date(postB.publishedDate);
    return dateB - dateA;
});

// Render feature post - most recent post (full article)
document.getElementById('feature-post-container').innerHTML = reverseChronoPosts.slice(0)[0].renderedHtml;
// Render recent post previews
document.getElementById('recent-posts').append(...reverseChronoPosts.slice(1, 4).map((post) => createPostItem(post)));
  
function createPostItem(blogPost) {
    const article = createBasicElement(htmlElementTable.article, `post-item-${blogPost.id}`, 'blog-post');

    article.innerHTML = 
        `<a href="#" aria-label="go to article: ${blogPost.title}">                        
            <picture class="blog-post__image">
                <source media="(min-width: )" srcset="${blogPost.webpFilepath}" type="image/webp">
                <img src="${blogPost.jpgFilepath}" alt="${blogPost.imgDescription}">
            </picture>
        </a>
        <div class="blog-post-wrapper">
            <header class="blog-post__header">
                <time class="blog-post__date" datetime="YYYY-MM-DD">${blogPost.getFormattedDateString()}</time>
                <a href="#" class="blog-post__link">
                    <h2 class="blog-post__title">${blogPost.title}</h2>
                </a>
            </header>
            ${blogPost.getFirstParagraph()}
        </div>`;

    return article;
}