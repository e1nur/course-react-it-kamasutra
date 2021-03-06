import React from 'react';
import MyPostStyle from './MyPosts.module.css'
import Post from "./Post/Post";




const MyPosts = (props) => {


    let postsElement = props.postsData.map( (post) => {
        return (
                <Post message={post.message} likesCount={post.likesCount}/>
            )
    })

    let newPostElement = React.useRef(null)

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let postText = newPostElement.current.value
        props.updateNewPostText(postText)
    }

    return (
        <div className={MyPostStyle.addPostWrapper}>
            <div className={MyPostStyle.addPostTitle}>
                My posts
            </div>

            <div className={MyPostStyle.addPost}>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                <button onClick={ onAddPost }>Add post</button>
            </div>

            <div className={MyPostStyle.posts}>
                {postsElement}
            </div>
        </div>
    );
};

export default MyPosts;