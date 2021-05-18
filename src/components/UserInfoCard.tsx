import React from "react";
import { UserType } from "../types";

type Props = {
    profileData : UserType
};

const UserInfoCard: React.FC <Props> = ({profileData})=> {
    return(
        <div className="card">
            <div className="card-header">
                <h3 className="card-title">User Info</h3>
            </div>
            <div className="card-body">
                <h5>User Name : {profileData.userName}</h5>
                <h5>User Email : {profileData.userEmail}</h5>
                <h5>User Contact : {profileData.userContact}</h5>
            </div>
        </div>
    );
};

export default UserInfoCard;