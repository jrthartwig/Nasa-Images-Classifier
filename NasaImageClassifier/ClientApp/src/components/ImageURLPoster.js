import React from 'react';

const ImageURLPoster = (props) => {

    const { images} = props; 


    images.forEach(url => fetch(`https://localhost:44392/imageurl?imageurl=${images.img_src}`)
        .then((res) => console.log(res)));

    return (<div>predicting</div>)

    };

export default ImageURLPoster; 