import React, { useEffect, useState } from "react";
import "../styles/Blog.css";

function Blog() {
    const [posts, setPosts] = useState([]);

    // Replace with your actual API key and Blog ID
    const API_KEY = process.env.REACT_APP_API_KEY;
    const API_URL = `https://www.googleapis.com/blogger/v3/blogs/6186124035080459555/posts?key=${API_KEY}`;

    useEffect(() => {
        // Fetch posts from Blogger API
        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                console.log("API Response:", data); // For debugging
                
                // Process posts to extract images
                const processedPosts = data.items.map(post => ({
                    ...post,
                    imageUrl: extractImageUrl(post.content)
                }));
                
                setPosts(processedPosts);
            })
            .catch(error => {
                console.error("Error fetching blog posts:", error);
            });
    }, []);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long' };
        const date = new Date(dateString);
        return date.toLocaleDateString(undefined, options);
    };

    function extractImageUrl(content) {
        const imgTag = content.match(/<img [^>]*src="([^"]*)"/);
        return imgTag ? imgTag[1] : null;
    }

    return (
        <div>
            <h1 className="medium-padding-bottom">Blog</h1>
            <div className="blog-container medium-margin-bottom">
                {posts.length > 0 ? (
                    posts.map(post => (
                        <a className="blog-flex shadow backgrounded-2 rounded small-padding-bottom medium-margin-bottom" key={post.id} href={post.url} target="_blank" rel="noopener noreferrer">
                            {post.imageUrl && (
                                    <img className="blog-image shadow small-margin-bottom" src={post.imageUrl} alt={post.title} />
                            )}
                            <div className="small-padding-top" >
                                <h3 className="small-padding-bottom blog-title left-hand-padding right-hand-padding">{post.title} </h3>
                                <p className="loose">{formatDate(post.published)}</p>
                            </div>
                        </a>
                    ))   
                ) : (<a className="blog-flex" href="https://chrisselwoodblog.blogspot.com" alt="chrisselwoodblog.blogspot.com" target="_blank" rel="noopener noreferrer">
                        <h4>Links currently unavailable. Check out: <b>chrisselwoodblog.blogspot.com</b></h4>
                    </a>
                )}
            </div>
        </div>
    );
}

export default Blog;
