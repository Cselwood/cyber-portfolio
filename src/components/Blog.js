import React, { useEffect, useState } from "react";
import "../styles/Blog.css";

function Blog() {
    const [posts, setPosts] = useState([]);

    // Replace with your actual API key and Blog ID
    const API_KEY = process.env.REACT_APP_API_KEY;
    const BLOG_ID = process.env.REACT_APP_BLOG_ID;
    const API_URL = `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}`;

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
            {posts.length > 0 ? (
                posts.map(post => (
                    <a className="blog-flex blog-link" key={post.id} href={post.url} target="_blank" rel="noopener noreferrer">
                        {post.imageUrl && (
                                <img src={post.imageUrl} alt={post.title} style={{ width: '100px', height: '50px' }} />
                        )}
                        <div className="blog-right-half" >
                            <h4 className="blog-date">{formatDate(post.published)}</h4>
                            <h5>{post.title}</h5>
                        </div>
                    </a>
                ))   
            ) : (
                <p>No blog posts available.</p>
            )}
        </div>
    );
}

export default Blog;
