import React, { useState, useEffect } from 'react';

const ImageLoader = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [images, setImages] = useState();
    const [predictions, setPredictions] = useState();

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

                let myHeaders = new Headers();
                myHeaders.append("Prediction-Key", "d32479c7aa0b4c93ba62c00c97f3b952");
                myHeaders.append("Content-Type", "application/json");

                var raw = JSON.stringify({ "Url": images && `${image.img_src}` });

                var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                };

                fetch("https://space-cadet-vision.cognitiveservices.azure.com/customvision/v3.0/Prediction/4457824c-3ee2-4619-ae00-edc640fd8dc1/classify/iterations/Iteration6/url", requestOptions)
                    .then((response) => response.text())
                    //.then((result) => setPredictions(result))
                    .then(result => console.log(result))
                    .then(result => setPredictions)
                    .catch(error => console.log('error', error));


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
                    <div>{predictions && predictions}</div>
                </div>

            )) ||
            null
        );
    }
};


export default ImageLoader; 
