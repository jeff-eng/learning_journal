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
                <source media="(min-width: )" srcset="${blogPost.webpFilepath}" type="image/webp">
                <img class="blog-post__image" src="${blogPost.jpgFilepath}" alt="${blogPost.imgDescription}">
            </picture>
        </a>
        <header class="blog-post__header">
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
        <div class="hero-post-wrapper">
            <time class="hero-post__date" datetime="YYYY-MM-DD">${blogPost.getFormattedDateString()}</time>
            <a href="blogpost.html" class="hero-post__link">
                <h2 class="hero-post__title">${blogPost.title}</h2>
            </a>
            <p class="hero-post__body">${blogPost.getFirstParagraphText()}</p>
        </div>`;
        
    return article;
}

function setYear() {
    document.addEventListener('DOMContentLoaded', () => {
        const date = new Date();
        const year = date.getUTCFullYear();
        document.getElementById('footer__year').textContent = year;
    });
}

// function BlogPost() {
//     this.id = crypto.randomUUID();
//     this.publishedDate = '2023-06-01';
//     this.webpFilepath = '';
//     this.jpgFilepath  = 'https://picsum.photos/309/232';
//     this.imgDescription = 'placeholder image';
//     this.postHtmlString: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
//                          ut labore et dolore magna aliqua.</p>
//                         <picture>
//                             <source media="" srcset="/images/article_5.webp" type="image/webp">
//                             <img src="/images/article_5.jpg" alt="laptop on desk viewed at angle">
//                         </picture>
//                         <h2>Litora Feugiat Eu Maximus Erat Facilisis Torquent</h2>
//                         <p>Nunc sed id semper risus in hendrerit gravida. Platea dictumst vestibulum rhoncus est pellentesque 
//                         elit ullamcorper.</p>
//                         <p>Ut tortor pretium viverra suspendisse potenti nullam ac. In fermentum posuere urna nec tincidunt 
//                         praesent semper feugiat nibh.</p>
//                         <h2>Rutrum Massa Lacus Torquent Justo At</h2>
//                         <p>Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Ac felis donec et odio pellentesque.</p>`,
//         get renderedHtml() { 
//             return this.renderArticleHtml(
//             this.getFormattedDateString(), 
//             this.title, 
//             this.postHtmlString
//             )
//         },
//         renderArticleHtml: function(dateString, title, postHtml) {
//             return `<article class="feature-post">
//                         <header class="feature-post__header">
//                             <time class="feature-post__date" datetime="YYYY-MM-DD">${dateString}</time>
//                             <h1 class="feature-post__heading">${title}</h1>
//                         </header>
//                         ${postHtml}
//                     </article>`;
//         },
//         getFirstParagraphText: function() {
//             const parser = new DOMParser();
//             // Create HTMLDocument from string
//             const htmlDoc = parser.parseFromString(this.postHtmlString, 'text/html');
//             return htmlDoc.querySelector('p').textContent;
//         },
//         getFormattedDateString: function() {
//             const d = new Date(this.publishedDate);
//             const options = { timeZone: 'UTC', year: 'numeric', month: 'long', day: 'numeric' };
//             return d.toLocaleDateString('en-US', options);
//         }
// }

export { createHeroPostItem, createPostItem, setYear };