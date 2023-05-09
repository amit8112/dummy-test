import React, { useEffect, useState } from 'react'

const Contact = () => {

    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        fetch('https://www.googleapis.com/blogger/v3/blogs/BLOG_ID/posts/POST_ID?key=API_KEY')
            .then(response => response.json())
            .then(data => {
                setImageUrl(data.images[0].url);
            })
            .catch(error => console.log(error));
    }, []);
    return (
        <div>
            <img src={imageUrl} alt="blog image" />
        </div>
    )
}

export default Contact