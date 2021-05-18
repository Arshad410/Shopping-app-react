import React from "react";


type Props = {};

const ImageCard: React.FC<Props> = (props) => {
    return(
        <div className="card">
            <div className="card-header">

            </div>
            <div className="card-body text-center">
                <img src="https://image.shutterstock.com/image-vector/man-shirt-tie-businessman-avatar-260nw-548848999.jpg"/>
            </div>
            <div className="card-footer text-center">
                <button className="btn btn-sm btn-primary">Change Image</button>
            </div>
        </div>
    );
}

export default ImageCard;