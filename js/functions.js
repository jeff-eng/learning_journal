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
            <picture>
                <source media="(min-width: 308px)" srcset="${blogPost.webpFilepath}" type="image/webp">
                <img class="blog-post__image" src="${blogPost.jpgFilepath}" alt="${blogPost.imgDescription}">
            </picture>
        </a>
        <header class="flex blog-post__header">
            <time class="blog-post__date" datetime="YYYY-MM-DD">${blogPost.getFormattedDateString()}</time>
            <a href="#" class="blog-post__link">
                <h2 class="blog-post__title">${blogPost.title}</h2>
            </a>
            <p class="blog-post__preview">${blogPost.getFirstParagraphText()}</p>
        </header>`;

    return article;
}

function createHeroPostItem(blogPost) {
    const article = createBasicElement(htmlElementTable.article, `hero-post-item-${blogPost.id}`, 'hero-post');

    article.innerHTML = 
        `<div class="hero-img-container">
            <a href="blogpost.html" aria-label="go to article: My new journey as a bootcamp student.">
                <picture>
                    <source media="" srcset="${blogPost.webpFilepath}" type="image/webp">
                    <img class="hero-post__image" src="${blogPost.jpgFilepath}" alt="${blogPost.imgDescription}">
                </picture>
            </a>
        </div>
        <div class="grid hero-post-wrapper">
            <time class="hero-post__date" datetime="YYYY-MM-DD">${blogPost.getFormattedDateString()}</time>
            <a href="blogpost.html" class="hero-post__link">
                <h2 class="hero-post__title">${blogPost.title}</h2>
            </a>
            <p class="hero-post__body">${blogPost.getFirstParagraphText()}</p>
        </div>`;
        
    return article;
}

// Dynamically set year in footer on each page
function setYear() {
    document.addEventListener('DOMContentLoaded', () => {
        const date = new Date();
        const year = date.getUTCFullYear();
        document.getElementById('footer__year').textContent = year;
    });
}

// Functions for generating and formatting dates
function getRandomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

function getFormattedRandomDate(startDate, endDate) {
    const randomDate = getRandomDate(startDate, endDate);

    return formatDate(randomDate);
}

// Create UID recursively
function generateRandomUID(idLength) {
    // Base case
    if (!idLength) {
        return '';
    }

    // Generate random character
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
    const randomNum = Math.floor(Math.random() * charset.length);
    let randomChar = charset[randomNum];

    // Build ID string
    return randomChar += generateRandomUID(idLength - 1);
}

export { createHeroPostItem, createPostItem, setYear, getFormattedRandomDate, generateRandomUID };