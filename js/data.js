const blogPosts = [
    {   
        id: 0,
        publishedDate: '2023-01-01',
        title: 'Happy New (Coding) Year',
        webpFilepath: '/images/article_0.webp',
        jpgFilepath: '/images/article_0.jpg',
        imgDescription: 'laptop on outdoor table',
        postHtmlString: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                         ut labore et dolore magna aliqua.</p>
                        <picture>
                            <source media="" srcset="/images/article_0.webp" type="image/webp">
                            <img src="/images/article_0.jpg" alt="laptop on desk viewed at angle">
                        </picture>
                        <h2>Litora Feugiat Eu Maximus Erat Facilisis Torquent</h2>
                        <p>Nunc sed id semper risus in hendrerit gravida. Platea dictumst vestibulum rhoncus est pellentesque 
                        elit ullamcorper.</p>
                        <p>Ut tortor pretium viverra suspendisse potenti nullam ac. In fermentum posuere urna nec tincidunt 
                        praesent semper feugiat nibh.</p>
                        <h2>Rutrum Massa Lacus Torquent Justo At</h2>
                        <p>Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Ac felis donec et odio pellentesque.</p>`,
        get renderedHtml() { 
            return this.renderArticleHtml(
            this.getFormattedDateString(), 
            this.title, 
            this.postHtmlString
            )
        },
        renderArticleHtml: function(dateString, title, postHtml) {
            return `<article class="feature-post">
                        <header class="feature-post__header">
                            <time class="feature-post__date" datetime="YYYY-MM-DD">${dateString}</time>
                            <h1 class="feature-post__heading">${title}</h1>
                        </header>
                        ${postHtml}
                    </article>`;
        },
        getFirstParagraph: function() {
            const parser = new DOMParser();
            // Create HTMLDocument from string
            const htmlDoc = parser.parseFromString(this.postHtmlString, 'text/html');
            return htmlDoc.querySelector('p').textContent;
        },
        getFormattedDateString: function() {
            const d = new Date(this.publishedDate);
            const options = { timeZone: 'UTC', year: 'numeric', month: 'long', day: 'numeric' };
            return d.toLocaleDateString('en-US', options);
        }
    },
    {
        id: 1,
        publishedDate: '2023-01-11',
        title: 'CSS !== my Achilles Heel',
        webpFilepath: '/images/article_1.webp',
        jpgFilepath: '/images/article_1.jpg',
        imgDescription: 'close up of code editor displayed on computer screen',
        postHtmlString: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                         ut labore et dolore magna aliqua.</p>
                        <picture>
                            <source media="" srcset="/images/article_1.webp" type="image/webp">
                            <img src="/images/article_1.jpg" alt="laptop on desk viewed at angle">
                        </picture>
                        <h2>Litora Feugiat Eu Maximus Erat Facilisis Torquent</h2>
                        <p>Nunc sed id semper risus in hendrerit gravida. Platea dictumst vestibulum rhoncus est pellentesque 
                        elit ullamcorper.</p>
                        <p>Ut tortor pretium viverra suspendisse potenti nullam ac. In fermentum posuere urna nec tincidunt 
                        praesent semper feugiat nibh.</p>
                        <h2>Rutrum Massa Lacus Torquent Justo At</h2>
                        <p>Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Ac felis donec et odio pellentesque.</p>`,
        get renderedHtml() { 
            return this.renderArticleHtml(
            this.getFormattedDateString(), 
            this.title, 
            this.postHtmlString
            )
        },
        renderArticleHtml: function(dateString, title, postHtml) {
            return `<article class="feature-post">
                        <header class="feature-post__header">
                            <time class="feature-post__date" datetime="YYYY-MM-DD">${dateString}</time>
                            <h1 class="feature-post__heading">${title}</h1>
                        </header>
                        ${postHtml}
                    </article>`;
        },
        getFirstParagraph: function() {
            const parser = new DOMParser();
            // Create HTMLDocument from string
            const htmlDoc = parser.parseFromString(this.postHtmlString, 'text/html');
            return htmlDoc.querySelector('p').textContent;
        },
        getFormattedDateString: function() {
            const d = new Date(this.publishedDate);
            const options = { timeZone: 'UTC', year: 'numeric', month: 'long', day: 'numeric' };
            return d.toLocaleDateString('en-US', options);
        }
    },
    {
        id: 2,
        publishedDate: '2023-01-25',
        title: 'Friendly neighborhood Flexbox',
        webpFilepath: '/images/article_2.webp',
        jpgFilepath: '/images/article_2.jpg',
        imgDescription: 'girl walking across sandy beach',
        postHtmlString: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                         ut labore et dolore magna aliqua.</p>
                        <picture>
                            <source media="" srcset="/images/article_2.webp" type="image/webp">
                            <img src="/images/article_2.jpg" alt="laptop on desk viewed at angle">
                        </picture>
                        <h2>Litora Feugiat Eu Maximus Erat Facilisis Torquent</h2>
                        <p>Nunc sed id semper risus in hendrerit gravida. Platea dictumst vestibulum rhoncus est pellentesque 
                        elit ullamcorper.</p>
                        <p>Ut tortor pretium viverra suspendisse potenti nullam ac. In fermentum posuere urna nec tincidunt 
                        praesent semper feugiat nibh.</p>
                        <h2>Rutrum Massa Lacus Torquent Justo At</h2>
                        <p>Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Ac felis donec et odio pellentesque.</p>`,
        get renderedHtml() { 
            return this.renderArticleHtml(
            this.getFormattedDateString(), 
            this.title, 
            this.postHtmlString
            )
        },
        renderArticleHtml: function(dateString, title, postHtml) {
            return `<article class="feature-post">
                        <header class="feature-post__header">
                            <time class="feature-post__date" datetime="YYYY-MM-DD">${dateString}</time>
                            <h1 class="feature-post__heading">${title}</h1>
                        </header>
                        ${postHtml}
                    </article>`;
        },
        getFirstParagraph: function() {
            const parser = new DOMParser();
            // Create HTMLDocument from string
            const htmlDoc = parser.parseFromString(this.postHtmlString, 'text/html');
            return htmlDoc.querySelector('p').textContent;
        },
        getFormattedDateString: function() {
            const d = new Date(this.publishedDate);
            const options = { timeZone: 'UTC', year: 'numeric', month: 'long', day: 'numeric' };
            return d.toLocaleDateString('en-US', options);
        }
    },
    {
        id: 3,
        publishedDate: '2023-02-08',
        title: 'Do projects. This is the way.',
        webpFilepath: '/images/article_3.webp',
        jpgFilepath: '/images/article_3.jpg',
        imgDescription: 'abstract image',
        postHtmlString: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                         ut labore et dolore magna aliqua.</p>
                        <picture>
                            <source media="" srcset="/images/article_3.webp" type="image/webp">
                            <img src="/images/article_3.jpg" alt="laptop on desk viewed at angle">
                        </picture>
                        <h2>Litora Feugiat Eu Maximus Erat Facilisis Torquent</h2>
                        <p>Nunc sed id semper risus in hendrerit gravida. Platea dictumst vestibulum rhoncus est pellentesque 
                        elit ullamcorper.</p>
                        <p>Ut tortor pretium viverra suspendisse potenti nullam ac. In fermentum posuere urna nec tincidunt 
                        praesent semper feugiat nibh.</p>
                        <h2>Rutrum Massa Lacus Torquent Justo At</h2>
                        <p>Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Ac felis donec et odio pellentesque.</p>`,
        get renderedHtml() { 
            return this.renderArticleHtml(
            this.getFormattedDateString(), 
            this.title, 
            this.postHtmlString
            )
        },
        renderArticleHtml: function(dateString, title, postHtml) {
            return `<article class="feature-post">
                        <header class="feature-post__header">
                            <time class="feature-post__date" datetime="YYYY-MM-DD">${dateString}</time>
                            <h1 class="feature-post__heading">${title}</h1>
                        </header>
                        ${postHtml}
                    </article>`;
        },
        getFirstParagraph: function() {
            const parser = new DOMParser();
            // Create HTMLDocument from string
            const htmlDoc = parser.parseFromString(this.postHtmlString, 'text/html');
            return htmlDoc.querySelector('p').textContent;
        },
        getFormattedDateString: function() {
            const d = new Date(this.publishedDate);
            const options = { timeZone: 'UTC', year: 'numeric', month: 'long', day: 'numeric' };
            return d.toLocaleDateString('en-US', options);
        }
    },
    {
        id: 4,
        publishedDate: '2023-03-08',
        title: 'First make it work',
        webpFilepath: '/images/article_4.webp',
        jpgFilepath: '/images/article_4.jpg',
        imgDescription: 'hand holding lightbulb',
        postHtmlString: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                         ut labore et dolore magna aliqua.</p>
                        <picture>
                            <source media="" srcset="/images/article_4.webp" type="image/webp">
                            <img src="/images/article_4.jpg" alt="laptop on desk viewed at angle">
                        </picture>
                        <h2>Litora Feugiat Eu Maximus Erat Facilisis Torquent</h2>
                        <p>Nunc sed id semper risus in hendrerit gravida. Platea dictumst vestibulum rhoncus est pellentesque 
                        elit ullamcorper.</p>
                        <p>Ut tortor pretium viverra suspendisse potenti nullam ac. In fermentum posuere urna nec tincidunt 
                        praesent semper feugiat nibh.</p>
                        <h2>Rutrum Massa Lacus Torquent Justo At</h2>
                        <p>Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Ac felis donec et odio pellentesque.</p>`,
        get renderedHtml() { 
            return this.renderArticleHtml(
            this.getFormattedDateString(), 
            this.title, 
            this.postHtmlString
            )
        },
        renderArticleHtml: function(dateString, title, postHtml) {
            return `<article class="feature-post">
                        <header class="feature-post__header">
                            <time class="feature-post__date" datetime="YYYY-MM-DD">${dateString}</time>
                            <h1 class="feature-post__heading">${title}</h1>
                        </header>
                        ${postHtml}
                    </article>`;
        },
        getFirstParagraph: function() {
            const parser = new DOMParser();
            // Create HTMLDocument from string
            const htmlDoc = parser.parseFromString(this.postHtmlString, 'text/html');
            return htmlDoc.querySelector('p').textContent;
        },
        getFormattedDateString: function() {
            const d = new Date(this.publishedDate);
            const options = { timeZone: 'UTC', year: 'numeric', month: 'long', day: 'numeric' };
            return d.toLocaleDateString('en-US', options);
        }
    },
    {
        id: 5,
        publishedDate: '2023-04-05',
        title: 'Spice up your projects',
        webpFilepath: '/images/article_5.webp',
        jpgFilepath: '/images/article_5.jpg',
        imgDescription: 'laptop on desk viewed at angle',
        postHtmlString: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                         ut labore et dolore magna aliqua.</p>
                        <picture>
                            <source media="" srcset="/images/article_5.webp" type="image/webp">
                            <img src="/images/article_5.jpg" alt="laptop on desk viewed at angle">
                        </picture>
                        <h2>Litora Feugiat Eu Maximus Erat Facilisis Torquent</h2>
                        <p>Nunc sed id semper risus in hendrerit gravida. Platea dictumst vestibulum rhoncus est pellentesque 
                        elit ullamcorper.</p>
                        <p>Ut tortor pretium viverra suspendisse potenti nullam ac. In fermentum posuere urna nec tincidunt 
                        praesent semper feugiat nibh.</p>
                        <h2>Rutrum Massa Lacus Torquent Justo At</h2>
                        <p>Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Ac felis donec et odio pellentesque.</p>`,
        get renderedHtml() { 
            return this.renderArticleHtml(
            this.getFormattedDateString(), 
            this.title, 
            this.postHtmlString
            )
        },
        renderArticleHtml: function(dateString, title, postHtml) {
            return `<article class="feature-post">
                        <header class="feature-post__header">
                            <time class="feature-post__date" datetime="YYYY-MM-DD">${dateString}</time>
                            <h1 class="feature-post__heading">${title}</h1>
                        </header>
                        ${postHtml}
                    </article>`;
        },
        getFirstParagraph: function() {
            const parser = new DOMParser();
            // Create HTMLDocument from string
            const htmlDoc = parser.parseFromString(this.postHtmlString, 'text/html');
            return htmlDoc.querySelector('p').textContent;
        },
        getFormattedDateString: function() {
            const d = new Date(this.publishedDate);
            const options = { timeZone: 'UTC', year: 'numeric', month: 'long', day: 'numeric' };
            return d.toLocaleDateString('en-US', options);
        }
    },
    {
        id: 6,
        publishedDate: '2023-05-03',
        title: 'My new journey as a bootcamp student.',
        webpFilepath: '/images/article_6.webp',
        jpgFilepath: '/images/article_6.jpg',
        imgDescription: 'laptop next to lamp on desk',
        postHtmlString: `<p>After several months of learning in the Frontend Developer Career Path, 
                        I've made the big jump over to the Bootcamp to get expert code reviews 
                        of my Solo Projects projects and meet like-minded peers.</p>
                        <picture>
                            <source media="" srcset="/images/article_6.webp" type="image/webp">
                            <img src="/images/article_6.jpg" alt="laptop next to lamp on desk">
                        </picture>
                        <h2>How I stay committed to learning</h2>
                        <p>I like to think of myself as a lifelong learner. I used to spend hours and hours learning, 
                            then try to create simple projects using what I learned or work new techniques into 
                            existing projects.</p>
                        <p>While that was fun, I felt like it would be helpful to share what I was learning and most 
                            things about my journey with the world.</p>
                        <h2>How I got started</h2>
                        <p>I started simple and gradually grew my learning journal site. I would take notes about what 
                            I was learning. After each learning session, I'd use my notes to not only reflect on what I 
                            learned but also write short summaries of what I learned using my own words.</p>
                        <p>That helped me grok what I was learning, and I realized that posting my learning summaries was 
                            also helping others learn and stay motivated.</p>`,
        get renderedHtml() { 
            return this.renderArticleHtml(
            this.getFormattedDateString(), 
            this.title, 
            this.postHtmlString
            )
        },
        renderArticleHtml: function(dateString, title, postHtml) {
            return `<article class="feature-post">
                        <header class="feature-post__header">
                            <time class="feature-post__date" datetime="YYYY-MM-DD">${dateString}</time>
                            <h1 class="feature-post__heading">${title}</h1>
                        </header>
                        ${postHtml}
                    </article>`;
        },
        getFirstParagraph: function() {
            const parser = new DOMParser();
            // Create HTMLDocument from string
            const htmlDoc = parser.parseFromString(this.postHtmlString, 'text/html');
            return htmlDoc.querySelector('p').textContent;
        },
        getFormattedDateString: function() {
            const d = new Date(this.publishedDate);
            const options = { timeZone: 'UTC', year: 'numeric', month: 'long', day: 'numeric' };
            return d.toLocaleDateString('en-US', options);
        }
    },
    
    
];

export { blogPosts };