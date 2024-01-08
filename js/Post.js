import { getFormattedRandomDate } from "./functions.js";

export class Post {
    constructor() {
        this.id = crypto.randomUUID();
        this.title = 'Scrimba Rocks!'
        this.publishedDate = getFormattedRandomDate((new Date(2023, 0, 1)), (new Date()));
        this.webpFilepath = this.generateImageURL(false, 309, 232);
        this.jpgFilepath = this.generateImageURL(true, 309, 232);
        this.imgDescription = 'placeholder image';
        this.postHtmlString = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                              ut labore et dolore magna aliqua.</p>
                             <picture>
                                 <source media="" srcset="https://picsum.photos/309/232.webp" type="image/webp">
                                 <img src="https://picsum.photos/309/232.jpg" alt="placeholder">
                             </picture>
                             <h2>Litora Feugiat Eu Maximus Erat Facilisis Torquent</h2>
                             <p>Nunc sed id semper risus in hendrerit gravida. Platea dictumst vestibulum rhoncus est pellentesque 
                             elit ullamcorper.</p>
                             <p>Ut tortor pretium viverra suspendisse potenti nullam ac. In fermentum posuere urna nec tincidunt 
                             praesent semper feugiat nibh.</p>
                             <h2>Rutrum Massa Lacus Torquent Justo At</h2>
                             <p>Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Ac felis donec et odio pellentesque.</p>`
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

    generateImageURL(isJpeg, pxWidth, pxHeight) {
        const randomNum = Math.floor(Math.random() * 1000);
        const imgUrl = isJpeg ? `https://picsum.photos/id/${randomNum}/${pxWidth}/${pxHeight}.jpg`
            : `https://picsum.photos/id/${randomNum}/${pxWidth}/${pxHeight}.webp`;
        return imgUrl;
    }
}