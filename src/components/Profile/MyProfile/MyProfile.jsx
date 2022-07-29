import React from 'react';
import MyProfileStyle from './MyProfile.module.css'
import sakura from '../../../images/sakura.png'
import samurai from '../../../images/samurai.png'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";




const MyProfile = () => {
    return (
        <main className={MyProfileStyle.myProfile}>
            <div>
                <ProfileInfo/>
                <MyPostsContainer/>
            </div>
        </main>
    );
};

export default MyProfile;