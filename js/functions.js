const htmlElementTable = {
    article: 'article'
};

function createBasicElement(tagType, idName='', ...classNames) {
    const htmlElement = document.createElement(tagType);

    htmlElement.id = idName;
    htmlElement.classList.add(...classNames);

    return htmlElement;
}

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

export { createPostItem }