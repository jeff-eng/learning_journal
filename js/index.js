import { blogPosts } from './data.js';
import { createHeroPostItem, createPostItem, setYear, generateRandomUID, getFormattedRandomDate } from './functions.js';
import { Post } from './Post.js';

const titles = ['Scrimba Rocks', 
                'It Takes Practice', 
                'Learn with Repetition', 
                'Do Code Reviews',
                'Write. Refactor. Repeat.',
                'Think marathon. Not Sprint.',
                'Stay the course'
               ];
const reverseChronoPosts = blogPosts.map(postData => {
    const { id, title, publishedDate, webpFilepath, jpgFilepath, imgDescription, postHtmlString } = postData;
    return new Post(id, title, publishedDate, webpFilepath, jpgFilepath, imgDescription, postHtmlString);
}).sort((postA, postB) => {
    const dateA = new Date(postA.publishedDate);
    const dateB = new Date(postB.publishedDate);
    return dateB - dateA;
});

let trackedIndex = 0;
const loadPostsQty = 3;

// Infinite scroll - auto-load posts when scrolling to bottom of page
window.onscroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 75) {
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
            const postObj = createDummyPost(titles);
            reverseChronoPosts.push(postObj);
        }
    }
}

function createDummyPost(titles) {
    const dummyPostData = {
        randomUID: generateRandomUID(25),
        title: titles[Math.floor(Math.random() * titles.length)],
        publishedDate: getFormattedRandomDate((new Date(2023, 0, 1)), (new Date())),
        webpFilePath: Post.generateImageURL(false),
        jpgFilePath: Post.generateImageURL(true),
        imgDescription: 'placeholder image',
        postHtmlString: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
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
    };

    return new Post(dummyPostData.randomUID, 
                    dummyPostData.title,
                    dummyPostData.publishedDate,
                    dummyPostData.webpFilePath,
                    dummyPostData.jpgFilePath,
                    dummyPostData.imgDescription,
                    dummyPostData.postHtmlString
                   );
} 

// Load initial set of posts
loadPosts();
// Dynamically set year
setYear();