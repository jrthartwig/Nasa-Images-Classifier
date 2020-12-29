import React, { useEffect } from 'react';

const Image = (props) => {

    const { imageURL } = props;

    useEffect(() => {

        {
            let myHeaders = new Headers();
            myHeaders.append("Prediction-Key", "d32479c7aa0b4c93ba62c00c97f3b952");
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({ "Url": `${imageURL}` });

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch("https://space-cadet-vision.cognitiveservices.azure.com/customvision/v3.0/Prediction/4457824c-3ee2-4619-ae00-edc640fd8dc1/classify/iterations/Iteration6/url", requestOptions)
                .then((response) => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
        }
    }, [])

    return (
        <div>
            <img src={imageURL} />
        </div>)
}

export default Image; 