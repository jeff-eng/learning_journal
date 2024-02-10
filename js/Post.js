// Create Post object with data passed to constructor
export class Post {
    constructor(id, title, publishedDate, webpFilepath, jpgFilepath, imgDescription, postHtmlString) {
        this.id = id;
        this.title = title;
        this.publishedDate = publishedDate;
        this.webpFilepath = webpFilepath;
        this.jpgFilepath = jpgFilepath;
        this.imgDescription = imgDescription;
        this.postHtmlString = postHtmlString;
    }

    get renderedHtml() { 
        return this.renderArticleHtml(
            this.getFormattedDateString(), 
            this.title, 
            this.postHtmlString
        );
    }

    renderArticleHtml(dateString, title, postHtml) {
        return `<article class="feature-post">
                    <header class="feature-post__header">
                        <time class="feature-post__date" datetime="YYYY-MM-DD">${dateString}</time>
                        <h1 class="feature-post__heading">${title}</h1>
                    </header>
                    ${postHtml}
                </article>`;
    }

    getFirstParagraphText() {
        const parser = new DOMParser();
        // Create HTMLDocument from string
        const htmlDoc = parser.parseFromString(this.postHtmlString, 'text/html');
        return htmlDoc.querySelector('p').textContent;
    }

    getFormattedDateString() {
        const d = new Date(this.publishedDate);
        const options = { timeZone: 'UTC', year: 'numeric', month: 'long', day: 'numeric' };
        return d.toLocaleDateString('en-US', options);
    }

    static generateImageURL(isJpeg) {
        const randomNum = 0 + Math.floor(Math.random() * 6);
        const imgUrl = isJpeg ? `/images/article_${randomNum}.jpg`
            : `/images/article_${randomNum}.webp`;
        return imgUrl;
    }
}