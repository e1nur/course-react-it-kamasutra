import React from 'react';
import MyProfileStyle from "../MyProfile.module.css";
import sakura from "../../../../images/sakura.png";
import samurai from "../../../../images/samurai.png";

const ProfileInfo = () => {
    return (
        <div>
            <div className={MyProfileStyle.topBackground}>
                <img className={MyProfileStyle.topImg} src={sakura} alt=""/>
            </div>

            <div className={MyProfileStyle.avatarAndDescr}>
                <div className={MyProfileStyle.avatar}>
                    <img src={samurai} alt=""/>
                </div>
                <div className={MyProfileStyle.descr}>
                    <div>Name: Elnur</div>
                    <div>Mission: finish the course</div>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;