import React, { useState, useEffect } from 'react';

const ImageLoader = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [images, setImages] = useState();

    useEffect(() => {
        fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=cPmB3PNZCJGbJ8YYWhA7m8hbYu0z4yqxSoai7cu1")
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setImages(result.photos);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, []);

    useEffect(() => {
        images &&
            images.forEach(image => {
                fetch(`https://localhost:5001/api/prediction/ImageUrl?imageurl=${image.img_src}`, { method: 'POST' })
                    .then(response => console.log(response))
                    .catch((error) => console.log(error))
            })

    }, [images]);


    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            (images && (
                <div>
                    {images.map((i, k) => (
                        <img key={k} src={i.img_src} />
                    ))
                    }
                </div>
            )) ||
            null
        );
    }
};


export default ImageLoader; 
