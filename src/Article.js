import React from 'react';

function Article() {
  return (
    <article>
      <h3>Blog Post 1</h3>
      <img src="./image/blog-image-1.jpg" alt="Image 1" />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <a href="#" className="continues">Read More...</a>
      <h3>Blog Post 2</h3>
      <img src="./image/blog-image-2.jpg" alt="Image 2" />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <a href="#" className="continues">Read More...</a>
    </article>
  );
}

export default Article;
