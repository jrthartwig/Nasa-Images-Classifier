import React from 'react';

const ImageURLPoster = (props) => {

    const { imageUrls } = props; 


    imageUrls.forEach(url => fetch(`https://localhost:44392/imageurl?imageurl=${url}`)
        .then((res) => console.log(res)));

    return (<div>predicting</div>)

    };

export default ImageURLPoster; 