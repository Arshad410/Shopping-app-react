import React, { useState } from "react";

type Props = { source: string };

const ImageWithFallback: React.FC<Props> = ({ source }) => {
    let [imgSrc, setDefault] = useState(source);
    return (
        <img 
            src={imgSrc} 
            onError={() => setDefault("https://thumbs.dreamstime.com/z/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482930.jpg")} 
            className="img-thumbnail" 
        />
    );
};

export default ImageWithFallback;